TARGET Web App
TARGET is a web application built using React.js, Axios, Chakra UI, and JSON Server. It provides functionality for user authentication, dynamic routing, and interaction with a mock backend.

Features
Authentication: Users can login and logout using their credentials.
Dynamic Routing: Utilizes useParams and useNavigate for navigating between different pages and products.
UI Components: Designed with Chakra UI components for a responsive and visually appealing interface.
Backend Simulation: JSON Server is used to simulate a backend for managing products and user data.
Technologies Used
React: Frontend framework for building user interfaces.
Axios: HTTP client for making API requests to JSON Server.
Chakra UI: Component library for building accessible and customizable UI components.
JSON Server: Simulated REST API server for managing data.
Folder Structure
php
Copy code
TARGET_WEB_APP/
├── backend/             # Mock backend setup using JSON Server
│   └── db.json          # Mock data for JSON Server
├── frontend/            # Frontend directory
│   ├── public/          # Static assets and index.html
│   ├── src/             # Source code directory
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components (e.g., Home, Products, Login)
│   │   ├── context/     # Context providers and consumers (e.g., AuthContext)
│   │   └── assets/      # Assets used in the application (e.g., images, icons)
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
└── README.md            # Project documentation
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/TARGET_WEB_APP.git
cd TARGET_WEB_APP
Install dependencies:

Copy code
npm install
Start JSON Server (mock backend):

arduino
Copy code
npm run server
Start the React application:

sql
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Usage
Login: Use the provided login page to authenticate as a user.
Navigate: Explore different product pages using dynamic routing and navigation.
Logout: Log out from the app using the logout functionality.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/awesome-feature).
Commit your changes (git commit -am 'Add some awesome feature').
Push to the branch (git push origin feature/awesome-feature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.