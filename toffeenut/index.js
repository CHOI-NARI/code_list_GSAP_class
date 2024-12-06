gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".title", {
  duration: 2,
  scrub: true,
  repeat: 1,
  text: "Have a Good day",
  yoyo: true,
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".containerTwo", //실행 시켜주는 스위치(방아쇠) 또는 실행되는 지점
    // markers: true, // 개발할때 보여주는 선 : start, end, scroller-start 표기선
    scrub: true, // 스크롤에 따라서 애니메이션이 동기화 : 페이지를 왔다갔다 해도 동기화됨
    start: "top center", // start와 scroller-start가 마우스 스크롤로 만나는 지점을 지정
    end: "bottom bottom",
    // start: "top top", // second의 top(맨위)가 화면의 top(맨위)에 도달했을 때 시작
    // end: "center center", // second의 center(중앙)가 화면의 center(중앙)에 도달했을 때 끝
  },
});

timeline.to(".second_texts", {
  // 대상이 될 class name을 입력하기
  duration: 2,
  opacity: 1,
  stagger: 1, // 1번부터 4번까지 순서대로 각각 진행하기
});

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".containerThree",
    markers: true,
    scrub: true,
    start: "top top",
    end: "bottom center",
  },
});

timeline2.to(".textA", {
  duration: 2,
  opacity: 1,
  stagger: 1,
  y: 0,
});

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".D",
    // markers: true,
    pin: true,
    scrub: 1,
  },
});

timeline3.to(".containerFour", {
  x: -1360,
  duration: 3,
});

ScrollTrigger.create({
  trigger: ".E",
  start: "top top",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".F",
  start: "top top",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".G",
  start: "top top",
  end: "top top",
  pin: true,
  pinSpacing: false,
});

gsap.to("h2", {
  y: -300,
  duration: 3,
  opacity: 1,
  repeat: -1,
  yoyo: true,
});

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".containerFive",
    start: "top top",
    end: "bottom center",
    markers: true,
    pin: true,
    scrub: 3,
  },
});

timeline4.to(".boxSix", {
  x: -1360,
  duration: 9,
});
