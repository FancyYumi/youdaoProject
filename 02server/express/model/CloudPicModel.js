//引入模块
let SqlBase = require("./SqlBase");
class CloudPicModel extends SqlBase {
  constructor() {
    super();
  }
  getAllCloudPic(callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let imageUrl = {
      logo: ip + port + "/imgs/recite/logo.png",
      recitelogo: ip + port + "/imgs/recite/recitelogo.png",
      card: ip + port + "/imgs/recite/card.png",
      bg2: ip + port + "/imgs/recite/bg-2.png",
      perfect: ip + port + "/imgs/recite/perfect.png",
      QR: ip + port + "/imgs/recite/QR.png",
      download: ip + port + "/imgs/recite/download.png",
      download1: ip + port + "/imgs/recite/download1.png",
      download2: ip + port + "/imgs/recite/download2.png",
      phoneShow: ip + port + "/imgs/recite/phone-show.png",



    }
    callback(imageUrl);
  }
}

module.exports = CloudPicModel;
