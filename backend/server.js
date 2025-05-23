const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
const cors = require('cors');

// Create the server
const server = jsonServer.create();

// Enable CORS with specific options
server.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-app-name.onrender.com', /\.onrender\.com$/]
    : 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../frontend/dist')
});

// Set up the JSON Server router with absolute path
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Serve static files from the React frontend app
server.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve backend assets
server.use('/backend-assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.PORT || 8080;

// Function to find an available port
function findAvailablePort(startPort) {
  return new Promise((resolve, reject) => {
    const server = require('net').createServer();
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
      }
    });
    server.listen(startPort, () => {
      server.close(() => {
        resolve(startPort);
      });
    });
  });
}

// Custom middleware to handle errors
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Enable CORS for all origins in development
server.use(cors());

// Parse JSON payloads
server.use(express.json());

// Use JSON Server middlewares
server.use(middlewares);

// Handle API routes first
server.use('/api', (req, res, next) => {
  // Remove /api prefix from the URL
  req.url = req.url.replace(/^\/api/, '');
  router(req, res, next);
});

// Serve static files from the React app
server.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve the React app for any other routes
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Start server with fallback ports
findAvailablePort(port)
  .then(availablePort => {
    server.listen(availablePort, () => {
      console.log('Server is running on port:', availablePort);
    });
  })
  .catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
