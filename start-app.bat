@echo off
echo Starting Target Web App...

REM Kill any existing node processes
taskkill /F /IM node.exe 2>nul

REM Start backend server
cd backend
start cmd /k "npm run dev"

REM Start frontend server
cd ../frontend
start cmd /k "npm run dev"

echo Servers are starting... Please wait.
start cmd /k "cd backend && npx json-server --watch db.json --port 8080"
start cmd /k "cd frontend && npm run dev"
echo Application started! Backend on port 8080, Frontend on port 5173 