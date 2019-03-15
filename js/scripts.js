// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$(".section-block").each(function() {

  var name = $(this).attr('id');
  
  new ScrollMagic.Scene({
    triggerElement: this
  })
  .setPin(this)
  .addTo(ctrl);
 
});

// Get window height
var wh = window.innerHeight;
 
new ScrollMagic.Scene({
  offset: wh*3
})
.setClassToggle("section#four", "is-active")
.addTo(ctrl);


//block with left-right animation
TweenLite.defaultEase = Linear.easeNone;
TweenMax.set(".left-right", {yPercent:-50, xPercent:-100});
const tween = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
const percent = document.querySelector(".percentage span");
tween.to(".left-right", 1, {left:"50%", xPercent:-50});
tween.to(".left-right", 1, {left:"100%", xPercent:-100}, "+=2");

const scene =   new ScrollMagic.Scene({
            triggerElement: ".pinDiv",
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin(".pinDiv")
        .setTween(tween)
        .addTo(controller);

function updatePercentage() {
  percent.innerHTML = (tween.progress() *100 ).toFixed();
}

const tween2 = new TimelineMax({onUpdate:updatePercentage2});
const controller2 = new ScrollMagic.Controller();
const percent2 = document.querySelector(".percentage2 span");
tween2.to(".right-left", 1, {right:"100%"});

const scene2 =   new ScrollMagic.Scene({
            triggerElement: ".pinDiv2",
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin(".pinDiv2")
        .setTween(tween2)
        .addTo(controller2);

function updatePercentage2() {
  percent2.innerHTML = (tween2.progress() *100 ).toFixed();
}


//two blocks
const tween3 = new TimelineMax({onUpdate:updatePercentage3});
// const tween4 = new TimelineMax({onUpdate:updatePercentage3});
const controller3 = new ScrollMagic.Controller();
// const controller4 = new ScrollMagic.Controller();
const percent3 = document.querySelector(".percentage3 span");

tween3.to(".first-block", 1, {top:"-100%"});
tween3.to(".first-block", 1, {top:"100%"});

// tween4.to(".second-block", 1, {right:"50%"});
// tween4.to(".second-block", 1, {right:"100%"});

const scene3 =   new ScrollMagic.Scene({
            triggerElement: ".pinDiv3",
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin(".pinDiv3")
        .setTween(tween3)
        // .setTween(tween4)
        .addTo(controller3)
        // .addTo(controller4);

function updatePercentage3() {
  percent3.innerHTML = (tween3.progress() *100 ).toFixed();
  // percent3.innerHTML = (tween4.progress() *100 ).toFixed();
}
