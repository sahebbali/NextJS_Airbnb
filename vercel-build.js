const execSync = require('child_process').execSync;

execSync('prisma generate');

const { nowBuild } = require('@vercel/node');
module.exports = nowBuild;