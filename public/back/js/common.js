/**
 * Created by hp on 2018/5/9.
 */

if( location.href.indexOf("login.html") === -1) {
	$.ajax({
		type:"get",
		url:"/employee/checkRootLogin",
		dataType:"json",
		success:function( info){
			console.log( info );
			if( info.error === 400) {
				location.href = "login.html";
			}
		}
	})
}


NProgress.configure({ showSpinner: false });

$(document).ajaxStart(function() {
	NProgress.start();
});

$(document).ajaxStop(function(){
	setTimeout(function(){
		NProgress.done();
	}, 500);
});



$(function(){

	$('.category').click(function(){
		$('.lt_aside .child').stop().slideToggle();
	});





	$('.icon_menu').click(function(){
		$('.lt_aside').toggleClass("hidemenu");
		$('.lt_topbar').toggleClass("hidemenu");
		$('.lt_main').toggleClass("hidemenu");
	});

	$('.icon_logout').click(function(){
		$('#logoutModal').modal("show");
	});



	$('#logouBtn').click(function(){
		$.ajax ({
			type:"get",
			url:"/employee/checkRootLogin",
			dataType:"json",
			success:function(info){
				console.log(info);
				if(info.success) {
					location.href = "login.html";
				}
			}
		})
	});




})