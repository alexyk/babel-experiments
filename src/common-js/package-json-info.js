const packageJson = require('../../package.json');
const { version, dependencies, devDependencies, scripts } = packageJson;

console.log(`Info from 'package.json':`,{version, dependencies, devDependencies});