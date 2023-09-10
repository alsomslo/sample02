const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const tl = gsap.timeline({
    defaults: { duration: 0, ease: "power1.out" }
});
tl.fromTo('.animation .loading', {
    // x: "-100%",
    opacity: 0,
    duration: 1.5,
}, {
    // x: "0%",
    opacity: 1,

})
tl.to(".animation", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: "Expo.easeInOut"
})



// const ani4 = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".sec01_text h2", {
//     backgroundPositionX: "0%",
//     stagger: 30,
//     scrollTrigger: {
//         trigger: ".sec01_text h2",
//         scrub: 1,
//         start: "top center",
//         end: "bottom top",
//         markers: false,
//         end: "+=300"

//     }

// });
$('.has-mask-fill').each(function () {
    var words = $(this).text();
    var total = words;
    $(this).empty();
    $(this).append($("<span /> ").text(words));
});

var hasMaskFill = gsap.utils.toArray('.has-mask-fill');
hasMaskFill.forEach(function (hMaskFill) {
    var spanFillMask = hMaskFill.querySelectorAll("span");
    gsap.to(spanFillMask, {
        scrollTrigger: {
            trigger: ".has-mask-fill",
            start: "top 90%",
            end: () => `+=${hMaskFill.offsetHeight * 2}`,
            scrub: 1,
        },
        duration: 1,
        backgroundSize: "200% 100%",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});








const ani5 = gsap.timeline();
ani5.from("#pin_01 .t1", { x: innerWidth * 1 })
    .from("#pin_01 .t2", { x: innerWidth * -1 })

ScrollTrigger.create({
    animation: ani5,
    trigger: "#pin_01",
    start: "top top",
    end: "+=200",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1
});


console.clear();

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
            markers: true,
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













