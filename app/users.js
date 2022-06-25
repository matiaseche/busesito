let users = [];

function joinUser(socketId, userName, roomName) {
  const user = {
    socketId,
    userName,
    roomName
  };
  users.push(user);
  return user;
}

function removeUser(id) {
  const getID = users => users.socketId == id;
  const idx = users.findIndex(getID);
  if (idx ==! 1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = { joinUser, removeUser };