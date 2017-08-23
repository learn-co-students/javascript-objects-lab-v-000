

var recipes = {"Lasagna": ["cheese", "sauce", "noodles"]};

function updateObjectWithKeyAndValue(list, k, v){
  return Object.assign({}, list, {[k]: v} );
}

function destructivelyUpdateObjectWithKeyAndValue(list, k, v){
  return Object.assign(list, {[k]: v});
}

function deleteFromObjectByKey(list, k){
  let newRec = Object.assign({}, list);
  delete newRec[k];
  return newRec;
}

function destructivelyDeleteFromObjectByKey(list, k){
  delete list[k];
  return list;
}