# Le Voyage Resort — Netlify Serverless Frontend Deployment Guide

This repository contains the **Le Voyage Resort** frontend website configured for **Netlify** hosting with zero database requirements (no Supabase, PostgreSQL, SQLite, PHP, XAMPP, or custom backend servers required).

---

## 1. Architecture Overview

```text
VISITOR / GUEST
      ↓
LE VOYAGE RESORT FRONTEND (Netlify Host)
      ↓
┌───────────────────────────────────────┐
│                                       │
↓                                       ↓
WHATSAPP INSTANT CONFIRMATION           DIRECT EMAIL DELIVERY
(https://wa.me/qr/DJDEXL6QEBVQL1)       (mailto:gackstoneb@gmail.com)
      ↓                                       ↓
RESORT DESK                             RESORT MANAGER EMAIL
```

---

## 2. Delivery Channels

- **WhatsApp Destination**: [`https://wa.me/qr/DJDEXL6QEBVQL1`](https://wa.me/qr/DJDEXL6QEBVQL1)
- **Email Destination**: `gackstoneb@gmail.com`

---

## 3. Netlify Deployment Instructions

### Method A: Netlify Git Integration (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log in to [Netlify](https://app.netlify.com).
3. Click **Add new site** > **Import an existing project**.
4. Select your repository.
5. Netlify will auto-detect the configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **Deploy site**.

### Method B: Netlify CLI
```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build the project
npm run build

# 3. Deploy to Netlify
netlify deploy --prod
```

---

## 4. Verification & Testing

Verify locally before pushing to production:

```bash
# 1. Type Check
npx tsc --noEmit

# 2. Build Test
npm run build

# 3. Development Server
npm run dev
```

Test form submissions on the dev server:
- **Room Booking Modal**: Generates reference number (`LVB-XXXX`), provides direct buttons for WhatsApp (`https://wa.me/qr/DJDEXL6QEBVQL1`) and Email (`gackstoneb@gmail.com`).
- **General Contact Enquiry**: Directs message to Email and WhatsApp.
- **Conference / Event Quote Request**: Directs quote request payload to Email and WhatsApp.
