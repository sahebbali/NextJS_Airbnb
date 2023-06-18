// const { execSync } = require('child_process');

// execSync('prisma generate');

// const { nowBuild } = require('@vercel/node');
// module.exports = nowBuild;
const { execSync } = require('child_process');

try {
  execSync('prisma generate');
} catch (error) {
  console.error('Error generating Prisma client:', error);
  process.exit(1); // Exit the build process with a non-zero status code to indicate failure
}

const { nowBuild } = require('@vercel/node');
module.exports = nowBuild;