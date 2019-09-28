function logModuleTitle(module) {
  console.info('');
  console.info(`Running '${module}'`);
  console.info(`===============================================`);
}

function logPropNames(object, excludes=null) {
  if (!object) {
    return [];
  }

  let props = [];
  props = props.concat(Object.getOwnPropertyNames(object));
  props = props.concat(Object.getOwnPropertyNames(object.__proto__ || {}));
  props = props.concat(Object.getOwnPropertyNames(object.prototype || {}));

  return props;
}

exports.logModuleTitle = logModuleTitle;
exports.logPropNames = logPropNames;
