const recipes = {};

const updateObjectWithKeyAndValue = (obj) => {
  return Object.assign(
    {},
    obj,
    {
      prop: 1,
      prop2: 2
    }
  )
}

const destructivelyUpdateObjectWithKeyAndValue = (obj) => {
  return Object.assign(
    obj,
    {
      prop: 1,
      prop2: 2
    }
  )
}

const destructivelyDeleteFromObjectByKey = (obj, key) => {
  delete obj.key;
  return obj;
}

const deleteFromObjectByKey = (obj, key) => {
  delete obj.key;
  return obj;
}
