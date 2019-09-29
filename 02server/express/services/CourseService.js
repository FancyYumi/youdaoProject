//引入模块
let CourseModel = require("../model/CourseModel");
let CourseModell = require("../model/CourseModell");
let CourseModelll = require("../model/CourseModelll");
class CourseService {
  constructor() {}
  getCourses(callback) {
    let courseModel = new CourseModel();
  
    //获得数据
    courseModel.getAllCourse(function(courses) {
      let courseModell=new CourseModell()
      courseModell.getAllCourse(function(cp){
        let courseModelll=new CourseModelll();
        courseModelll.getAllCourse(function(io){
          let ob={
            cidian:courses,
            tupian:cp,
            grade:io
          }
          callback(ob)
        })
      })
      
            
        
    });
  }
}

module.exports = CourseService;
