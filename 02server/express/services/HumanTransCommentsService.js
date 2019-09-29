//引入模块
let HumanTransCommentsModel = require("../model/HumanTransCommentsModel");

class HumanTransCommentsService {
  constructor() {}
  getComments(callback) {
    let humanTransCommentsModel = new HumanTransCommentsModel();
  
    //获得数据
    humanTransCommentsModel.getComments(function(courses) {
      //获得每个课程
      
            callback(courses);
        
    });
  }
}

module.exports = HumanTransCommentsService;
