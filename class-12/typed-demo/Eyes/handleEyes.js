'use strict';

const handleEyes = (socket) => (payload) => {
  socket.emit('brain', payload);
  if (payload.brightness > 70) {
    console.log('Dilate pupils');
  } else {
    console.log('un-dilate pupils');
  }
}

module.exports = handleEyes;
