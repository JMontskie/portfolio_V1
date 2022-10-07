//array of color
// const arrColor = ['98ff98','E39FF6'];
// let randomColorString = '#';

// function randomColor (){
//     const ranNum = Math.floor((Math.random() * 2));
//     // return(arrColor[ranNum]);
//     // return(randomColorString + arrColor[ranNum]);
//     var element = document.getElementById("myDiv");
//     element.style.backgroundColor = "#" + arrColor[ranNum];
//     color.innerHTML = "#" + randomColor;
// }

// window.onload = function(){randomColor()};

//falling words

const awesome = document.getElementById("awesome");
const awesomeThings = ['you', 'me', 'everyone'];

const wait = (func, timeout) => {
    return new Promise(resolve => setTimeout(() => {
      resolve(func());
    }, timeout));
}

  (async () => {
    let index = 0;
    while (true) {
      await wait(() => {
        awesome.classList.add("show");
        awesome.textContent = awesomeThings[index];
        index = ++index % awesomeThings.length;
    }, 1000);
      await wait(() => {
        awesome.classList.add("hide");
      }, 1500); 

      await wait(()=> {
        awesome.classList.remove("show");
        awesome.classList.remove("hide");
      }, 500);
    }
  })()


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

// Show & hide the images
$("h1").hover(function(){
  $(this).parent().find("img").addClass("ishover");
  }, function() {
  $(this).parent().find("img").removeClass("ishover");
  });
// Parallax effect
$("h1").mousemove(function(e){
  // Get the Y offset from the first product
  var offset = $(this).offset().top-$(":first-child", $(".item")).offset().top;
  // Calculate the new position
  var movex = (e.pageX * -1.73 / 6);
  var movey = ((e.pageY-offset) * -1.73 / 6);
  // Apply the margins
  $(this).parent().find("img").css('margin-left', movex + 'px')/2;
  $(this).parent().find("img").css('margin-top', movey + 'px');
});


  
  //

  // init3D();

  // function init3D() {
  //   var $workItem = $(".work__item");
  
  //   $workItem.each(function() {
  //     $(this).data("xPos", $(this).offset().left);
  //     $(this).data("yPos", $(this).offset().top);
  //     $(this).data("itemWidth", $(this).width());
  //     $(this).data("itemHeight", $(this).height());
  //     $(this).data("imgOuter", $(this).find(".work__item-img-outer"));
  //   });
  
  //   $workItem.mousemove(function(e) {
  //     var xPos = $(this).data("xPos");
  //     var yPos = $(this).data("yPos");
  //     var mouseX = e.pageX;
  //     var mouseY = e.pageY;
  //     var left = mouseX - xPos;
  //     var top = mouseY - yPos;
  //     var origin = "center center -300";
  //     var xPerc =
  //       (left - $(this).data("itemWidth") / 2) / $(this).data("itemWidth") * 200;
  //     var yPerc =
  //       (top - $(this).data("itemHeight") / 2) / $(this).data("itemHeight") * 200;
  
  //     TweenMax.to($(this).data("imgOuter"), 2, {
  //       rotationX: 0.1 * yPerc,
  //       rotationY: -0.1 * xPerc,
  //       transformOrigin: origin,
  //       ease: Expo.easeOut
  //     });
  //   });
  
  //   $workItem.on("mouseleave", function() {
  //     TweenMax.to($(this).data("imgOuter"), 2, {
  //       rotationX: 0,
  //       rotationY: 0,
  //       transformOrigin: origin,
  //       ease: Expo.easeOut
  //     });
  //   });
  // }
  
