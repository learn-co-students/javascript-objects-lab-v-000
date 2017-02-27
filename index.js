var recipes = {prop:'1',prop2:'2'};
var  obj = {prop:1,prop2:2};
function updateObjectWithKeyAndValue(object,key,value){
var clone = Object.assign({},obj);
return clone;
//return  Object.assign({},object);
 //return object.assign({key: 'value' },{key:'value'})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object,key){
  var clone = Object.assign({},object);
  delete clone.key;
  return clone;
}

function destructivelyDeleteFromObjectByKey(object,key){
delete object.key;
return object;

}
