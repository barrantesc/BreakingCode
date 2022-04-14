const mongoose = require('mongoose');
require('dotenv').config();
const uri = "mongodb+srv://TrevorLong:TheBigOof992@cluster0.ywscg.mongodb.net/Cards?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));
  
module.exports = mongoose.connection;