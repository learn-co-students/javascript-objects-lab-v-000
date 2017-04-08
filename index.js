var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
