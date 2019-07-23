window.addEventListener('load',function () {
  var currentWidth = document.body.clientWidth;
  var img1 = document.querySelector('#\\30 2 > div > div > div > div.blockImage > img');
  var img2 = document.querySelector('#\\30 3 > div > div > div > div.blockImage > img');
  if('736' > currentWidth){
    img1.src="img/1.jpg";
    img2.src='img/2.jpg';
  }
  var navBar = document.getElementsByClassName('menu-toggle')[0];
  var sidebarStatus = document.getElementById('sidebar-wrapper');
  sidebarStatus.style.cssText += 'left:-500px';
  navBar.addEventListener("click", function () {
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
  });
  document.getElementById('00').addEventListener("click", function () {
    if(sidebarStatus.style.left === '-250px'){
      sidebarStatus.style.cssText += 'left:-500px';
      document.getElementsByClassName('menu-toggle rounded')[0].innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

window.addEventListener('resize',function () {
  var currentWidth = document.body.clientWidth;
  var img1 = document.querySelector('#\\30 2 > div > div > div > div.blockImage > img');
  var img2 = document.querySelector('#\\30 3 > div > div > div > div.blockImage > img');
  if (736 > currentWidth) {
    img1.src = "img/1.jpg";
    img2.src = 'img/2.jpg';
  }else if (736 < currentWidth) {
    if(img1.src === window.location + "img/1.jpg" || window.location + "/#00/img/1.jpg" || window.location + "/#01/img/1.jpg" || window.location + "/#02/img/1.jpg" || window.location + "/#03/img/1.jpg"){
      img1.src = "img/respondent1.JPG";
    }else{
      console.log(img1.src);
    }
    if(img2.src === window.location + "img/2.jpg" || window.location + "/#00/img/1.jpg"  || window.location + "/#01/img/1.jpg" || window.location + "/#02/img/2.jpg" || window.location + "/#03/img/2.jpg"){
      img2.src = "img/respondent2.JPG";
    }else{
      console.log(img2.src);
    }
  }
});

