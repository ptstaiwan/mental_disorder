window.addEventListener('DOMContentLoaded', function () {

  /* add css attribute on loading page */

  document.getElementById('loading').style.cssText += 'opacity:100; height: 100vh;';

  /* when the page loading, get the current width to display the right img */
/*
  var currentWidth = document.body.clientWidth;
  var limit = 1025;
  var img1 = document.querySelector('#Test1image > div > div > div > div.blockImage > img');
  var img2 = document.querySelector('#Test2image > div > div > div > div.blockImage > img');
  if (limit > currentWidth) {
    img1.src = "img/1.jpg";
    img2.src = 'img/2.jpg';
  }

 */

  var navBar = document.getElementsByClassName('menu-toggle')[0];
  var sidebarStatus = document.getElementById('sidebar-wrapper');
  sidebarStatus.style.cssText += 'left:-500px';

  /* when we click on icon, close or open hamburger bar & change icon */

  navBar.addEventListener("click", function (e) {
    var sidebarStatus = document.getElementById('sidebar-wrapper');
    if (sidebarStatus.style.left === '-500px') {
      sidebarStatus.style.cssText += 'left:-250px';
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-times"></i>';
    } else if (sidebarStatus.style.left === '-250px') {
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-bars"></i>';
      sidebarStatus.style.cssText += 'left:-500px';
    } else {
      console.log("nope");
    }
    e.stopPropagation();
  });

  /* when we touch on icon, close or open hamburger bar & change icon */

  navBar.addEventListener("touch", function (e) {
    var sidebarStatus = document.getElementById('sidebar-wrapper');
    if (sidebarStatus.style.left === '-500px') {
      sidebarStatus.style.cssText += 'left:-250px';
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-times"></i>';
    } else if (sidebarStatus.style.left === '-250px') {
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-bars"></i>';
      sidebarStatus.style.cssText += 'left:-500px';
    } else {
      console.log("nope");
    }
    e.stopPropagation();
  });

  /* when we click on body, close hamburger bar */

  document.getElementsByTagName('body')[0].addEventListener("click", function () {
    if (sidebarStatus.style.left === '-250px') {
      sidebarStatus.style.cssText += 'left:-500px';
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  /* when we touch on body, close hamburger bar */

  document.getElementsByTagName('body')[0].addEventListener("touch", function () {
    if (sidebarStatus.style.left === '-250px') {
      sidebarStatus.style.cssText += 'left:-500px';
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-bars"></i>';
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
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > offsetTop) {
      $("#scroll1").css("z-index", "-5");
    } else {
      $("#scroll1").css("z-index", "-1");
    }
  });
});


/* when the page resizing, get the current width to display the right img */
/*
window.addEventListener('resize', function () {
  var currentWidth = document.body.clientWidth;
  var img1 = document.querySelector('#Test1image > div > div > div > div.blockImage > img');
  var img2 = document.querySelector('#Test2image > div > div > div > div.blockImage > img');
  var limit = 1025;
  if (limit > currentWidth) {
    img1.src = "img/1.jpg";
    img2.src = 'img/2.jpg';
  } else if (limit < currentWidth) {
    if (img1.src === window.location + "img/1.jpg" || window.location + "/#BannerTitle/img/1.jpg" || window.location + "/#Test1image/img/1.jpg" || window.location + "/#Test2image/img/1.jpg") {
      img1.src = "img/people1.jpg";
      img2.src = "img/people2.jpg";
    }
  }
});

 */


