import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export const GlobalContentReveal = () => {
    const sections = document.querySelectorAll(".content_staggered_reveal");

    sections.forEach(section => {
        const items = section.querySelectorAll(":scope > *");

        gsap.from(items, {
            opacity: 0,
            y: 40,
            ease: "power2.out",
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: "top 65%",
                end: "bottom top",
                scrub: false,
            }
        });
    });
};
