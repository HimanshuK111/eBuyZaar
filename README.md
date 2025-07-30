# 🛒 ⓔBuyZaar – Frontend

**ⓔBuyZaar** is a modern and responsive frontend e-commerce application built with **React.js** and **CSS**. It delivers a smooth and intuitive shopping experience, complete with dynamic product listings, cart management using Context API and `useReducer`, and Firebase-based user authentication.

---

## 🚀 Live Demo

🚧 Project not yet deployed. Live demo link will be added after GitHub and Vercel deployment.

---

## 🔧 Tech Stack

* **React.js** – Component-based UI library
* **React Router DOM** – Client-side routing
* **Context API + useReducer** – Global state management (basket handling)
* **CSS** – Styling
* **Firebase Auth** – Email/password login & registration
* **Vercel / Netlify** – Deployment platform

---

## 🖼️ Screenshots

### 🔐 Login Page

![Login Page](./screenshots/Screenshot%202025-07-30%20070339.png)

### 🏠 Homepage

![Home Page](./screenshots/Screenshot%202025-07-30%20070405.png)

### 🛒 Checkout Page

![Checkout Page](./screenshots/Screenshot%202025-07-30%20070457.png)

### 🧾 Additional Product View

![More Products](./screenshots/Screenshot%202025-07-30%20071939.png)

---

## 📦 Features

* 🛍️ Add to Cart, Remove from Cart, Quantity handling
* 📦 Checkout Page with Subtotal calculation
* 🔐 Sign-in and Sign-up using Firebase Authentication
* 🖼️ Product listing with ratings and image display
* 🧮 Subtotal price formatter using `react-number-format`
* 📱 Fully responsive layout
* 🔔 Basket counter icon in the Header

---

## 🛠️ Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/eBuyZaar.git
   cd eBuyZaar
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Locally**

   ```bash
   npm start
   ```

4. **Build for Production**

   ```bash
   npm run build
   ```

---

## 🔐 Environment Variables – Firebase Setup

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
```

> You must configure Firebase in `firebase.js` and import methods like `signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, and `auth` accordingly.

---

## 🗂️ Folder Structure

```
src/
├── App.js              # App entry point with routing
├── index.js            # React root with StateProvider
├── Header.js           # Navbar with cart & auth links
├── Home.js             # Homepage rendering product rows
├── Product.js          # Product card component
├── Checkout.js         # Basket review screen
├── CheckoutProduct.js  # Individual product in basket
├── Subtotal.js         # Price calculator with gift checkbox
├── Login.js            # Firebase login & registration
├── StateProvider.js    # Context + useReducer setup
├── reducer.js          # Basket logic with actions
├── firebase.js         # Firebase auth config (not shown)
├── *.css               # Styling for each component
```

---

## 📌 Future Enhancements

* Product sorting & filtering
* Wishlist functionality
* Razorpay/Stripe Payment Integration
* Admin Panel for Inventory Control
* Dark Mode Toggle

---

## 📃 License

ⓔBuyZaar is open-source and released under the **MIT License**.

---

**ⓔBuyZaar** – *Your Bazaar. Your Way.*



