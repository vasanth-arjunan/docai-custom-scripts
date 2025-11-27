import gsap from "gsap";

export const PageLoad = () => {
    const navItems = document.querySelectorAll(".navbar_content > *");
    const heroItems = document.querySelectorAll(".hero_content > *");
    const heroImages = document.querySelectorAll(".hero_image_wrapper > *");
    const heroCTA = document.querySelectorAll(".sticky_nav");
    const heroEmojis = document.querySelectorAll(".hero_emojis > *");

    const tl = gsap.timeline();

    // 1) Navbar reveal
    tl.from(navItems, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
    });

    // 2) Hero Content Reveal
    tl.from(heroItems, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
    }, "+=0.5");

    // 3) Hero CTA Reveal
    tl.from(heroCTA, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power1.out",
    }, "+=1");

    // 4) Hero Image Reveal
    tl.from(heroImages, {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
    }, "+=1.3");

    // 5) Hero Emojis Reveal
    tl.from(heroEmojis, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
    }, "+=1.3");
};