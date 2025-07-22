const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const CoursesModel = require("./models/course");
const Password = require("./mongoPassword");


mongoose
  .connect(
    `mongodb+srv://bhoba17:${Password}@cluster0.6ioz53q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`
  )
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/courses", (req, res) => {
  const CourseModel = new CoursesModel();
  const dataStatus ={
    status: true,
    message: "Data Added Successfully.",
    data: req.body,
  }
  CourseModel.id = req.body.id;
  CourseModel.course_title = req.body.title;
  CourseModel.course_price = req.body.price;
  CourseModel.course_description = req.body.des;
  CourseModel.save();
  res.json(dataStatus);
});

app.get("/get_courses", async (req, res) => {
  const Courses = await CoursesModel.find();
  res.json(Courses);
});

app.get("/show_courses/:id", async (req, res) => {
  const id = req.params.id;
  const Course = await CoursesModel.findById(id);
  res.json(Course);
});

app.listen(8001);
