# 🧸 DreamLand – A Local Kids Toy Store Platform

**Live Site:** [🌐 https://dreamland-439d7.web.app](https://dreamland-439d7.web.app)

---

## 🎯 Project Overview

**DreamLand** is a vibrant and playful online marketplace where families can discover and support **local toy sellers**.  
It blends the warmth of neighborhood toy shops with the convenience of modern e-commerce — helping parents find the perfect toys for their kids while uplifting community businesses.

---

## 🚀 Key Features

### 👨‍👩‍👧 User Features
- 🔐 **User Authentication:** Secure login and registration using **Firebase Auth** (Email & Google).
- 📖 **Toy Details Page:** View full information — price, quantity, seller info, and ratings.
- ⭐ **User Reviews & Ratings:** Leave feedback using;
- 🛒 **Add to Cart System:** Add toys to the cart and see dynamic updates in the navbar.
- 📱 **Fully Responsive:** Seamlessly works across mobile, tablet, and desktop.
- ➕ **CRUD Operations:** Add and delete toy listings securely.
- 🔐 **Protected Routes:** Only authenticated users can manage their listings.

### 💳 Cart & Checkout
- Real-time cart synchronization using **React Context API** + **localStorage**.
- Automatic calculation of total price and shipping charge.
- Quick **“Buy Now”** checkout section.

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React (Vite) |
| **Routing** | React Router v7 |
| **State Management** | React Context API |
| **Styling** | Tailwind CSS + DaisyUI |
| **Authentication** | Firebase Authentication |
| **Hosting** | Firebase Hosting |
| **Animation & UI** | AOS, SwiperJS, React Toastify, React Icons |

---

## 🧩 NPM Packages Used

```json
{
  "aos": "^2.3.4",
  "firebase": "^12.4.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-rating-stars-component": "^2.2.0",
  "react-router": "^7.9.4",
  "react-simple-star-rating": "^5.1.7",
  "react-spinners": "^0.17.0",
  "react-toastify": "^11.0.5",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.15",
  "daisyui": "^5.3.7"
}
