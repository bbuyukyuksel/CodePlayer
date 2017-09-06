//@author Burak Buyukyuksel
updateOutput();
$(".toggleButton").hover(function(){
	$(this).addClass("highlightedButton");
},function(){
	$(this).removeClass("highlightedButton");
});
$(".toggleButton").click(function(){
	$(this).toggleClass("active");
	$(this).removeClass("highlightedButton");
	var panelId = $(this).attr("id") + "-panel";
	$("#" + panelId).toggleClass("hidden");
	update();
});
$(".panel").height(($(window).height() - $("#header").height()) -16);
$(".panel").width($(window).width()/2 -10);
function update(){
	var activeClass = $(".active").length;
	$(".panel").height(($(window).height() - $("#header").height()) -16);
	$(".panel").width($(window).width()/activeClass -5);
}
window.onresize = function(event) {
	update();
};
$("textarea").on("change keyup paste",function(){
	updateOutput();
});
function updateOutput(){
	text = "<html><head><style type='text/css'>"+$("#css-panel").val()+"</style></head><body>"+$("#html-panel").val()+"</body>";
	$("iframe").contents().find("html").html(text);
	document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());
}