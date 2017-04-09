$(document).ready(function(){
	$(".a").click(function(){
		var index=$(this).index();
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		$(".experience_box").css("marginTop",-index*300+"px");
		// $(".experience_text").css('display',"none");
		// $(".experience_text:eq(index-1)").css('display',"block");
	});
});
