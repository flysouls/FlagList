const yml = require('node-yaml-config');
const path = require('path');

const url = path.join(__dirname, 'application.yml');
console.log(process.env.NODE_ENV);
// console.log(NODE_ENV);
global.NODE_ENV=process.env.NODE_ENV = !process.env.NODE_ENV ? "dev" : process.env.NODE_ENV;

const CONFIG = yml.load(url, NODE_ENV);
console.log(CONFIG);
module.exports = CONFIG;