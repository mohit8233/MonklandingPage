# 🚀 Search Engine Monks – Digital Agency Website & Client Dashboard

A modern, responsive, and high-performance web application built for **Search Engine Monks**. The project includes a professional landing page, Firebase Authentication, and a secure client dashboard where users can manage their profile, service requests, consultations, quotations, and account settings.

---

# 🌐 Live Features

## Landing Page

- Modern UI Design
- Fully Responsive Layout
- Premium Hero Section
- Animated CTA Buttons
- Services Section
- Why Choose Us
- Work Process
- Portfolio Showcase
- Testimonials
- FAQ Section
- Contact Form
- Footer
- Smooth Scroll Navigation
- Hover Animations
- Responsive Navbar

---

# 💼 Services Included

- Website Design & Development
- Search Engine Optimization (SEO)
- Google Ads
- Meta Ads
- Social Media Marketing
- Branding & Graphic Design
- AI Marketing Solutions
- Content Marketing
- Digital Marketing Strategy

---

# 🔐 Authentication

Implemented using Firebase Authentication.

### Features

- User Registration
- Email Login
- Google Sign In
- Logout
- Forgot Password
- Change Password
- Protected Routes
- Public Routes

---

# 👤 Client Dashboard

A complete client dashboard where authenticated users can manage their account.

### Dashboard Pages

- Dashboard Home
- My Profile
- My Requests
- Consultations
- Quotes
- Notifications
- Settings

---

# ⚙️ Settings Features

- Update Profile
- Change Password
- Forgot Password
- Notification Preferences
- Privacy Information
- Firestore Data Update

---

# 🔥 Firebase Integration

## Firebase Authentication

- Email Authentication
- Google Authentication
- Password Reset
- Password Update
- User Session Management

---

## Cloud Firestore

Stores user information.

Example structure:

```json
{
  "uid": "",
  "name": "",
  "email": "",
  "phone": "",
  "photoURL": "",
  "company": "",
  "address": "",
  "bio": "",
  "role": "client",
  "createdAt": ""
}
```

---

# 🎨 UI & UX Features

- Premium UI
- Modern Design
- Mobile First
- Fully Responsive
- Smooth Animations
- Beautiful Cards
- Interactive Buttons
- Clean Typography
- Lucide Icons
- Toast Notifications
- Loading States
- Hover Effects
- Professional Color Palette

---

# 📱 Responsive Design

Supports

- 270px (Galaxy Fold)
- 320px
- 375px
- 425px
- 768px
- 1024px
- 1440px
- Large Desktop Screens

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React
- React Toastify

---

## Backend

- Firebase Authentication
- Cloud Firestore

---

# 📂 Project Structure

```
src
│
├── assets
│
├── components
│   ├── layout
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── DashboardLayout.jsx
│   │
│   ├── sections
│   │   ├── Hero.jsx
│   │   ├── Trusted.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Process.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── CTA.jsx
│   │
│   └── ui
│       ├── Button.jsx
│       ├── Loader.jsx
│       ├── Card.jsx
│       └── Modal.jsx
│
├── context
│   └── AuthContext.jsx
│
├── firebase
│   ├── firebase.js
│   └── firestore.js
│
├── pages
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   │
│   ├── auth
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ForgotPassword.jsx
│   │
│   └── dashboard
│       ├── Dashboard.jsx
│       ├── Profile.jsx
│       ├── MyRequests.jsx
│       ├── Consultations.jsx
│       ├── Quotes.jsx
│       ├── Notifications.jsx
│       └── Settings.jsx
│
├── routes
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📋 Landing Page Sections

## Hero

- Responsive Hero
- CTA Buttons
- Premium Design

---

## Trusted Companies

- Brand Logos
- Trust Section

---

## Services

- Service Cards
- Hover Effects

---

## Why Choose Us

- Company Benefits
- Statistics
- Features

---

## Work Process

- Discovery
- Planning
- Design
- Development
- Testing
- Launch

---

## Portfolio

- Project Showcase
- Responsive Grid

---

## Testimonials

- Client Reviews
- Rating Cards

---

## FAQ

- Accordion Design
- Common Questions

---

## Contact

- Contact Form
- Email Integration
- Validation

---

## Footer

- Company Information
- Navigation Links
- Social Media Links

---

# 🔒 Security

- Firebase Authentication
- Protected Routes
- Secure Firestore Rules
- Password Validation
- Password Reset
- Session Management

---

# 🚀 Performance

- Fast Loading
- Responsive Images
- Optimized Components
- Reusable Components
- Clean Folder Structure

---

# 📦 Installation

Clone Repository

```bash
git clone https://github.com/yourusername/search-engine-monks.git
```

Install Dependencies

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

Build Production

```bash
npm run build
```

Preview Production

```bash
npm run preview
```

---

# 📦 Packages Used

```bash
npm install react-router-dom
npm install firebase
npm install tailwindcss
npm install framer-motion
npm install react-toastify
npm install lucide-react
```

---

# 🎯 Future Enhancements

- Admin Dashboard
- Role Based Authentication
- Online Payments
- Chat System
- Blog Module
- Email Verification
- File Upload
- Profile Picture Upload
- Analytics Dashboard
- AI Chat Assistant
- Project Tracking
- Ticket Management
- Notification Center
- Multi Language Support
- Dark Mode

---
