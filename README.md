# ComfyBricks

Welcome to ComfyBricks, your go-to platform for exploring and managing real estate listings. ComfyBricks is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. Whether you are a property owner looking to list your space or a potential buyer in search of your dream home, ComfyBricks has you covered.

## Features

- **Property Listings:** Explore a wide range of real estate listings with detailed information.
- **User Authentication:** Securely create an account, log in, and manage your property listings or favorite properties.
- **Advanced Search:** Find your ideal property with advanced search filters based on location, price, and amenities.
- **Interactive Maps:** Visualize property locations on interactive maps for a better understanding of the surroundings.
- **Responsive Design:** Enjoy a seamless and user-friendly experience across various devices.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - Axios for handling API requests
  - Bootstrap for styling

- **Backend:**
  - Node.js with Express.js
  - MongoDB for efficient and scalable data storage
  - Mongoose for MongoDB object modeling

- **Authentication:**
  - JSON Web Tokens (JWT) for secure user authentication

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/comfybricks.git
Navigate to the project directory:

bash
Copy code
cd comfybricks
Install dependencies for both the frontend and backend:

bash
Copy code
cd client && npm install
cd ../server && npm install
Create a .env file in the server directory with the following content:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the development server:

bash
Copy code
cd ../ && npm run dev
Open your browser and go to http://localhost:3000.

License
This project is licensed under the MIT License - see the LICENSE file for details.
