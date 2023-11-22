//スクロールでヘッダー効果
var myHeader = $('.hdCmn');
var winScrollTop = 0;	
var topBtn = $('#page-top');	

//TOP対応
// $(window).on('load',function(){
// 	var topHeader = $('.hdTop');
// 	if (document.URL.match('index.html')){
// 		$(window).scroll(function () {
// 			var windowWidth = $(window).width();
// 			var navPos = $('.hero_menu').offset().top; // メニューの位置
// 			var navHeight = $('.hero_menu').outerHeight(); // メニューの高さ
// 			if( windowWidth > 900 ){
// 				if ( $(this).scrollTop() > navPos) {
// 					topHeader.addClass('hdTopShow');
// 				} else {
// 					topHeader.removeClass('hdTopShow');
// 				}
// 			}
// 		});
// 	}
// });


$(window).scroll(function () {
    if ( $(this).scrollTop() > 10) {
	    myHeader.addClass('fixedHd');
		$('.hem').css('background-color', '#804f4e')
		$('.list').css('color', '#804f4e')
    } else {
		myHeader.removeClass('fixedHd');
		$('.hem').css('background-color', '#804f4e')
		$('.list').css('color', '#3d3d3d')
    }
    if ($(this).scrollTop() > 600) {
		topBtn.fadeIn();
	} else {
		topBtn.fadeOut();
	}
});


// 画像遅延
$(function () {
	$( 'img.lazy' ).lazyload({
		threshold : 400,
		effect : 'fadeIn',
		effect_speed: 1000,
		event : "scroll",
		failure_limit: 1,
		placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII="
	});  
});

// モーダルメニュー
$(function () {	
	var $body = $('body');
    $('#hdBtn').on('click', function () {
		$body.toggleClass('openModal');
        $(this).toggleClass('active');
        $('#hdMenu').toggleClass('active');
        $('#logo').toggleClass('active');
    });
});


// 折りたたみ
$('.acrdBox h2').on('click', function() {
	$(this).parent().find('.acrd_cont').slideToggle(300);
    $(this).parent().parent().toggleClass('active');
});

// 折りたたみ 「NEWS」
$('.hero_news .acrd_sw_wrp').on('click', function() {
	$(this).parent().find('dl:not(:eq(0))').slideToggle(300);
    $(this).parent().toggleClass('active');
});



