var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {  //  returns an object with the orignal key value pairs and the new key value pair
  return Object.assign({}, object, { [key]: value })        //  it does not modify the original object, but rather returns a clone with the new data
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { //  updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) { //  deletes `key` from a clone of object and returns the new object (it is non-destructive)
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) { //  returns object without the delete key/value pair, modifies the original object
  delete object[key]
  return object
}
