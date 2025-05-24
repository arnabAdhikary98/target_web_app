# This is a Node.js script to handle the build process
const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting build process...');

try {
    // Navigate to frontend directory and install dependencies
    console.log('📦 Installing frontend dependencies...');
    execSync('cd frontend && npm install', { stdio: 'inherit' });

    // Build frontend
    console.log('🏗️ Building frontend...');
    execSync('cd frontend && npm run build', { stdio: 'inherit' });

    // Navigate to backend directory and install dependencies
    console.log('📦 Installing backend dependencies...');
    execSync('cd backend && npm install', { stdio: 'inherit' });

    console.log('✅ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
}
