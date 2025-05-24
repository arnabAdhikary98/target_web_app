// Build script for Target Web App
const { execSync } = require('child_process');

// Helper function to execute commands
function runCommand(command) {
    try {
        execSync(command, {
            stdio: 'inherit',
            shell: true
        });
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        process.exit(1);
    }
}

console.log('🚀 Starting build process...');

try {
    // Install root dependencies
    console.log('📦 Installing root dependencies...');
    runCommand('npm install');

    // Build frontend
    console.log('🏗️ Building frontend...');
    runCommand('cd frontend && npm install && npm run build');

    // Install backend dependencies
    console.log('📦 Installing backend dependencies...');
    runCommand('cd backend && npm install');

    console.log('✅ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
}
