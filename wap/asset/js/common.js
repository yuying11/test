//==========================================================
//本地测试用，正式版可删除开始
//==========================================================
document.onkeydown = chang_page

function chang_page() {
	var evt = getEvent();
	var arr = /(\d+)-?(\d*).html/g.exec(window.location.pathname);
	var numarr = arr[0].split(".");
	var countdesc = parseInt(numarr[0]) - 1 > 0 ? parseInt(numarr[0]) - 1 : 1;
	var countasc = parseInt(numarr[0]) + 1;
	//	var countasc = parseInt(numarr[0]) + 1 < 16 ? parseInt(numarr[0]) + 1 : 15;
	if (evt.keyCode == 37 || evt.keyCode == 33) location.href = window.location.pathname.replace(arr[0], countdesc + '.html');
	if (evt.keyCode == 39 || evt.keyCode == 34) location.href = window.location.pathname.replace(arr[0], countasc + '.html');
}

function getEvent() {
	if (document.all) return window.event; //如果是ie
	func = getEvent.caller;
	while (func != null) {
		var arg0 = func.arguments[0];
		if (arg0) {
			if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
				return arg0;
			}
		}
		func = func.caller;
	}
	return null;
};
//==========================================================
//本地测试用，正式版可删除结束
//==========================================================


var ww;
var wh;
$(document).ready(function() {

	//顶部下拉
	$(".list_ul2").hide();
	$(".meun").click(function() {
		$(this).toggleClass("meunCurrent");
		$(".list_ul2").slideToggle();
		$(".searchHide").slideUp(10);
	});
	$(".searchHide").hide();
	$(".search").click(function() {
		$(".searchHide").slideToggle();
		$(".list_ul2").slideUp(10);
	});
	//返回顶部
	$('.backtop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	//分享相关
	$(".butWrap .but1").click(function() {
		$(".shareBox").show();
	})
	$(".sharebg").click(function() {
		$(this).parent().hide();
	})
	//点赞相关
	$(".butWrap .but2").click(function(){
		$(this).find("b").animate({
			"top":-20+"px",
			"opacity":1
		}).animate({
			"top":00+"px",
			"opacity":0
		})
	})
	//判断版本
	$(".cancelJs").click(function(){
		$(".mask").hide();
	})
	$(".sureJs").click(function(){
		$(".mask").hide();
		window.location.href="page1.html";
	});
	
	//点击加载后改变链接地址;
	$(".picScroll_ex1 .tabCon .bd").each(function(){
		$(this).find("li:gt(-5)").css("display","none");
		$(this).find(".btn_more").click(function(){
			var onoff=$(this).data("onoff");
			var url=$(this).data('url');
			var text=$(this).data("text");
			if (!onoff){
				$(this).prev("ul").find("li").fadeIn()
				$(this).data("onoff",1);
				$(this).html(text);
			}else{
				document.location.href=url;
			}
		})
	});
	$(".js-tab a").click(function(i){
		var index=$(".js-tab a").index($(this));
		console.log(index)
		$(".js-tab a").removeClass("on")
		$(this).addClass("on")
		$(".js-tabCon .bd").hide();
		$(".js-tabCon .bd").eq(index).show();
	})

});

//==========================================================
//jquery响影式计算
//==========================================================
$(window).bind("load", function() {
	setContentSize();

	function setContentSize() {};
	$(window).resize(function() {
		setContentSize()
	});
});


//==========================================================
//j模拟alert
//==========================================================
var str, str2, str3;

function alert(txt) {
	str = '<div class="alert">';
	str += '<div class="alertInner">';
	str += '<h2>';
	str2 = '</h2>';
	str2 += '<a href="javascript:;">好</a>';
	str2 += '</div></div>';
	str3 = str + txt + str2;
	$("body").append(str3);
	$(".alert a").on("click", function() {
		$(this).parent().parent().remove();
	})
};

//==========================================================
//TAB选项卡 开始
//==========================================================
function setTab(name, cursel, n) {
	for (i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_" + name + "_" + i);
		menu.className = i == cursel ? "hover" : "";
		con.style.display = i == cursel ? "block" : "none";
	}
};

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return 1;
};
var tabname = getQueryString('t');

//TAB选项卡 调用方法
//<li id="one1" onclick="setTab('one',1,4)" class="hover">卡片一</li>
//<li id="one2" onclick="setTab('one',2,4)">卡片二</li>
//<div id="con_one_1">对应内容一</div>
//<div id="con_one_2" style="display:none;">对应内容二</div>
//http://xxx.com/a.html?t=2; 点击指向某页面内对应的tab选项卡内容;
//TAB选项卡 结束

//==========================================================
//新自定义功能
//==========================================================

//
//

































//===========================
//TAB选项卡 开始
//===========================
function setTab(name, cursel, n) {
	for (i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_" + name + "_" + i);
		menu.className = i == cursel ? "hover" : "";
		con.style.display = i == cursel ? "block" : "none";
	}
};

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return 1;
};
var tabname = getQueryString('t');

//===========================
//TAB选项卡 调用方法
//setTab('one', tabname, 4);
//http://xxx.com/page3.html?t=2; 点击指向某页面内对应的tab选项卡内容;
//TAB选项卡 结束
//===========================