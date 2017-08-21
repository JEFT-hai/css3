requirejs.config({
	paths:{
		jquery:'jquery-1.11.2.min'
	}
});

requirejs(['jquery','backTop'],function ($,backTop) {

	// new backTop.BackTop($('.backTop'),{
	// 	mode:'go'
	// })
	
	
	$('.backTop').backtop({
		mode:'move'
	})

	// var scroll = new scrollto.ScrollTo({

	// });

	// $('.backTop').on('click', $.proxy(scroll.move,scroll));
	// $('.backTop1').on('click',$.proxy(scroll.go,scroll));
	// $(window).on('scroll',function(){
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());
    	
	// function move(){
	// 	$('html,body').animate({
	// 		scrollTop:0
	// 	}, 800)
	// }

	// function go(){
	// 	$('html','body').scrollTop(0);
	// }

	// function checkPosition(pos){
	// 	if($(window).scrollTop() > pos){
	// 		$('.backTop').fadeIn();
	// 		$('.backTop1').fadeIn();
	// 	}else{
	// 		$('.backTop').fadeOut();
	// 		$('.backTop1').fadeOut();
	// 	}
	// }
})