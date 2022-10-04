'use strict';

const handleSkin = (socket) => (payload) => {
  socket.emit('brain', payload);
  if (payload.warmth > 75) {
    console.log('I am sweating');
  } else if (payload.warmth < 25) {
    console.log('I am shivering');
  } else {
    console.log('I am fine, no changes');
  }
}

module.exports = handleSkin;
