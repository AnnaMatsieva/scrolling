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

var wh = window.innerHeight;
new ScrollMagic.Scene({
  offset: wh*8
})
.setClassToggle("#two", "is-active")
.addTo(ctrl);

const tween = new TimelineMax({onUpdate:updatePercentage});
const tween2 = new TimelineMax({onUpdate:updatePercentage2});
const tween3 = new TimelineMax({onUpdate:updatePercentage3});

const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();

const percent = document.querySelector(".percentage span");
const percent2 = document.querySelector(".percentage2 span");
const percent3 = document.querySelector(".percentage3 span");

tween.to(".left-right", 1, {left:"100%"});

tween2.to(".right-left", 1, {right:"100%"});

tween3.to(".top-block", 1, {top:"100%"});
tween3.to(".bottom-block", 1, {bottom:"100%"});

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

jQuery(document).ready(function($) {
  
var $stage = $('.stage'),
    $textA = $('#customerTextA'),
    $textB = $('#customerTextB'),
    $textC = $('#customerTextC'),
    $textD = $('#customerTextD'),
  $computerA = $('#computerA'),
  $approved = $('#approved'),
  $computerB = $('#computerB'),
  $calLeft = $('#cal-left'),
  $calRight = $('#cal-right'),
  $shoppingCart = $('#shopping-cart'),
  $triangle = $('#triangle'),
  $circle = $('#circle'),
  $rectangle = $('#rectangle'),
  $customerBG = $('#customerBG');
  // $dotsNav1 = $('#dots-nav-1'),
  // $dotsNav2 = $('#dots-nav-2'),
  // $dotsNav3 = $('#dots-nav-3'),
  // $dotsNav4 = $('#dots-nav-4');

  // init controller
  var controller = new ScrollMagic.Controller();
  
  controller.scrollTo(500);

// build timeline with animation tweens
var scrollAnimation = new TimelineMax();
    scrollAnimation.set($stage, {autoAlpha: 1})
    .to($textA, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay:0.75}, "trans1")
    // .to($dotsNav1, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay:0.75}, "trans1")
    .to($customerBG, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay:0.75}, "trans1")
    .to($computerA, 0, {autoAlpha: 1, ease:Power4.easeInOut, delay:0.75}, "trans1")
    .from($approved, 1, {autoAlpha: 0, ease:Power4.easeInOut})
    .to($approved, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay: 2})
    .to($computerA, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
    .to($approved, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
    .to($textA, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
    // .to($dotsNav1, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
    // .to($dotsNav2, 1, {autoAlpha: 1, ease:Power1.easeInOut}, "trans2")
    .to($textB, 1, {autoAlpha: 1, ease:Power1.easeInOut}, "trans2")
    .to($computerB, 0, {autoAlpha: 1, ease:Power1.easeInOut}, "trans2")
    .to($textB, 1, {autoAlpha: 0, ease:Power1.easeInOut, delay: 3}, "trans3")
    // .to($dotsNav2, 1, {autoAlpha: 0, ease:Power1.easeInOut, delay: 3}, "trans3")
    // .to($dotsNav3, 1, {autoAlpha: 1, ease:Power1.easeInOut, delay: 3}, "trans3")
    .to($textC, 1, {autoAlpha: 1, ease:Power1.easeInOut, delay: 3}, "trans3")
    .to($calLeft, 3, {transform:"scale(1)", ease:Power3.easeInOut})
    .to($calRight, 3, {transform:"scale(1)", ease:Power3.easeInOut})
    .to($calLeft, 1, {transform:"scale(0)", ease:Power3.easeInOut, delay:1})
    .to($calRight, 1, {transform:"scale(0)", ease:Power3.easeInOut}, '-=1')
    .to($computerB, 3, {left:"400%", ease:Power4.easeInOut})
    .to($textC, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans4")
    // .to($dotsNav3, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans4")
    // .to($dotsNav4, 1, {autoAlpha: 1, ease:Power1.easeInOut}, "trans4")
    .to($textD, 1, {autoAlpha: 1, ease:Power1.easeInOut}, "trans4")
    .from($shoppingCart, 3, {opacity:"0", right:"400%", ease:Power4.easeInOut}, '-=3')
    .from($triangle, 3, {opacity:"0", top:"-100%", ease:Power4.easeInOut})
    .from($rectangle, 3, {opacity:"0", top:"-100%", ease:Power4.easeInOut}, '-=2.85')
    .from($circle, 3, {opacity:"0", top:"-100%", ease:Power4.easeInOut}, '-=2.85');

// build scene and link scrolling to animation
var scene = new ScrollMagic.Scene({triggerElement: "#how-it-works", duration: 4000})
    .setPin(".stage")
    .addTo(controller)
    .setTween(scrollAnimation);
  scene.offset(200);
});
