module.exports = function(mongoose) {

  var Schema = mongoose.Schema;

  var UserSchema = new Schema({

    name : String, 
    surname : Date,
    email: String, 
    DNI: String, 
    PP: Boolean, 
    PSOE: Boolean, 
    Ciudadanos: Boolean, 
    Podemos: Boolean  
  });

  return mongoose.model('User', UserSchema);
}