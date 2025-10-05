# BellaBlush E-commerce MERN Stack Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User Authentication (Login/Register)
- Admin Dashboard
- Product Listing & Management
- Shopping Cart
- Wishlist
- Order Management
- Responsive Design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/manishchdry08/BellaBlush-Ecommerce-MERN.git
cd BellaBlush-Ecommerce-MERN
```

2. Install Backend Dependencies:
```bash
cd glowcart-backend
npm install
```

3. Configure Environment Variables:
   - Create a `.env` file in the backend directory
   - Add the following variables:
```
MONGO_URI=mongodb://localhost:27017/bellablush
JWT_SECRET=your_jwt_secret_here
PORT=5001
```

4. Install Frontend Dependencies:
```bash
cd ../glowcart-frontend
npm install
```

## Running the Application

1. Start the Backend Server:
```bash
cd glowcart-backend
npm run dev
```

2. Start the Frontend Development Server:
```bash
cd glowcart-frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173 (or http://localhost:5174)
- Backend API: http://localhost:5001

## Default Login Credentials

### Admin Account:
- Email: admin@bellablush.com
- Password: admin123

### Test User Account:
- Email: user@test.com
- Password: user123

## Technologies Used

### Frontend:
- React
- React Router DOM
- Axios
- Vite

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)