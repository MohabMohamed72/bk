const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const btn = document.querySelector(".btn")

const CoursesModel = require('./models/course')

mongoose.connect("mongodb+srv://bhoba17:IH3g695wqlbITkKt@cluster0.6ioz53q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log(err)
})


app.post('/courses' , (req , res)=>{
    const CourseModel = new CoursesModel()
    CourseModel.id=req.body.id;
    CourseModel.course_title=req.body.title;
    CourseModel.course_price=req.body.price;
    CourseModel.course_description=req.body.des;
    CourseModel.save()
})

btn.addEventListener('click' , ()=>{
    app.get('/get_courses' ,async (req , res)=>{
         const Courses = await CoursesModel.find()
         res.json(Courses)
    })
})

app.get('/show_courses/:id' ,async (req , res)=>{
    const id = req.params.id
     const Course = await CoursesModel.findById(id)
     res.json(Course)
})

app.listen(8001)