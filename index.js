var recipes= {key: 'value'};

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })

  }
updateObjectWithKeyAndValue(recipes, 'key1', 'value1');

recipes;


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'key2', 'value2');
recipes;

function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({},object);
  delete newobj[key];
  return newobj;
}

deleteFromObjectByKey(recipes,'key');
recipes;

function destructivelyDeleteFromObjectByKey(object, key) {

delete object[key];
return object;
}

destructivelyDeleteFromObjectByKey(recipes,'key1');
recipes;
