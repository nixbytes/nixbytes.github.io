// Aminate the logo with library TweenMax
// source https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js

// adding scaling and rotation

TweenMax.from('#logo', 1, {
    // backout with ease function
    opacity: 0,
    rotation: 360,
    scale: 0,
    left: -200,
    ease: Back.easeOut
});

// Delay the animation for effect

TweenMax.to('#logo', 1, {
    borderRadius: "50%",
    delay: 0.9
});

TweenMax.from("#logoTxt", 1, {
    opacity: 0,
    delay: 1.2
});
TweenMax.staggerFrom(".link", 0.5, {
        opacity: 0,
        left: -200,
        delay: 1.2,
        ease: Back.easeOut
    },
    0.2);