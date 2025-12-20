import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
const splitTextAnimation = (headingElement, sectionElement) => {
    const split = new SplitText(headingElement, {
        type: "words,chars",
        mask: "chars",
    });
    gsap.from(split.chars, {
        duration: 0.6,
        yPercent: 100,
        autoAlpha: 0,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
            trigger: sectionElement,
            start: "top 80%",
            end: "botttom 50%",
            scrub: 2,
            // markers:true
        },
    });

};

export default splitTextAnimation;