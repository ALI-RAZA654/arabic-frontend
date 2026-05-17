# Freeze Dry - Luxury Bilingual E-Commerce Portal

## 🌟 Project Overview
This project is a premium, high-performance e-commerce web application designed for a luxury confectionery brand called "Freeze Dry". It features a fully bilingual interface (Arabic & English) and a powerful admin dashboard for managing products, categories, and orders.

---

## 🚀 Key Features (A to Z)

### 1. Bilingual Interface
- **Smooth Toggle:** Instant switching between Arabic (RTL) and English (LTR).
- **Localized Content:** All UI elements, product names, descriptions, and categories are fully translated.
- **Dynamic Fonts:** Uses professional fonts like 'Cairo' for a premium look in both languages.

### 2. Product Catalog
- **Visual Presentation:** Premium card layout with hover effects and quick zoom.
- **Advanced Search:** Real-time search that works across Arabic (with normalization for harakat/alifs) and English.
- **Categorization:** Clean pill-style category navigation for easy filtering.
- **Visibility Control:** Admin can hide/show products from the catalog without deleting them.

### 3. Shopping & Ordering System
- **Dynamic Cart:** Real-time quantity updates and floating order buttons.
- **Order Form:** Simplified and validated checkout process.
- **Success Summaries:** Beautifully designed order receipts that appear immediately after purchase.
- **Export Capabilities:** Customers can download their order summary as a **PDF** or **Image** for sharing.

### 4. Admin Panel (Control Center)
- **Dashboard:** Overview of the entire store state.
- **Product Management:** Full CRUD (Create, Read, Update, Delete) for products including image uploads.
- **Category Management:** Manage catalog sections and update naming.
- **Banner Customization:** Update the homepage hero banner (Title, Subtitle, and Video/Image background) directly from the UI.
- **Order Tracking:** View all customer orders with thumbnails of purchased items.
- **Store Settings:** Toggle public pricing on/off.

### 5. Technical Excellence
- **Secure Backend API Integration:** Fully integrated with a Node.js/Express backend, replacing browser-bound storage with robust, persistent database management.
- **Image Compression:** Automatic client-side compression for uploaded images using HTML5 Canvas prior to database transmission to ensure fast load speeds and low database sizes.
- **PDF Generation:** Custom implementation using `jsPDF` and `html2canvas` for high-quality exports.
- **Responsive Design:** Optimized for Mobile (iPhone SE to large screens) and Desktop.

---

## 🛠️ Technology Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **Security:** JSON Web Tokens (JWT) for Admin authentication
- **Styling:** Tailwind CSS (Custom Design System)
- **Icons:** Lucide React
- **Libraries:** jsPDF, html2canvas

---

## 📁 File Structure
- `arabic web/src/App.jsx`: Core storefront and admin panel logic, routing, and component assemblies.
- `arabic web/src/data.js`: Original mock data structures.
- `arabic web/src/index.css`: Global styles and design system tokens.
- `backend ar/src/app.js`: Express server initialization and routing middleware.
- `backend ar/src/models/`: Database schemas (Admin, Category, Product, Order, Settings).
- `backend ar/src/routes/`: API controllers for customer products/orders and secure admin operations.

---

## 🛡️ Security & Maintenance
- **Admin Authentication:** Fully-authenticated JWT login flow with Bearer token protection for all administrative actions (Products, Categories, Settings, Reset).
- **Data Reset:** Database factory reset endpoint (`POST /api/admin/reset`) protected by admin password confirmation to clear products, categories, and orders.

---

*This project represents a state-of-the-art solution for modern e-commerce needs, focusing on aesthetics, speed, and usability.*
