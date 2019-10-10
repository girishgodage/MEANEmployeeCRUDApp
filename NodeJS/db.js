const   mongoose  = require("mongoose");

//local
//mongoose.connect('mongodb://localhost:27017/CrudDB',{ useNewUrlParser: true,
//On MLAB
mongoose.connect('mongodb://girish:G1R1sh@ds331198.mlab.com:31198/cruddb',{ useNewUrlParser: true,
useUnifiedTopology: true}, function (err, db) {
  
  if (!err)
    console.log('MonogoDB connection succeeded..');
  else
    console.log('Error in DB Connection:' + JSON.stringify(err,undefined,2)); 
})

module.exports = mongoose;