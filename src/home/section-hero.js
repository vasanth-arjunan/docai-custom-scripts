import gsap from "gsap";

export const SectionHero = () => {

    const heroSection = document.querySelector(".section_hero");
    //Sticky navigation expand and collapse
    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            ScrollTrigger.create({
                trigger: ".sticky_nav_layout",
                start: "top+=500 top", // When .sticky_nav_layout is 500px from viewport top
                onEnter: () => {
                    document.querySelector(".sticky_nav").classList.add("is_open");

                    gsap.to(".hero_image", {
                        x: "-51%",
                        duration: 1,
                        ease: "power1.inOut"
                    });

                    gsap.to(".hero_image_alternate", {
                        x: "51%",
                        duration: 1,
                        ease: "power1.inOut"
                    });
                },
                onLeaveBack: () => {
                    document.querySelector(".sticky_nav").classList.remove("is_open");

                    gsap.to(".hero_image", {
                        x: "0%",
                        duration: 0.5,
                        ease: "power1.inOut"
                    });

                    gsap.to(".hero_image_alternate", {
                        x: "0%",
                        duration: 0.5,
                        ease: "power1.inOut"
                    });
                }
            });
        }
    });

    //Hero emojis movement
    gsap.to(".hero_emote_1", {
        x: 20,
        y: 20,
        ease: "none",
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });
    gsap.to(".hero_emote_2", {
        x: -20,
        y: 20,
        ease: "none",
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });

    gsap.to(".hero_emote_3", {
        x: 20,
        y: -20,
        ease: "none",
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });
    gsap.to(".hero_emote_4", {
        x: -20,
        y: -20,
        ease: "none",
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });

}