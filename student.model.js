import mongoose, {Schema } from "mongoose";


const StudentsSchema = new Schema({
    firstname: {
        type:String,
        required: true,
        trim: true
    },
    lastname: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type:String,
        unique: true,
        required: true,
        trim: true
    }
}, {timestamps: true})

const StudentModel = mongoose.model("Students", StudentsSchema);

export default StudentModel;