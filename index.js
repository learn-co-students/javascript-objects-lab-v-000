var recipes = {
  prop:1
}
function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value;
  return object
}
var recipes = {
  prop:1
}
function deleteFromObjectByKey (object, key) {
  var newObject = Object.assign ({}, object);
  delete newObject[key] // when using dot notation it will look for a specific key called key
  return newObject
}
function destructivelyDeleteFromObjectByKey (object,key){
delete object[key]
return object
}
