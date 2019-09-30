//引入模块
let RelistModel = require("../model/RelistModel");
class RelistService {
  constructor() {}
  getData(callback) {
    let relistModel = new RelistModel();
    //获得数据
    relistModel.getAllRelist(function(courses) {
      callback(courses);
    });
  }
}

module.exports = RelistService;
