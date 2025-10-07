import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const h:number = window.innerHeight;
console.log(`window-height ${h}`);

const centerItemh:number | undefined = document.getElementById("center-item")?.offsetHeight;

const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".anim-name", {
        scrollTrigger: {
            trigger: ".section1",
            start: "top center",
            end: "bottom top",
            markers: false,
            scrub: true,
    },
    y: h*-1,})
    
    gsap.to(".anim-skill", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top center",
            end: "bottom top",
            markers: true,
            scrub: true,
    },
    y: h*-1+centerItemh,})
    gsap.to(".anim-tool", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top center",
            end: "bottom top",
            markers: true,
            scrub: true,
    },
    y: h*-1+centerItemh*2,})
    gsap.to(".anim-contact", {
        scrollTrigger: {
            trigger: ".section4",
            start: "top center",
            end: "bottom top",
            markers: true,
            scrub: true,
    },
    y: h*-1+centerItemh*3,})
    gsap.to(".title-anim", {
        scrollTrigger: {
            trigger: ".section-wrapper",
            start: "top top",
            end: "bottom bottom",
            markers: true,
            scrub: true,
    },
    y: h,})
    gsap.fromTo(
        ".work-container",
        {
            y: 50,
            autoAlpha: 0,
        },
        {
            y: 0,
            autoAlpha: 1,
            stagger:0.1,
            scrollTrigger: {
                trigger: ".work-container",
                toggleActions: "play none none reverse",
                start: "top center",
                markers: true,
            }
        }
    )
}

export default animation;