let SqlBase = require("./SqlBase");
class ReadModel extends SqlBase {
  constructor() {
    super();
  }
  getAllRead(callback) {
    //3,编写sql语句
    let sql = "select * from read";
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}
module.exports = ReadModel;
