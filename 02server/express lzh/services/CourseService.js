//引入模块
let Course = require("../model/Course");
let Tu = require("../model/Tu");
let Grade = require("../model/Grade");


class CourseService {
  constructor() {}
  getData(callback) {
    let course = new Course();
   
    //获得数据
    course.getAllCoursee(function(courses) {
      let tu = new Tu();
      tu.getAllCourse(function(tupia){
        let grade=new Grade();
        grade.getAllGrade(function(gra){
          let op={
            cidian:courses,
            tupian:tupia,
            grade:gra
          }
          callback(op)

        })
       

        
      })
     
        
        
            
        
    })
}}

module.exports = CourseService;
