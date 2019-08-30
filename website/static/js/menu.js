window.addEventListener('DOMContentLoaded', function () {

  /* change logo icon position */

  var logo = document.getElementsByClassName("logoBar")[0];
  var width = $(window).width();

  if(1024 > width){
    logo.innerHTML = "<a href=\"https://newslab.pts.org.tw/\"><img src=\"img/logo_mobile.svg\" alt=\"logo\"/></a>";
  }else{
    logo.innerHTML = "";
  }

  /* when we click on icon, close or open hamburger bar & change icon */

  var navBar = document.getElementsByClassName('hamburgerBar')[0];
  var sidebarStatus = document.getElementById('sidebar-wrapper');
  sidebarStatus.style.cssText += 'left:-500px';

  navBar.addEventListener("click", function (e) {
    var sidebarStatus = document.getElementById('sidebar-wrapper');
    if (sidebarStatus.style.left === '-500px') {
      sidebarStatus.style.cssText += 'left:-250px';
      navBar.innerHTML = '<i class="fas fa-times"></i>';
    }else if (sidebarStatus.style.left === '-250px') {
      navBar.innerHTML = '<i class="fas fa-bars"></i>';
      sidebarStatus.style.cssText += 'left:-500px';
    }else {
      console.log("nope");
    }
    e.stopPropagation();
  });

  /* when we touch on icon, close or open hamburger bar & change icon */

  navBar.addEventListener("touch", function (e) {
    var sidebarStatus = document.getElementById('sidebar-wrapper');
    if (sidebarStatus.style.left === '-500px') {
      sidebarStatus.style.cssText += 'left:-250px';
      navBar.innerHTML = '<i class="fas fa-times"></i>';
    } else if (sidebarStatus.style.left === '-250px') {
      navBar.innerHTML = '<i class="fas fa-bars"></i>';
      sidebarStatus.style.cssText += 'left:-500px';
    } else {
      console.log("nope");
    }
    e.stopPropagation();
  });

  /* when we click on body, close hamburger bar */

  document.getElementsByClassName('landingPage')[0].addEventListener("click", function () {
    if (sidebarStatus.style.left === '-250px') {
      sidebarStatus.style.cssText += 'left:-500px';
      navBar.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  /* when we touch on body, close hamburger bar */

  document.getElementsByClassName('landingPage')[0].addEventListener("touch", function (e) {
    if (sidebarStatus.style.left === '-250px') {
      sidebarStatus.style.cssText += 'left:-500px';
      navBar.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  /* add click event on character pictures */

  var character = document.getElementsByClassName('character');
  character[1].addEventListener('click', function () {
    window.location.href = '#Test1image';
  });
  character[0].addEventListener('click', function () {
    window.location.href = '#Test2image';
  });
});

/* when the page is already rendered, the loading page will disappear */

window.addEventListener('load', function () {
  document.getElementById('loading').style.cssText += 'opacity:0; height: 0vh;';
  var linkContent = ['工作倦怠就是生病？','精神疾病社區照護困境','新北市為精障者去汙名化','選前焦慮選後憂鬱'];
  var link = ['http://talk.news.pts.org.tw/show/15467','https://pnn.pts.org.tw/type/detail/2209','https://news.pts.org.tw/article/429352','https://www.youtube.com/watch?v=UWF5DHLutT4'];
  for(let i = 1; i < 5; i++){
    document.querySelector('#link_image > div > div > div:nth-child('+ i +') > div.blockContent > div > span > p').outerHTML = '<a href="' + link[i-1] + '"> <p>' + linkContent[i-1] + '</p></a>';
  }
});

window.addEventListener('scroll', function () {
  var offsetTop=document.getElementById('Test2image').offsetTop;
  var bannerBottom = document.getElementById('Test1image').offsetTop;
  var footerTop = document.getElementById('conclusion').offsetTop;
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if(bannerBottom > scrollTop){
      $("#scroll1").css("opacity", "0");
      $("#scroll2").css("opacity", "0");
    }else{if(scrollTop > footerTop){
      $("#scroll1").css("opacity", "0");
      $("#scroll2").css("opacity", "0");
    }else{
      $("#scroll1").css("opacity", "1");
      $("#scroll2").css("opacity", "1");
    }
    }
    if (scrollTop > offsetTop) {
      $("#scroll1").css("z-index", "-5");
    } else {
      $("#scroll1").css({"z-index":"-1"});
    }
  });
});

window.addEventListener('resize', function () {

  /* change logo icon position */

  var logo = document.getElementsByClassName("logoBar")[0];
  var width = $(window).width();

  if (1024 > width) {
    logo.innerHTML = "<a href=\"https://newslab.pts.org.tw/\"><img src=\"img/logo_mobile.svg\" alt=\"logo\"/></a>";
  }else{
    logo.innerHTML = "";
  }
});



