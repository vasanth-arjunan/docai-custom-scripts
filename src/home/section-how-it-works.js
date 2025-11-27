import gsap from "gsap";

export const SectionHowItWorks = () => {
    const featureCards = document.querySelectorAll('.hiw_card');
    const marquee = document.querySelector('.hiw_marquee');
    const marqueeBlocks = marquee?.querySelectorAll('.hiw_marquee_block');

    // Feature cards reveal
    featureCards.forEach((card) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power1.out",
            stagger: false,
            scrollTrigger: {
                trigger: card,
                start: "top 65%"
            }
        })
    });

    marqueeBlocks.forEach((block) => {
        gsap.to(block, {
            x: -400,
            duration: 10,
            ease: "none",
            repeat: -1
        })
    });

    // Feature cards reveal

}