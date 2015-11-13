//Bootstrap Carousel Menu Functions
$(document).ready(function () {
	//Add image on menu item click
	$("#navigation li").click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');
	});
	
	$('#myCarousel').on('slid.bs.carousel', function () {
        $holder = $( "ol li.active" );
        $holder.removeClass('active');
        var idx = $('div.active').index('div.item');
        $('#navigation li[data-slide-to="'+ idx+'"]').addClass('active');
    });
    $('#navigation li').on("click",function(){
        $('#navigation li.active').removeClass("active");
        $(this).addClass("active");
    });
});
