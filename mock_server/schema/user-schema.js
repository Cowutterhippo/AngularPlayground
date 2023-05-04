const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  type: 'object',
  required: ['username', 'password', 'email'],
  properties: {
    username: { type: string },
    password: {type: string},
    email: { type: string},
    userType: { type: string },
    created: { type: Date, default: Date.now },
    lastActive: { type: Date, default: Date.now },// not sure if to put a default value.
    location: { type: 'Point' }
  }
});


const User = mongoose.model('User', userSchema);
