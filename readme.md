# 🛍️ AI-Fashion — E-Commerce Website

**AI-Fashion** is a frontend-focused **e-commerce website project** with multiple pages including **Home, Shop, About Us, Personalized, Login, and Signup**.  
The project is built using **HTML, CSS, JavaScript**, with **basic PHP endpoints** for login and signup handling.

The main entry file is **`app.html`**, which embeds the website using an iframe pointing to `AI-Fashion/Home.html`.

---

## 📌 Features

- 🏠 Home / Landing page
- 🛒 Shop & product listing
- 👕 Personalized (AI-Fashion concept UI)
- ℹ️ About Us page
- 🔐 Login & Signup pages (PHP handlers)
- 🖼️ Organized assets (images & icons)
- ⚡ Lightweight, framework-free frontend

> Note: The “AI-Fashion” aspect currently represents **UI/UX and concept-level personalization**. ML/AI integration can be added in future versions.

---

## 🚀 Quick Start

### Option 1: Static Preview (Recommended for quick demo)
- Simply open `app.html` in any modern browser  
  (double-click or **Right Click → Open With → Browser**)

### Option 2: Run with PHP (Login / Signup)
If you want the PHP files to execute:

```bash
php -S localhost:8000
```
Then open in browser:
```bash
http://localhost:8000/app.html
```
Alternatively, you may use XAMPP / WAMP / Laragon and place the project inside htdocs.

## 📁 Project Structure
### Top-Level Files
```bash
app.html
README.md
requirements.txt
.gitignore
AI-Fashion/
```
## AI-Fashion/ Folder Structure
```bash
AI-Fashion/
│
├── home.css
├── Home.html
├── home.js
│
├── shop.css
├── shop.html
├── shop.js
│
├── about-us.css
├── about-us.html
├── about-us.js
│
├── personalized.html
│
├── Login.css
├── Login.html
├── login.js
├── login.php
│
├── Signup.css
├── signup.html
├── signup.js
├── signup.php
│
├── index.html
│
├── icons/
└── images/
```

## 🧭 Main Pages Overview
1. Home.html — Main landing page
2. shop.html — Product listing / shop interface
3. about-us.html — About page
4. personalized.html — Personalized fashion UI concept
5. Login.html / login.php — Login form and PHP handler
6. signup.html / signup.php — Signup form and PHP handler
7. index.html — Additional entry/demo page
8. app.html — Primary entry file (iframe-based wrapper)

## 🛠 Tech Stack
- Frontend: HTML5, CSS3, JavaScript
- Backend (minimal): PHP (login & signup handlers)
- Assets: Images, SVGs, icons
- Tools: Git, GitHub, Browser, Optional PHP server

## ⚠️ Notes & Tips
- This project is primarily frontend.
- Open app.html directly for fast preview.
- PHP files require a local server to function.

If images do not load, ensure:
- Folder structure is unchanged
- Relative paths are correct
- No database is connected by default.

## 🧠 Future Improvements (Optional)
1. Database integration (MySQL)
2. Real authentication logic
3. AI/ML-based recommendation engine
4. Backend API (Node.js / Django / Flask)
5. React or MERN conversion

## 📌 Author
- Muhammad Sabtain Khan
- GitHub: https://github.com/Sabtain-Dev

## 📄 License
This project is intended for educational, academic, and portfolio use.

