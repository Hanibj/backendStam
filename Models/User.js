var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    
    nom : { type: String, required: true },
    prenom : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    entreprise : { type: String, required: true},
    password : { type: String, required: true },
    typeus: { type: String, required: true },
});
userSchema.statics.Signin= async function(email,password){
        

    if(!email || !password){
        throw Error('les champs sont vides');
    }
    const user =await this.findOne({email})
    
    if (!user){
      throw error ('incorrect email');
    }
    
    //const match = await bcrypt.compare(password, user.password)
    
    if (!(password=== user.password)){
        throw Error('incorrect mdp')
    }
    ts=user.typeus
    
    return (user);
}
module.exports = mongoose.model('User', userSchema);