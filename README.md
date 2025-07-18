
# ShopEZ: One-Stop Shop for Online Purchases

ShopEZ is a full-stack e-commerce web application that allows users to browse, search, and purchase products online. It features user authentication, product management, shopping cart, admin dashboard, and more.

## Features
- User registration and login
- Product browsing and search
- Shopping cart and checkout
- Admin dashboard for managing products, users, and orders
- Flash sales and banners
- Responsive design

## Project Structure
```
client/   # React frontend
server/   # Node.js/Express backend
```

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm (comes with Node.js)

### 1. Clone the repository
```
git clone https://github.com/Hari-1718/ShopEZ-One-Stop-Shop-for-Online-Purchases.git
cd ShopEZ-One-Stop-Shop-for-Online-Purchases
```

### 2. Install dependencies
#### For the client (React app):
```
cd client
npm install
```
#### For the server (API backend):
```
cd ../server
npm install
```

### 3. Set up environment variables
- Create a `.env` file in the `server/` directory as needed (e.g., for database connection strings, JWT secrets, etc).

### 4. Run the development servers
#### Start the backend server:
```
cd server
npm start
```
#### Start the frontend React app:
```
cd ../client
npm start
```

- The React app will typically run on [http://localhost:3000](http://localhost:3000)
- The backend server will run on [http://localhost:5000](http://localhost:5000) (or as configured)

## Deployment
- You can deploy the frontend and backend separately (e.g., Vercel/Netlify for frontend, Heroku/Render for backend).
- Make sure to update API URLs in the frontend for production.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
