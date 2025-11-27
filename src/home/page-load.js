import gsap from "gsap";

export const PageLoad = () => {
    const navItems = document.querySelectorAll(".navbar_content > *");
    const heroItems = document.querySelectorAll(".hero_content > *");
    const heroImages = document.querySelectorAll(".hero_image_wrapper > *");
    const heroCTA = document.querySelectorAll(".sticky_nav");
    const heroEmojis = document.querySelectorAll(".hero_emojis > *");

    // Navbar Reveal
    gsap.from(navItems, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
        delay: 0,
    });

    // Hero content Reveal
    gsap.from(heroItems, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        delay: 0.5,
    });

    // Hero CTA Reveal
    gsap.from(heroCTA, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power1.out",
        delay: 1,
    });

    // Hero Images Reveal
    gsap.from(heroImages, {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
        delay: 1.3,
    });

    // Hero Emojis Reveal
    gsap.from(heroEmojis, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        delay: 1.3,
    });
};
