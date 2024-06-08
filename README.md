# TARGET Web App

TARGET is a web application built using React.js, Axios, Chakra UI, and JSON Server. It provides functionality for user authentication, dynamic routing, and interaction with a mock backend.

## Features

- **Authentication**: Users can login and logout using their credentials.
- **Dynamic Routing**: Utilizes `useParams` and `useNavigate` for navigating between different pages and products.
- **UI Components**: Designed with Chakra UI components for a responsive and visually appealing interface.
- **Backend Simulation**: JSON Server is used to simulate a backend for managing products and user data.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Axios**: HTTP client for making API requests to JSON Server.
- **Chakra UI**: Component library for building accessible and customizable UI components.
- **JSON Server**: Simulated REST API server for managing data.

## Folder Structure

```
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
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/arnabAdhikary98/target_web_app.git
   cd target_web_app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start JSON Server (mock backend):
   ```
   npm run server
   ```

4. Start the React application:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- **Login**: Use the provided login page to authenticate as a user.
- **Navigate**: Explore different product pages using dynamic routing and navigation.
- **Logout**: Log out from the app using the logout functionality.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -am 'Add some awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a pull request.