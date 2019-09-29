//引入模块
let HumanTransModel = require("../model/HumanTransModel");

class HumanTransService {
  constructor() {}
  getData(callback) {
    let humanTransModel = new HumanTransModel();
  
    //获得数据
    humanTransModel.getAllImg(function(imgUrl) {
      //获得每个课程
      
            callback(imgUrl);
        
    });
  }
}

module.exports = HumanTransService;
