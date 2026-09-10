'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/data/menuData';
import { RESORT_INFO, getWhatsAppLink, getEmailMailtoLink } from '@/config/resortInfo';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  roomOrTable?: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
  instructions?: string;
}

interface OrderContextType {
  orderItems: OrderItem[];
  addToOrder: (item: MenuItem, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromOrder: (itemId: string) => void;
  clearOrder: () => void;
  totalItemsCount: number;
  totalAmount: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  generateWhatsAppUrl: (customer: CustomerDetails) => string;
  generateEmailUrl: (customer: CustomerDetails) => string;
  formatOrderSummaryText: (customer: CustomerDetails) => string;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const STORAGE_KEY = 'levoyage_order_cart_v1';

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setOrderItems(parsed);
          }
        }
      }
    } catch (e) {
      console.warn('Failed to load order from localStorage', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to local storage on update
  useEffect(() => {
    if (!isInitialized) return;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orderItems));
      }
    } catch (e) {
      console.warn('Failed to save order to localStorage', e);
    }
  }, [orderItems, isInitialized]);

  const addToOrder = (item: MenuItem, quantity: number = 1) => {
    if (quantity <= 0) return;
    setOrderItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.item.id === item.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
        };
        return updated;
      } else {
        return [...prev, { item, quantity }];
      }
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(itemId);
      return;
    }
    setOrderItems((prev) =>
      prev.map((i) => (i.item.id === itemId ? { ...i, quantity: Math.max(1, Math.floor(quantity)) } : i))
    );
  };

  const removeFromOrder = (itemId: string) => {
    setOrderItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const clearOrder = () => {
    setOrderItems([]);
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
  };

  const totalItemsCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = orderItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const formatOrderSummaryText = (customer: CustomerDetails) => {
    const lines: string[] = [];
    lines.push('LE-VOYAGE RESORT');
    lines.push('NEW MENU ORDER');
    lines.push('');
    lines.push('Customer:');
    lines.push(customer.name.trim() || 'Guest');
    lines.push('');
    lines.push('Phone:');
    lines.push(customer.phone.trim() || 'N/A');
    lines.push('');
    if (customer.roomOrTable && customer.roomOrTable.trim()) {
      lines.push('Room / Table / Reservation:');
      lines.push(customer.roomOrTable.trim());
      lines.push('');
    }
    lines.push('Preferred Contact:');
    lines.push(customer.preferredContact);
    lines.push('');
    lines.push('Order:');
    lines.push('');

    orderItems.forEach((orderItem, index) => {
      const subtotal = orderItem.item.price * orderItem.quantity;
      const sizeStr = orderItem.item.size ? ` (${orderItem.item.size})` : '';
      lines.push(`${index + 1}. ${orderItem.item.name}${sizeStr}`);
      lines.push(`Qty: ${orderItem.quantity}`);
      lines.push(`Unit Price: KSh ${orderItem.item.price.toLocaleString()}`);
      lines.push(`Subtotal: KSh ${subtotal.toLocaleString()}`);
      lines.push('');
    });

    lines.push(`TOTAL: KSh ${totalAmount.toLocaleString()}`);
    lines.push('');
    lines.push('Additional Instructions:');
    lines.push(customer.instructions?.trim() || 'None');

    return lines.join('\n');
  };

  const generateWhatsAppUrl = (customer: CustomerDetails) => {
    const message = formatOrderSummaryText(customer);
    return getWhatsAppLink(message);
  };

  const generateEmailUrl = (customer: CustomerDetails) => {
    const subject = `LE-VOYAGE Resort — New Menu Order from ${customer.name.trim() || 'Guest'}`;
    const body = formatOrderSummaryText(customer);
    return getEmailMailtoLink(subject, body);
  };

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        addToOrder,
        updateQuantity,
        removeFromOrder,
        clearOrder,
        totalItemsCount,
        totalAmount,
        isDrawerOpen,
        setIsDrawerOpen,
        generateWhatsAppUrl,
        generateEmailUrl,
        formatOrderSummaryText,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
