# Health check script for Target Web App

$baseUrl = "https://your-app-name.onrender.com"

Write-Host "🔍 Running deployment verification..." -ForegroundColor Cyan

# 1. Check main page
Write-Host "Testing main page..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $baseUrl
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Main page loads successfully" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Main page failed to load" -ForegroundColor Red
}

# 2. Check API endpoints
$endpoints = @(
    "/api/mens_clothing",
    "/api/electronics",
    "/api/deals",
    "/api/new_featured"
)

foreach ($endpoint in $endpoints) {
    Write-Host "Testing $endpoint..." -ForegroundColor Yellow
    try {
        $response = Invoke-WebRequest -Uri "$baseUrl$endpoint"
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ $endpoint is working" -ForegroundColor Green
        }
    } catch {
        Write-Host "❌ $endpoint failed" -ForegroundColor Red
    }
}

# 3. Check static assets
Write-Host "Testing static asset loading..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/assets/Target.png"
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Static assets are loading" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Static assets failed to load" -ForegroundColor Red
}
