const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Posts = require('./posts');


const userSchema = new mongoose.Schema({
    usename:{
        type:String, 
        required: true, 
        trim: true},
    email:{
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        lowerCase: true,
         validate(value){
             if(!validator.isEmail(value)){
                 throw new Error('email is invalid')
             }
         }
        },
    password:{
        type:String,
        trim: true, 
        required: true, 
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot be password')
            }
        }
    },
    phone:{
        type: Number,
        maxlength: [20, 'phone cannot be longer than 10 characters'],
    },
    location:{
        type:String,
        trim: true,
        required:[true,'please add country'],
    },
    sampleTask:{
        type: String,
        required: true,

    },
    tokens:[{
        token:{
            type: String,
            required: true,
        }
    }],
    avatar:{
        type: Buffer
    }
},
{
    timestamps: true
})

userSchema.virtual('posts',{
    ref:'Posts',
    localField: '_id',
    foreignField: 'owner'
})

//hiding username, email, token and password
userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()

    return token

}

userSchema.statics.findbyCredentials = async(email, password) =>{
    const user = await user.findOne({email:email})
    if(!user){
        throw new Error('unable to connect')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('unable to login')
    }

    return user
}

//hashes the password before saving
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})

//deletes user questions when a user is deleted
userSchema.pre('remove', async function(next){
    const user = this
    await Posts.deleteMany({owner: user._id})
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User;