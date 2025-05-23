# Deployment script for Target Web App

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# 1. Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm run install-deps

# 2. Build the frontend
Write-Host "🏗️ Building frontend..." -ForegroundColor Yellow
cd frontend
npm run build
cd ..

# 3. Verify build
if (-not (Test-Path "frontend/dist")) {
    Write-Host "❌ Frontend build failed!" -ForegroundColor Red
    exit 1
}

# 4. Check for environment variables
Write-Host "🔍 Checking environment setup..." -ForegroundColor Yellow
if (-not $env:NODE_ENV) {
    $env:NODE_ENV = "production"
}
if (-not $env:PORT) {
    $env:PORT = "8080"
}

# 5. Start the application
Write-Host "✨ Starting application..." -ForegroundColor Green
npm start
