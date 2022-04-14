const mongoose = require('mongoose');
require('dotenv').config();
const uri = "mongodb+srv://TrevorLong:TheBigOof992@cluster0.ywscg.mongodb.net/Cards?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;