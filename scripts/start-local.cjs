const { spawn } = require('child_process');
const path = require('path');

// Start local Hardhat node
const node = spawn('npx', ['hardhat', 'node'], {
  stdio: 'inherit',
  shell: true
});

// Wait for node to start
setTimeout(() => {
  // Deploy contract
  const deploy = spawn('npx', ['hardhat', 'run', '--network', 'localhost', 'scripts/deploy.cjs'], {
    stdio: 'inherit',
    shell: true
  });

  deploy.on('close', (code) => {
    if (code !== 0) {
      console.error('Deployment failed');
      process.exit(1);
    }
  });
}, 5000);

// Handle cleanup
process.on('SIGINT', () => {
  node.kill();
  process.exit();
}); 