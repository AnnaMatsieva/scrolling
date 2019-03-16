var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

$(".section-block").each(function() {
  var name = $(this).attr('id');
  new ScrollMagic.Scene({
    triggerElement: this
  })
  .setPin(this)
  .addTo(ctrl);
});

// var wh = window.innerHeight;
// new ScrollMagic.Scene({
//   offset: wh*6
// })
// .setClassToggle("section#four", "is-active")
// .addTo(ctrl);

const tween = new TimelineMax({onUpdate:updatePercentage});
const tween2 = new TimelineMax({onUpdate:updatePercentage2});
const tween3 = new TimelineMax({onUpdate:updatePercentage3});

const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();

const percent = document.querySelector(".percentage span");
const percent2 = document.querySelector(".percentage2 span");
const percent3 = document.querySelector(".percentage3 span");

tween.to(".left-right", 1, {left:"100%", xPercent:-50});

tween2.to(".right-left", 1, {right:"100%"});

tween3.to(".first-block", 1, {top:"0"});
tween3.to(".first-block", 1, {top:"100%"});

const scene =   new ScrollMagic.Scene({
    triggerElement: ".pinDiv",
    triggerHook: "onLeave",
    duration: "200%"
})
.setPin(".pinDiv")
.setTween(tween)
.addTo(controller);

const scene2 =   new ScrollMagic.Scene({
    triggerElement: ".pinDiv2",
    triggerHook: "onLeave",
    duration: "200%"
})
.setPin(".pinDiv2")
.setTween(tween2)
.addTo(controller2);

const scene3 =   new ScrollMagic.Scene({
    triggerElement: ".pinDiv3",
    triggerHook: "onLeave",
    duration: "200%"
})
.setPin(".pinDiv3")
.setTween(tween3)
.addTo(controller3)

function updatePercentage() {
  percent.innerHTML = (tween.progress() *100 ).toFixed();
}

function updatePercentage2() {
  percent2.innerHTML = (tween2.progress() *100 ).toFixed();
}

function updatePercentage3() {
  percent3.innerHTML = (tween3.progress() *100 ).toFixed();
}