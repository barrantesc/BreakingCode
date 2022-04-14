const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/breaking-code',
  {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;