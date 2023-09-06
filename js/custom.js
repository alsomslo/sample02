
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

const L = gsap.from('.text', {
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

