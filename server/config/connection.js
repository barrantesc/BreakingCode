const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI || 'mongodb://localhost/breakingcode', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!')
})


module.exports = mongoose.connection;