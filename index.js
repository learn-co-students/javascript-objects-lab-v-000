var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var placeObject = Object.assign({}, object )
  delete placeObject[key];
  return placeObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}