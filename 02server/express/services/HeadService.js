//引入模块
let HeadModel = require("../model/HeadModel");
class HeadService {
  constructor() {}
  getData(callback) {
    let headModel = new HeadModel();
    //获得数据
    headModel.getAllHead(function(courses) {
      callback(courses);
    });
  }
}

module.exports = HeadService;
