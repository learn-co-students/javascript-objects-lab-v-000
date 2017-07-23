var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var object = Object.assign({} , object);
  return destructivelyUpdateObjectWithKeyAndValue(object, key, value)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var object = Object.assign({}, object);
  return destructivelyDeleteFromObjectByKey(object, key);
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
