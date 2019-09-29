//引入模块
let SqlBase = require("./SqlBase");
class CloudNoteModel extends SqlBase {
  constructor() {
    super();
  }
  getAllCloudNoteImg(callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let imageUrl = {
      pullDown: ip + port + "/imgs/youdaoyun/pullDown.png",
      banner1Left: ip + port + "/imgs/youdaoyun/banner1Left.png",
      weChat: ip+port+"/imgs/youdaoyun/weChat.png",
      up: ip+port+"/imgs/humanTrans/up.png",
      down: ip+port+"/imgs/humanTrans/down.png",

      fast_icon: ip+port+"/imgs/humanTrans/fast_icon.png",
      ic_document_gold: ip+port+"/imgs/humanTrans/ic_document_gold.png",
      ic_local_gold: ip+port+"/imgs/humanTrans/ic_local_gold.png",
      ic_modify_gold: ip+port+"/imgs/humanTrans/ic_modify_gold.png",

      ic_paper_gray: ip+port+"/imgs/humanTrans/ic_paper_gray.png",
      ic_company_gray: ip+port+"/imgs/humanTrans/ic_company_gray.png",
      ic_law_gray: ip+port+"/imgs/humanTrans/ic_law_gray.png",
      ic_abroad_gray: ip+port+"/imgs/humanTrans/ic_abroad_gray.png",
      ic_certificate_gray: ip+port+"/imgs/humanTrans/ic_certificate_gray.png",
      ic_resume_gray: ip+port+"/imgs/humanTrans/ic_resume_gray.png",

      pic_CustomerBg: ip+port+"/imgs/humanTrans/pic_CustomerBg.png",
      pic_CustomerLogo: ip+port+"/imgs/humanTrans/pic_CustomerLogo.png",

      experts: ip+port+"/imgs/humanTrans/experts.png"
    }
    callback(imageUrl);
  }
}

module.exports = CloudNoteModel;
