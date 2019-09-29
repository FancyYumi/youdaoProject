//引入模块
let CloudPicModel = require("../model/CloudPicModel");
class CourseService {
  constructor() { }
  getData(callback) {
    let cloudPicModel = new CloudPicModel();

    cloudPicModel.getAllCloudPic(function (data) {
      callback(data);

    });
  }
}

module.exports = CourseService;
