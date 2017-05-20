var recipes = {
  eggs:"scramble"
}

function updateObjectWithKeyAndValue(recipes, key, value) {
    return Object.assign({}, recipes, { [key]: value })

}

updateObjectWithKeyAndValue(recipes, 'sassauge', 'chirizo')


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
   recipes[key] = value
    return recipes
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'pepper', 'black')


function deleteFromObjectByKey(recipes, key) {
  delete recipes.key

}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, recipes)
  delete clone.scramble
  return clone
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  recipes = Object()
  return recipes

}
