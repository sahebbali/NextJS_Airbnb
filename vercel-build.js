const { execSync } = require('child_process');

execSync('prisma generate');

const { nowBuild } = require('@vercel/node');
module.exports = nowBuild;