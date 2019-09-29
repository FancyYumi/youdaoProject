//引入模块
let CourseModel = require("../model/CourseModel");
//  let Course = require("../model/Course");

class IndexService {
  constructor() {}
  getData(callback) {
    let courseModel = new CourseModel();
   // let course = new Course();
    //获得数据
    courseModel.getAllCourse(function(courses) {
   
      //course.getAllCoursee(function(coursesee){
         //let ob={taobao:courses,left:coursesee}
        callback(courses)
               
      // })
            
        
    })
}}

module.exports = IndexService;
