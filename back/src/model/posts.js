const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String, 
        trim: true,
        required: [true,'please add a title'],
        maxlength:[50,' title cannot be more that 50 characters']
    },
    subject:{
        type: String, 
        require:[true,'please add a description'],
        trim: true,
    },
    numberOfAnswers:{
        type: Number,
        default: 0,

    },
    instructions:{
        type: String,
        trim: true,
        required: [true,'instructions must be added']
    },
    postDate:{type: String, required: true},
    dueDate:{type: String, require: true},
    file:{type: String},
    cost:{type: String, required: true},
    tutor:{type: String},
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
},{
    timestamps: true,
})

const Posts = mongoose.model('Posts', postSchema)
module.exports = Posts