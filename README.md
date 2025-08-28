<div align="center">

# 🔗 URL Shortener

*Transform long URLs into short, shareable links with style*

[![Demo](https://img.shields.io/badge/🌟-Live%20Demo-blue?style=for-the-badge)](https://shortner-url-wmao.onrender.com)
[![GitHub](https://img.shields.io/badge/📦-Source%20Code-black?style=for-the-badge)](https://github.com/akriti-e/shortner-url)

---

**A brutalist-styled, full-stack URL shortener built with modern web technologies**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Deployment](#-deployment) • [API Docs](#-api-documentation)

</div>

---

## 📸 **Preview**

<div align="center">

![URL Shortener Preview](./assets/images/app-preview.png)

*✨ Clean, brutalist design with intuitive URL shortening interface*

</div>

---

## ✨ **Features**

<table>
<tr>
<td width="50%">

### 🎯 **Core Functionality**
- ⚡ **Lightning Fast** URL shortening
- 🎨 **Beautiful Brutalist UI** with Tailwind CSS
- 📊 **Click Analytics** & performance tracking
- 🔐 **JWT Authentication** system
- 📱 **Fully Responsive** design

</td>
<td width="50%">

### 🚀 **Advanced Features**
- 👤 **User Dashboard** for link management
- 🎛️ **Custom Short URLs** (for authenticated users)
- 🔒 **Secure & Private** - Your data is safe
- 🌐 **Production Ready** deployment
- 📈 **Real-time Updates** with TanStack Query

</td>
</tr>
</table>

## 🏗️ **Tech Stack**

<div align="center">

### Frontend Arsenal
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TanStack](https://img.shields.io/badge/TanStack-FF4154?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)

### Backend Powerhouse
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Deployment & Tools
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

</div>

### **Architecture Overview**
```mermaid
graph TD
    A[React Frontend] -->|HTTP Requests| B[Express.js Backend]
    B -->|Auth| C[JWT Tokens]
    B -->|Data| D[MongoDB Atlas]
    B -->|Short URLs| E[nanoid Generator]
    F[User] -->|Clicks Short URL| B
    B -->|Redirects| G[Original URL]
```

## 🚀 **Quick Start**

<details>
<summary><b>🔧 Prerequisites</b></summary>

Make sure you have the following installed:
- **Node.js** (v18 or higher) 
- **MongoDB** (Atlas or local installation)
- **npm** or **yarn**
- **Git** for version control

</details>

### **⚡ One-Click Setup**

```bash
# Clone the repository
git clone https://github.com/akriti-e/shortner-url.git
cd shortner-url

# Install dependencies for both frontend and backend
npm run install-backend
npm run install-frontend

# Set up environment variables (see configuration below)
cp BACKEND/.env.example BACKEND/.env

# Start development servers
npm run dev-backend    # Backend on :5000
npm run dev-frontend   # Frontend on :5173
```

### **🔐 Environment Configuration**

<details>
<summary><b>Backend (.env)</b></summary>

```env
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener

# JWT Configuration  
JWT_SECRET=your-super-secure-jwt-secret
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

</details>

<details>
<summary><b>Frontend Environment</b></summary>

Create `FRONTEND/.env.local`:
```env
VITE_API_URL=http://localhost:5000
```

</details>

## 📁 **Project Structure**

```
shortner-url/
├── 📂 BACKEND/                    # Node.js Express Server
│   ├── 🚀 app.js                 # Application entry point
│   ├── 📦 package.json           # Dependencies & scripts
│   └── 📂 src/
│       ├── ⚙️ config/            # Database & app configuration
│       ├── 🎮 controller/        # Route handlers & business logic
│       ├── 🗃️ dao/               # Data access layer
│       ├── 🛡️ middleware/        # Authentication & validation
│       ├── 📊 models/            # MongoDB schemas
│       ├── 🛣️ routes/            # API endpoints
│       ├── 🔧 services/          # Core business services
│       └── 🛠️ utils/             # Helper functions
└── 📂 FRONTEND/                   # React SPA
    ├── 📦 package.json           # Dependencies & scripts
    ├── ⚡ vite.config.js         # Build configuration
    └── 📂 src/
        ├── 🔌 api/               # API service layer
        ├── 🎨 components/        # Reusable UI components
        ├── 📄 pages/             # Page components
        ├── 🧭 routing/           # Route configuration
        ├── 📊 store/             # Redux state management
        └── 🛠️ utils/             # Helper functions
```

## 🎯 **Usage Guide**

### **For Developers**
```bash
# Development workflow
npm run dev-backend     # Start backend with hot reload
npm run dev-frontend    # Start frontend with HMR
```

### **For Users**
1. **🏠 Visit Homepage** - Clean, brutalist design
2. **🔗 Create Short URLs** - Paste any long URL
3. **👤 Register Account** - Get custom slugs & analytics  
4. **📊 View Dashboard** - Manage your URLs & track clicks
5. **📱 Share Anywhere** - Your short URLs work everywhere

---

## 🛠️ **Development**

### **🎨 Frontend Development**
- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS with brutalist design
- **State Management:** Redux Toolkit + TanStack Query
- **Routing:** TanStack Router with file-based routing

### **⚙️ Backend Development**  
- **Runtime:** Node.js with Express 5
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT with httpOnly cookies
- **Validation:** Custom middleware & error handling

### **📊 Database Schema**
```javascript
// Short URL Model
{
  full_url: String,      // Original long URL
  short_url: String,     // Generated short code (unique)
  clicks: Number,        // Click counter
  user: ObjectId,        // User reference (optional)
  createdAt: Date        // Timestamp
}

// User Model
{
  name: String,
  email: String,         // Unique identifier
  password: String,      // Hashed with bcrypt
  avatar: String,        // Profile image URL
  createdAt: Date
}
```

## 🎯 **API Documentation**

<details>
<summary><b>🔐 Authentication Endpoints</b></summary>

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | Login user | ❌ |
| `POST` | `/api/auth/logout` | Logout user | ✅ |
| `GET` | `/api/auth/me` | Get current user | ✅ |

</details>

<details>
<summary><b>🔗 URL Management</b></summary>

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/create` | Create short URL | ❌ |
| `POST` | `/api/user/urls` | Get user's URLs | ✅ |
| `GET` | `/:shortCode` | Redirect to original URL | ❌ |

</details>

### **📊 Response Examples**

<details>
<summary><b>Create Short URL</b></summary>

**Request:**
```json
{
  "url": "https://www.example.com/very-long-url",
  "slug": "custom-slug" // Optional for authenticated users
}
```

**Response:**
```json
{
  "shortUrl": "https://your-backend.onrender.com/abc123"
}
```

</details>

## 🎯 Usage

1. **Register/Login**: Create an account or sign in to access the dashboard
2. **Shorten URLs**: Paste any long URL to get a short, shareable link
3. **Track Performance**: Monitor click counts and analytics for your URLs
4. **Manage URLs**: View, edit, or delete your shortened URLs from the dashboard
5. **Share**: Use the shortened URLs anywhere - they redirect instantly

## 🛠️ Development

### Backend Development
```bash
cd BACKEND
npm run dev  # Starts with nodemon for auto-restart
```

### Frontend Development
```bash
cd FRONTEND
npm run dev  # Starts Vite dev server with HMR
```

### Building for Production

**Backend**:
```bash
cd BACKEND
npm start
```

**Frontend**:
```bash
cd FRONTEND
npm run build
npm run preview  # Preview the production build
```

## 🧪 Testing

Currently, the project uses a basic test setup. To run tests:

```bash
# Backend
cd BACKEND
npm test

# Frontend
cd FRONTEND
npm run lint  # Run ESLint
```

## 🚀 **Deployment**

### **🌐 Live Deployment on Render**

This project is configured for seamless deployment on **Render**.

<details>
<summary><b>📱 Frontend Deployment (Static Site)</b></summary>

**Render Settings:**
- **Type:** Static Site
- **Repository:** `https://github.com/akriti-e/shortner-url`
- **Root Directory:** `FRONTEND`
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

**Environment Variables:**
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

</details>

<details>
<summary><b>⚙️ Backend Deployment (Web Service)</b></summary>

**Render Settings:**
- **Type:** Web Service
- **Repository:** `https://github.com/akriti-e/shortner-url`
- **Root Directory:** `BACKEND`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment:** Node.js

**Environment Variables:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRES_IN=7d
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.onrender.com
```

</details>

### **🐳 Alternative Deployment Options**

<details>
<summary><b>Docker Deployment</b></summary>

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or individually
docker build -t url-shortener-backend ./BACKEND
docker build -t url-shortener-frontend ./FRONTEND
```

</details>

<details>
<summary><b>Manual Deployment</b></summary>

**Backend:**
```bash
cd BACKEND
npm install
npm start
```

**Frontend:**
```bash
cd FRONTEND
npm install
npm run build
# Serve the dist folder with any static hosting
```

</details>

---

## 🤝 **Contributing**

We welcome contributions! Here's how to get started:

<details>
<summary><b>📝 Contribution Guidelines</b></summary>

1. **Fork the repository**
2. **Create your feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`  
5. **Open a Pull Request**

**Code Style:**
- Follow ESLint configuration
- Use meaningful commit messages
- Add comments for complex logic
- Test your changes locally

</details>

## 🔧 **Troubleshooting**

<details>
<summary><b>🚨 Common Issues</b></summary>

**Backend Issues:**
- **CORS Errors:** Check `FRONTEND_URL` in `.env`
- **Database Connection:** Verify `MONGO_URI` format
- **Port Issues:** Ensure port 5000 is available

**Frontend Issues:**
- **API Calls Failing:** Check `VITE_API_URL` configuration
- **Build Errors:** Clear `node_modules` and reinstall
- **Routing Issues:** Verify TanStack Router setup

**Deployment Issues:**
- **Environment Variables:** Double-check all required vars
- **Build Failures:** Review build logs in Render dashboard
- **HTTPS/HTTP:** Ensure consistent protocol usage

</details>

## 📄 **License**

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

<div align="center">

**Built with ❤️ using these amazing technologies:**

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Special thanks to:**
- [nanoid](https://github.com/ai/nanoid) for unique ID generation
- [TanStack](https://tanstack.com/) for excellent React libraries
- [Render](https://render.com/) for seamless deployment
- [Lucide](https://lucide.dev/) for beautiful icons

</div>

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

**🔗 [Live Demo](https://shortner-url-wmao.onrender.com)** | **📧 [Report Issues](https://github.com/akriti-e/shortner-url/issues)** | **🤝 [Contribute](https://github.com/akriti-e/shortner-url/pulls)**

**Made with 💜 by [akriti-e](https://github.com/akriti-e)**

</div>
