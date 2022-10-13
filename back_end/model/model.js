
const mongoose =  require('mongoose');
var schema = new mongoose.Schema({

      fname: {
         type : String,
         required : true
      },
      lname: {
         type : String,
         required : true
      },
      email: {
         type : String,
         required : true
      },
      password: {
         type : String,
         required : true
      },
      role: {
         type : Boolean
      }
   });

const Userdb = mongoose.model('userdb',schema)
module.exports = Userdb