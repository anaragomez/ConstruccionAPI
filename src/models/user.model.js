import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    username: {
        type : String,
        requires: true,
        trim: true,
    },
    email: {
        type :String ,
        requires: true,
        trim: true, 
        unique:true,
    },
    password: {
        type: String,
        requires: true,
    }
})
export default  mongoose.model('User',userSchema);