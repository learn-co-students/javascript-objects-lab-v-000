var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var preserve = Object.assign({}, object);
  delete preserve[key];
  return preserve;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}