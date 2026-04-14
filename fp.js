const btn1 = document.getElementById("btn1")

btn1.addEventListener("click" , function(){
  btn1.style.backgroundColor="#fff" ;
  btn1.style.color="#fbcd03";
  btn1.style.border="3px solid #fbcd03"  
})
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3"); 
const l4 = document.getElementById("l4"); 
const l5 = document.getElementById("l5");
l1.addEventListener("click" , function(){
    l1.style.borderBottom="2px solid #111";
    l2.style.borderBottom="none";
    l3.style.borderBottom="none";
    l4.style.borderBottom="none";
    l5.style.borderBottom="none";
});

l2.addEventListener("click" , function(){
    l2.style.borderBottom="2px solid #111";
    l1.style.borderBottom="none";
    l3.style.borderBottom="none";
    l4.style.borderBottom="none";
    l5.style.borderBottom="none";
});

l3.addEventListener("click" , function(){
    l3.style.borderBottom="2px solid #111";
    l2.style.borderBottom="none";
    l1.style.borderBottom="none";
    l4.style.borderBottom="none";
    l5.style.borderBottom="none";
});

l4.addEventListener("click" , function(){
    l4.style.borderBottom="2px solid #111";
    l1.style.borderBottom="none";
    l3.style.borderBottom="none";
    l2.style.borderBottom="none";
    l5.style.borderBottom="none";
});
l5.addEventListener("click" , function(){
    l5.style.borderBottom="2px solid #111";
    l2.style.borderBottom="none";
    l3.style.borderBottom="none";
    l4.style.borderBottom="none";
    l1.style.borderBottom="none";
});


let btn3 = document.getElementById("ls1btn-1");
let arrow1 = btn3.querySelector("i");

btn3.addEventListener("click", () => {
    btn3.classList.toggle("active");

    if(btn3.classList.contains("active")){
        btn3.firstChild.textContent = "Meow ";
    } else {
        btn3.firstChild.textContent = "more ";
    }
});

let btn2 = document.getElementById("ls2btn-1");
let arrow2 = btn2.querySelector("i");

btn2.addEventListener("click", () => {
    btn2.classList.toggle("active");

    if(btn2.classList.contains("active")){
        btn2.firstChild.textContent = "Meow ";
    } else {
        btn2.firstChild.textContent = "more ";
    }
});

let hireBtns = document.querySelectorAll("#ls1btn-2, #ls2btn-2");

hireBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        // 🔥 color animation
        btn.classList.add("hire-active");

        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/First%20projeect/I%20have%20faith%20in%20what%20I%20see/moew.html";
        }, 500);
    });
});

let lastbtn = document.getElementById("last-more");
let content1 = document.querySelector(".extra-content1");

lastbtn.addEventListener("click", () => {
    lastbtn.classList.toggle("active");      // arrow rotate
    content1.classList.toggle("active");  // expand content
});
gsap.registerPlugin(ScrollTrigger);

/* NAV ANIMATION */
gsap.from("#heading", {
  y: -50,
  duration: 1,
  opacity: 0
});

gsap.from("#logo", {
  y: -50,
  duration: 1,
  opacity: 0
});

gsap.from("nav ul li", {
  y: -30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2
});

gsap.from("nav p", {
  y: -30,
  duration: 1,
  opacity: 0
});

/* 🔥 RESPONSIVE ANIMATION */
gsap.matchMedia().add("(max-width: 1024px)", () => {

  /* MOBILE VERSION */

  gsap.from("#img", {
    y: 150,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#img",
      start: "top 85%"
    }
  });

  gsap.from(".section1 h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".section1",
      start: "top 85%"
    }
  });

});

/* DESKTOP VERSION */
gsap.matchMedia().add("(min-width: 1025px)", () => {

  gsap.from("#img", {
    x: 300,
    duration: 2,
    opacity: 0
  });

  gsap.from(".section1 h1", {
    x: -300,
    duration: 2,
    opacity: 0,
    stagger: 0.2
  });

});

/* COMMON ANIMATIONS */

gsap.from(".section1 h3", {
  y: 50,
  opacity: 0,
  duration: 1.5
});

gsap.from(".section1 p", {
  y: 50,
  duration: 1.5,
  opacity: 0
});

gsap.from("#btn1, #btn2", {
  y: 50,
  duration: 1.5,
  opacity: 0,
  stagger: 0.2
});

gsap.from(".cb", {
  opacity: 0,
  duration: 1.5,
  stagger: 0.5
});

/* SCROLL ANIMATIONS */

gsap.from(".cards", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 85%"
  }
});

gsap.from(".section3 h1, .section3 p", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".section3",
    start: "top 80%"
  }
});

/* 🚫 REMOVE pg3 ANIMATION (since hidden in mobile) */
if (window.innerWidth > 1024) {

  gsap.from(".ls1", {
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".ls1",
      start: "top 80%"
    }
  });

  gsap.from(".ls2", {
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".ls2",
      start: "top 90%"
    }
  });

}

/* FINAL REFRESH */
ScrollTrigger.refresh();