var recipes = {}

function updateObjectWithKeyAndValue(object, key, val) {
  return Object.assign(object, {[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, val) {
  object[key] = val
  return object
}

function deleteFromObjectByKey(obj, key) {
  var newObject = Object.assign({}, obj)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
