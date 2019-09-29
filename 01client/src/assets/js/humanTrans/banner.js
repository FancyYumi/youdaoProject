var myIn=setInterval(fn, 3000);
var j = 0;
//定时器轮播图片索引切换
function fn() {
	j = j % 7;
	lunbo(j);
	j++;
};
//轮播图效果
function lunbo(j){
	for (var i = 0; i < 7; i++) {
		document.querySelectorAll(".ht_imgBox li")[i].className = "lunbo_item_none";
		document.querySelectorAll(".circle li")[i].className = "noActive";
	};
	document.querySelectorAll(".circle li")[j].className = "active";
	document.querySelectorAll(".ht_imgBox li")[j].className = ".lunbo_item animated fadeIn lunbo_item_block";
	
};

//点击轮播图停止
for (var i = 0; i < document.querySelectorAll(".circle li").length; i++) {

	document.querySelectorAll(".circle li")[i].onclick = function(i) {
		return function() {
			clearInterval(myIn);
			lunbo(i);
			j=++i;
			// setTimeout(function(){
			myIn=setInterval(fn, 5000);
			// },2000)
		}
	}(i);
}