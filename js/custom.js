const tl = gsap.timeline({
    defaults: { duration: 0, ease: "power1.out" }
});
tl.fromTo('.animation .loading', {
    // x:"-100%",
    opacity: 0,
    duration: 1.5,
}, {
    // x:"0%",
    opacity: 1,

})
tl.to(".animation", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: "Expo.easeInOut"
}),
    tl.fromTo("main", {
        x: "100%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.25
    })
gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
let smoother = ScrollSmoother.create({
    smooth: 1
});


const ani4 = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
gsap.to(".sec01_text h2", {
    backgroundPositionX: "0%",
    stagger: 30,
    scrollTrigger: {
        trigger: ".sec01_text h2",
        scrub: 1,
        start: "top center",
        end: "bottom top",
        markers: false,
        end: "+=100"

    }

});
const ani5 = gsap.timeline();
ani5.to("#pin_01 .t1", { xPercent: 1000 }, "text")
    .to("#pin_01 .t2", { xPercent: -1000 }, "text")

ScrollTrigger.create({
    animation: ani5,
    trigger: "#pin_01",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1
});


gsap.registerPlugin(ScrollTrigger);

const SLIDE_CONTAINER = ".slide-container";
const SLIDE = ".slide";
const SLIDES = gsap.utils.toArray(SLIDE);
const FIGURE = ".figure";

SLIDES.forEach((slide, i) => {
    const img = slide.querySelector(".figure");
    const text = slide.querySelector(".text");
    const heading = slide.querySelector(".heading");

    const tl = gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            pin: true,
            start: "top top",
            end: "+=" + SLIDES.length * 100 + "% bottom"
        }
    });

    fadeImage(heading, img);
});

function fadeImage(trigger, img) {
    const fi = gsap.to(img, {
        scrollTrigger: {
            trigger: trigger,
            markers: false,
            scrub: true,
            start: "bottom bottom",
            end: "top center"
            //onEnter: () => onPin(img),
            //onLeaveBack: () => onLeave(img)
        },
        opacity: 1
    });
}

function onPin(element) {
    gsap.to(element, {
        opacity: 1,
        duration: 0.5
    });
}

function onLeave(element) {
    gsap.to(element, {
        opacity: 0,
        duration: 0.5
    });
}


// const L = gsap.from('.sec_text', {
//     scrollTrigger: {
//         trigger: '.parallax__item__img',
//         start: 'bottom',
//         markers: false,
//         scrub: 0.75,
//         pin: true,
//     },
//     y: 0,
//     opacity: 1,
// });











window.addEventListener("resize", newTriggers);

function newTriggers() {
    ScrollTrigger.getAll().forEach((trigger, i) => {
        trigger.kill();
        masks[i].remove();
    });
    split.split();
    makeItHappen();
}

makeItHappen();
