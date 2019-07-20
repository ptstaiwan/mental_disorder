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



