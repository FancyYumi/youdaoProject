var myIn=setInterval(fn, 5000);
var j = 0;
//定时器轮播图片索引切换
function fn() {
	j = j % 7;
	lunbo(j);
	j++;
}
//轮播图效果
function lunbo(j){
	for (var i = 0; i < document.querySelectorAll(".ht_imgBox li").length; i++) {
		document.querySelectorAll(".ht_imgBox li")[i].style.display = "none";
		document.querySelectorAll(".circle li")[i].className = "noActive"
	}
	document.querySelectorAll(".circle li")[j].className = "active";
	document.querySelectorAll(".ht_imgBox li")[j].style.display = "block";
	
}

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