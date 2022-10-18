
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
      admin: {
         type : Boolean,
         required : true
      }
   });

const Userdb = mongoose.model('userdb',schema)
module.exports = Userdb