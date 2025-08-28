# 🔗 URL Shortener

A modern, full-stack URL shortener application built with React and Node.js. Transform long URLs into short, shareable links with analytics and user management features.

## ✨ Features

- **🔐 User Authentication**: Secure registration and login system
- **⚡ URL Shortening**: Convert long URLs into short, memorable links
- **📊 Analytics**: Track click counts and monitor URL performance
- **👤 User Dashboard**: Manage your shortened URLs in one place
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS
- **📱 Mobile Friendly**: Fully responsive across all devices
- **🔒 Secure**: JWT-based authentication and data protection

## 🏗️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **TanStack Router** - Type-safe routing
- **TanStack Query** - Server state management
- **Redux Toolkit** - Client state management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **nanoid** - Unique ID generator for short URLs

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shortner-url-main
   ```

2. **Setup Backend**
   ```bash
   cd BACKEND
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../FRONTEND
   npm install
   ```

### Configuration

1. **Backend Environment Variables**
   
   Create a `.env` file in the `BACKEND` directory:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/url-shortener
   # or for MongoDB Atlas:
   # MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/url-shortener

   # JWT
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d

   # Server
   PORT=5000
   NODE_ENV=development

   # CORS
   FRONTEND_URL=http://localhost:5173
   ```

2. **Frontend Configuration**
   
   The frontend is configured to work with the backend on `http://localhost:5000`. If you change the backend port, update the API base URL in the frontend configuration.

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd BACKEND
   npm run dev
   ```
   The backend server will start on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd FRONTEND
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
shortner-url-main/
├── BACKEND/
│   ├── app.js                 # Express app entry point
│   ├── package.json
│   └── src/
│       ├── config/            # Database and app configuration
│       ├── controller/        # Request handlers
│       ├── dao/              # Data access objects
│       ├── middleware/        # Custom middleware
│       ├── models/           # Mongoose schemas
│       ├── routes/           # API routes
│       ├── services/         # Business logic
│       └── utils/            # Utility functions
└── FRONTEND/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── api/              # API service functions
        ├── components/       # Reusable UI components
        ├── pages/           # Page components
        ├── routing/         # Router configuration
        ├── store/           # Redux store and slices
        └── utils/           # Frontend utilities
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### URL Management
- `POST /api/url/shorten` - Create a shortened URL
- `GET /api/url/user-urls` - Get user's URLs
- `DELETE /api/url/:id` - Delete a URL
- `GET /:shortCode` - Redirect to original URL

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

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

## 🚀 Deployment

### Render Deployment

#### Backend Service (Web Service)
1. **Create Web Service** on Render
2. **Connect Repository**: `https://github.com/akriti-e/shortner-url`
3. **Build Settings**:
   - **Root Directory**: `BACKEND`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node.js

4. **Environment Variables**:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/url-shortener
   JWT_SECRET=your-super-secret-jwt-key-production
   JWT_EXPIRES_IN=7d
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-app.onrender.com
   ```

#### Frontend Service (Static Site)
1. **Create Static Site** on Render
2. **Connect Repository**: `https://github.com/akriti-e/shortner-url`
3. **Build Settings**:
   - **Root Directory**: `FRONTEND`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

### Alternative Deployment Methods

#### Backend Deployment (Other Platforms)
1. Set up environment variables on your server
2. Install dependencies: `npm install`
3. Start the application: `npm start`

#### Frontend Deployment (Other Platforms)
1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your server to serve the React app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🙏 Acknowledgments

- [nanoid](https://github.com/ai/nanoid) for unique ID generation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TanStack](https://tanstack.com/) for excellent React libraries
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Happy URL Shortening! 🎉**
