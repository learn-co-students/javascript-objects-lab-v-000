var recipes = new Object(); 

var updateObjectWithKeyAndValue = (object, key, value) => {
  var newObject = object; 
  newObject[key]= value; 
  return newObject; 
}

var destructivelyUpdateObjectWithKeyAndValue = (object,key, value) =>{
  object[key]= value; 
  return object; 
}

var deleteFromObjectByKey = (object,key) => {
  var newObject = Object.assign({}, object); 
  delete newObject[key]; 
  return newObject; 
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]; 
  return object; 
}


