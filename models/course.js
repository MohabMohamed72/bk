const mongoose = require("mongoose")
const Schema = mongoose.Schema

const courseSchema = new Schema({
    id:Number,
    course_title:String,
    course_price:Number,
    course_description:String
})

const CoursesModel = mongoose.model("CoursesModel" , courseSchema )

module.exports = CoursesModel