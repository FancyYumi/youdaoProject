//1,引入相关库
let express = require("express");
let mysql = require("mysql");
//2，获得express对象
let app = express();
//3,引入body-parser模块
let bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});
//5,设置静态文件
app.use(express.static("public"));
//6,设置跨域访问
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//设置固定值
let ip = "localhost:";
let port = 8888;


let headController = require("./controllers/HeadController");
app.get("/head", headController.head);
let course = require("./controllers/Course");
app.get("/course", course.index);

let cloudPicController = require("./controllers/CloudPicController");
app.get("/pic", cloudPicController.pic);

let cloudNoteController = require("./controllers/CloudNoteController");
app.get("/cloudNote", cloudNoteController.cloudNote);

let humanTransController = require("./controllers/HumanTransController");
app.get("/humanTrans", humanTransController.humanTrans);

let humanTransCommentsController = require("./controllers/humanTransCommentsController");
app.get("/humanTransComments", humanTransCommentsController.comments);

let relistController = require("./controllers/RelistController");
app.get("/relist", relistController.relist);
//4,进行监听
app.listen(port, function() {
  console.log(`${port}启动`);
});
