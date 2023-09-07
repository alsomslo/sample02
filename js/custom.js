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
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, ScrollToPlugin);
let smoother = ScrollSmoother.create({
    smooth: 2
});

let split = new SplitText(".text>h2", { type: "lines" });
let masks;
function makeItHappen() {
    masks = [];
    split.lines.forEach((target) => {
        let mask = document.createElement("span");
        mask.className = "mask";
        target.append(mask);
        masks.push(mask);
        gsap.to(mask, {
            scaleX: 0,
            transformOrigin: "right center",
            ease: "none",
            scrollTrigger: {
                trigger: target,
                markers: false,
                scrub: true,
                start: "top center",
                end: "bottom center"
            }

        });
    });
}

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


const L = gsap.from('.sec_text', {
    scrollTrigger: {
        trigger: '.parallax__item__img',
        start: 'bottom',
        markers: false,
        scrub: 0.75,
        pin: true,
    },
    y: 0,
    opacity: 1,
});










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
