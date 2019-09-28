const { logModuleTitle } = require('./tools/logging');


logModuleTitle('package-json-info');
require('./common-js/package-json-info');

logModuleTitle('process-info');
require('./common-js/process-info');

logModuleTitle('node-internal');
require('./node-internal');

logModuleTitle('babel-experiments');
require('./babel-experiments');

console.log("\nDone.\n\n")