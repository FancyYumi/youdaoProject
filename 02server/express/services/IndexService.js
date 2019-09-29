//引入模块

let Indexservice = require("../model/IndexModel");

class IndexService {
  constructor() {}
  getData(callback) {
    let indexService = new Indexservice();
    //获得数据
    indexService.getCourses(function(courses) {
      callback(courses);
    });
  }
}

module.exports = IndexService;
