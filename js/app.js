var app = angular.module('myApp', []);
app.controller('galleryCtrl', function($scope) {
	$scope.images = [
		{url: 'work-mh.jpg', alt:'mapleharbour website', desc:'website development', pos:18},
		{url: 'work-boxingday.jpg', alt:'carousel design', desc:'website content: carousel', pos:17},
		{url: 'work-blackfriday.jpg', alt:'carousel design', desc:'website content: carousel', pos:16},
		{url: 'work-email.jpg', alt:'email header design', desc:'visual content: email', pos:15},
		{url: 'work-social.jpg', alt:'visual content for social media', desc:'visual content: social media', pos:14},
		{url: 'work-tshirt.jpg', alt:'tshirt design', desc:'vector: t-shirt design', pos:13},
		{url: 'work-musician.jpg', alt:'website for a musician', desc:'website development', pos:12},
		{url: 'work-coco.jpg', alt:'logo design', desc:'vector: logo design', pos:11},
		{url: 'work-icons.jpg', alt:'vector icon design', desc:'vector: icon design', pos:10},
		{url: 'work-vector.jpg', alt:'vector character design', desc:'vector: character design', pos:9},
		{url: 'work-larocque.jpg', alt:'website design', desc:'website development 2014', pos:8},
		{url: 'work-cafe.jpg', alt:'website design', desc:'website development 2013', pos:7},
		{url: 'work-logo-design.jpg', alt:'logo design', desc:'vector: logo design', pos:6},
		{url: 'work-logo-design2.jpg', alt:'logo design', desc:'business card design', pos:5},
		{url: 'work-infographic.jpg', alt:'infographic design', desc:'vector: infographic', pos:4},
		{url: 'work-printing.jpg', alt:'printing design', desc:'indesign: printing content', pos:3},
		{url: 'work-bookcover.jpg', alt:'bookcover design', desc:'bitmap: book cover design', pos:2},
		{url: 'work-poster.jpg', alt:'poster design', desc:'bitmap: movie poster recreation', pos:1},
		{url: 'work-tapestry.jpg', alt:'vector tapestry', desc:'vector: tapestry imitaion', pos:0}
	];
});

app.controller('validateCtrl', function($scope) {
});

app.controller('timeCtrl', function($scope) {
	$scope.getDatetime = new Date();
});

var bigsrc = new Array();
bigsrc[18] = {url:'pan-mh-website.jpg', id:18},
bigsrc[17] = {url:'pan-carousel-bd.jpg', id:17},
bigsrc[16] = {url:'pan-carousel-bf.jpg', id:16},
bigsrc[15] = {url:'pan-email.jpg', id:15},
bigsrc[14] = {url:'pan-social.jpg', id:14},
bigsrc[13] = {url:'pan-tshirt-design.jpg', id:13},
bigsrc[12] = {url:'pan-musician-website.jpg', id:12},
bigsrc[11] = {url:'pan-coco-logo.jpg', id:11},
bigsrc[10] = {url:'pan-icon-set.jpg', id:10},
bigsrc[9] = {url:'pan-character-design.jpg', id:9},
bigsrc[8] = {url:'pan-larocque-website.jpg', id:8},
bigsrc[7] = {url:'pan-cafe-website.jpg', id:7},
bigsrc[6] = {url:'pan-logo-design2.jpg', id:6},
bigsrc[5] = {url:'pan-logo-design.jpg', id:5},
bigsrc[4] = {url:'pan-infograph.jpg', id:4},
bigsrc[3] = {url:'pan-printing.jpg', id:3},
bigsrc[2] = {url:'pan-bookcover.jpg', id:2},
bigsrc[1] = {url:'pan-poster.jpg', id:1},
bigsrc[0] = {url:'pan-tapestry-vector.jpg', id:0}

$(document).ready(function() {

	$(window).on("load resize scroll", function(e) { // bind windows load, resize and scroll together
		var $window = $(window);
		var windowsize = $window.width();
		var scrl_amount = $(window).scrollTop();

		if(windowsize < 768 ) { // contract header when screen is mobile
			$('#site_logo').addClass('mini-logo');
			$('#alt_logo').addClass('mini-alt-logo');
		}
		else if(windowsize > 767 ) { // expand header when screen is desktop
			$('#site_logo').removeClass('mini-logo');
			$('#alt_logo').removeClass('mini-alt-logo');
		}

		if((scrl_amount > 199) || (windowsize < 768)) {	// contract header when scroll 
			$('#site_logo').addClass('mini-logo');
			$('#alt_logo').addClass('mini-alt-logo');
		}
		else if((scrl_amount < 200) && (windowsize > 767)) {
			$('#site_logo').removeClass('mini-logo');
			$('#alt_logo').removeClass('mini-alt-logo');
		}

	});


	$('#main-menu').click(function() { // open nav menu
		$('.nav').addClass('show-menu');
	});

	$('.close-nav').click(function() {
		$('.nav').removeClass('show-menu');
	});

	$('.wrap-thumb').click(function() {
		var pos = $(this).data('pos');
		$('#img_holder').html('<img src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">');
		$('#img_holder, #modal_bg, #close_btn, #prev, #next').fadeIn();
		if(pos == (bigsrc.length-1)) {
			$('#next').data('pos',(pos-1));
			$('#prev').data('pos',0);
		}
		else if(pos == 0) {
			$('#next').data('pos',(bigsrc.length-1));
			$('#prev').data('pos',(pos+1));
		}
		else {
			$('#next').data('pos',(pos-1));
			$('#prev').data('pos',(pos+1));
		}
	});

	$('.arrow').click(function() {
		var pos = $(this).data("pos");
		$('#img_holder').html('<img src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">');
		if(pos == (bigsrc.length-1)) {
			$('#next').data('pos',(pos-1));
			$('#prev').data('pos',0);
		} else if(pos == 0) {
			$('#next').data('pos',(bigsrc.length-1));
			$('#prev').data('pos',(pos+1));
		} else {
			$('#next').data('pos',(pos-1));
			$('#prev').data('pos',(pos+1));
		}
	});

	$('#modal_bg, #close_btn').click(function() {
		$('#img_holder').fadeOut();
		$('#close_btn').fadeOut();
		$('#modal_bg').fadeOut();
		$('#prev').fadeOut();
		$('#next').fadeOut();
	});

	$('.link').click(function(e) {
		e.preventDefault(); // disable the hyperlink
		console.log('yse');
		var href = $(this).attr('href');
		href = href.replace('#','');
		var togo = $('a[class="' + href + '"]');
		$('html,body').animate({
			scrollTop:togo.offset().top
		},300)
	});

	/* ==== form validation ==== */
	$('#submit').click(function() {
		var error = false;
		var user = $('#user').val();
		var email = $('#email').val();
		var message = $('#message').val();

		if(user.length < 2) {
			$('#user').val('','');
			$('#user').attr('placeholder','please enter a valid name');
			error = true;
		};

		function validateEmail(em) {
			var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]/; // allows any email without extension (e.g. .ca)
			if(filter.test(email)) {
				return true;
			}
			else {
				return false;
			}
		}

		if(validateEmail(email) == false) {
			$('#email').val('','');
			$('#email').attr('placeholder','please enter a valid email');
			error = true;
		};

		if(error == false) {
			$('#user').css('border','none');
			$('#user').attr('placeholder','');
			$('#email').css('border','none');
			$('#email').attr('placeholder','');
		};

		/* === send to php === */
		if(error == false) {
			$.ajax({
				url:'igetEmail.php',
				type:'POST',
				data:{
					Name:user,
					email:email,
					question:message
				},
				success:function(response){
					$('#form').html(response);
				}
			});
		}
	});
});