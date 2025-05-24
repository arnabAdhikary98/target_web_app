#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting build process..."

# Install dependencies in root
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies and build
echo "🏗️ Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo "✨ Build completed successfully!"
