let ReadModel = require("../model/ReadModel");
class ReadService {
  constructor() { };
  getData(callback) {
    let readModel = new ReadModel();
    readModel.getAllRead(function (data) {
      callback(data);
    });
  }
}
module.exports = ReadService;
