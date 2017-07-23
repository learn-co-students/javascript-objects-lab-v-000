var recipes = {
}

function updateObjectWithKeyAndValue(object, key, value) {
  return  Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var object2 = Object.assign({}, object);
  delete object2[key];
  return object2
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
// function updatePlaylist(playlist, artistName, songTitle) {
//   playlist[artistName] = songTitle;
//   return playlist
// }
//
// function removeFromPlaylist(playlist, artistName) {
//   delete playlist[artistName];
//   return playlist;
// }
