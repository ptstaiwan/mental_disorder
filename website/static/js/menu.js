/*
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'nB5o8liBtlk',
    height: '100%',
    width: '100%',
    autoplay: 0,
		autohide: 1,
		loop: 1,
		rel: 0,
		showinfo: 0,
		controls: 0,
		disablekb: 1,
		enablejsapi: 0,
    iv_load_policy: 3,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  vidRescale();
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
      player.seekTo(0);
      player.playVideo();
  }
}

function stopVideo() {
    player.stopVideo();
}

// This function scales the video to window size and uses additional values to push video beyong window size

function vidRescale(){
	console.log('video reloaded');
	var w = $(window).width(),
		h = $(window).height();
	if (w/h > 16/9) {
		player.setSize(w, w/16*9);
		$('.tv .screen').css({'left': '0px'});
	} else {
		player.setSize(h/9*16, h);
		$('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
	}
}

// Reloads the video on load and resize

$(window).on('resize', function(){
	vidRescale();
});
 */
/*
!function(a){
  "use strict";
  a(".menu-toggle").click(function(e){
    e.preventDefault(),
      a("#sidebar-wrapper").toggleClass("active"),
      a(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times"),a(this).toggleClass("active")}),
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
      if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
        var e=a(this.hash);
        if((e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length)
          return a("html, body").animate({scrollTop:e.offset().top}, 1e3,"easeInOutExpo"),!1
      }
    }),
    a("#sidebar-wrapper .js-scroll-trigger").click(function(){
      a("#sidebar-wrapper").removeClass("active"),
        a(".menu-toggle").removeClass("active"),
        a(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times")}),
    a(document).scroll(function(){
      100<a(this).scrollTop() ? a(".scroll-to-top").fadeIn() : a(".scroll-to-top").fadeOut()})
}(jQuery);

var onMapMouseleaveHandler=function(e){
  var a=$(this);
  a.on("click",onMapClickHandler),
    a.off("mouseleave",onMapMouseleaveHandler),
    a.find("iframe").css("pointer-events","none")
},
  onMapClickHandler=function(e){
  var a=$(this);a.off("click",onMapClickHandler),
      a.find("iframe").css("pointer-events","auto"),
      a.on("mouseleave",onMapMouseleaveHandler)};

$(".map").on("click",onMapClickHandler);

 */

window.addEventListener('load',function () {
  var nav = document.getElementsByTagName( 'i')[0];
  console.log(nav);
  var sidebarStatus = document.getElementById('sidebar-wrapper') ;
  sidebarStatus.style.cssText += 'left:-500px';
  console.log(sidebarStatus.style.left);
  nav.addEventListener("click",function () {
    var nav = document.getElementsByTagName( 'i');
    console.log(nav);
    var sidebarStatus = document.getElementById('sidebar-wrapper') ;
    if(sidebarStatus.style.left === '-500px'){
      console.log('hi');
      nav.outerHTML = '<i class="fas fa-times"></i>';
      sidebarStatus.style.cssText += 'left:-250px';
    }else if(sidebarStatus.style.left === '-250px'){
      nav.innerHTML = '<i class="fas.fa-bars"></i>';
      sidebarStatus.style.cssText += 'left:-500px';
    }else{
      console.log("nope");
    }
  },true);
})



