//引入模块
let CloudNoteModel = require("../model/CloudNoteModel");

class CloudNoteService {
  constructor() {}
  getData(callback) {
    let cloudNoteModel = new CloudNoteModel();
  
    //获得数据
    cloudNoteModel.getAllCloudNoteImg(function(imgUrl) {
      //获得每个课程
      
            callback(imgUrl);
        
    });
  }
}

module.exports = CloudNoteService;
