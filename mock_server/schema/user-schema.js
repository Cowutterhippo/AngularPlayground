const mongoose = require('mongoose');
// const schema = require('mongoose-geojson-schema');

const userSchema = new mongoose.Schema({
  type: 'object',
  required: ['username', 'password', 'email'],
  properties: {
    username: { type: String },
    password: {type: String},
    email: { type: String},
    userType: { type: String },
    created: { type: Date, default: Date.now },
    lastActive: { type: Date, default: Date.now },// not sure if to put a default value.
    // location: { type: Schema.Types.Point, coordinates: [Number], index:'2dsphere' }
  }
});


const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };
