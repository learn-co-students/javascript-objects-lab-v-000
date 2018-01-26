let recipes = {
  pizza: 1,
  thai: 2,
  burger: 3,
  wings: 4,
}

const updateObjectWithKeyAndValue = (obj, key, val) => {
  return Object.assign({}, obj, {
    [key]: val
  })
}

const destructivelyUpdateObjectWithKeyAndValue = (obj, key, val) => {
  obj[key] = val;
  return obj;
}

const deleteFromObjectByKey = (obj, key) => {
  let copy =  Object.assign({}, obj);
  return delete copy[key];
}

const destructivelyDeleteFromObjectByKey = (obj, key) => delete obj[key]
