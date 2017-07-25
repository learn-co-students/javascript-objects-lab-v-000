var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { 
	// i know i have 2  
	  return Object.assign({}, object, { [key]: value });
}
 
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object,key) {
  delete object[key]

  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}









  // describe('updateObjectWithKeyAndValue(object, key, value)', function() {
  //   it('returns an object with the orignal key value pairs and the new key value pair', function() {
  //     var obj = { prop: 1 }

  //     expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
  //       prop: 1,
  //       prop2: 2
  //     })
  //   })

// function updatePlaylist(playlist,artistName,songTitle) {

// // 	  return Object.assign(playlist, {}, { [artistName]: songTitle })
// ) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
//      Error: Expected { key: 'val', prop: 1 } to match { prop: 1, prop2: 2 }
//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toMatch (node_modules/expect/lib/Expectation.js:138:28)
//       at Context.<anonymous> (test/index-test.js:12:60)


// // }
 