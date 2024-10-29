const mongoose = require('mongoose');
mongoose.connect("add-mongoose-cluster-link");

const UserSchema = new mongoose.Schema({
    username : String,
    firstname : String,
    lastname : String,
    
    password : String
})

const AccountSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance :{
       type: Number,
       required: true
    }
})

const User = new mongoose.model('User', UserSchema);
const Account = new mongoose.model('Account', AccountSchema);
module.exports={
    User,
    Account
}
