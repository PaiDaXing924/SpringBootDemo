function menuItem(obj) {
	var isVisible = $(obj).children("ul").is(':hidden');
	if (isVisible) {
		$(obj).children("i").addClass("menu-item-active");
		$(obj).children("ul").slideDown();
		$(obj).siblings().children("i").removeClass("menu-item-active");
		$(obj).siblings().children("ul").slideUp();
	}
	return false;
}

function navLink(obj) {
	$(".nav-link").parent("li").css("background-color", "transparent");
	$(obj).parent("li").css("background-color", "#ccc");
	$.ajaxSettings.async = true;
	var url = $(obj).attr("attr-href");
	$.ajax({
		type : 'post',
		url : url,
		success : function(data, status, xhr) {
			$("#main").html(data);
		}
	});
	return false;
}

// function navLink(obj) {
// $(".nav-link").parent("li").css("background-color", "transparent");
// $(obj).parent("li").css("background-color", "#ccc");
// $.ajaxSettings.async = true;
// var url = $(obj).attr("attr-href");
// if (url.search("/login") != -1) {
// window.location.href = url;
// } else {
// $.ajax({
// type : 'post',
// url : url,
// success : function(data, status, xhr) {
// var flag = xhr.getResponseHeader('flag');
// if (flag == "login") {
// window.location.href = xhr.getResponseHeader('url');
// } else {
// $("#main").html(data);
// }
// }
// });
//
// }
// return false;
// }

$(document).ready(function() {
	$("ol.breadcrumb > li > a").unbind("click").bind("click", function() {
		var url = $(this).attr("attr-href");
		if (url != null && url.trim() != "") {
			console.log(url)
			$.ajax({
				type : 'get',
				url : url,
				success : function(data) {
					$("#main").html(data);
				},
				error : function(data) {
					$("#main").html(data);
				}
			});
		}
	})

	$("#sideBtn").unbind("click").bind("click", function() {
		$(".sidebar").toggle();
		var isHidden = $(".sidebar").is(":hidden");
		if (isHidden) {
			$("#rightContent").removeClass("col-md-10");
			$("#rightContent").addClass("col-md-12");
		} else {
			$("#rightContent").removeClass("col-md-12");
			$("#rightContent").addClass("col-md-10");
		}
	})
});
