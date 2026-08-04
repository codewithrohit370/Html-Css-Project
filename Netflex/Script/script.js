gsap.registerPlugin(ScrollTrigger);

// Navbar
gsap.from(".nav-bar", {
    y: -80,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
});

// Hero Heading
gsap.from(".heading-section h2", {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
});

gsap.from(".heading-section h3", {
    y: 80,
    opacity: 0,
    delay: 0.3,
    duration: 1,

    scrollTrigger: {
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
});

gsap.from(".heading-section p", {
    y: 80,
    opacity: 0,
    delay: 0.6,
    duration: 1,
    scrollTrigger: {
        start: "top 70%",
        toggleActions: "restart none restart none"
    }

});

gsap.from(".input-section", {
    y: 80,
    opacity: 0,
    delay: 0.9,
    duration: 1,
    scrollTrigger: {
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
});
//Movie Section
gsap.from(".movie-box", {
    x: 80,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".movie-section",
        start: "top 100%",
        toggleActions: "play reverse play reverse"
    }
});




// Reason Cards
gsap.from(".Reason-box", {
    y: 80,
    opacity: 0,
    stagger: 0.3,

    scrollTrigger: {
        trigger: ".reason-section",
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
});

// FAQ
gsap.from(".ask-box", {
    x: -120,
    opacity: 0,
    stagger: 0.2,

    scrollTrigger: {
        trigger: ".Ask-Section",
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
});

//Second-last-section
gsap.from(".second-last-section", {
    y: 80,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".second-last-section",
        start: "top 70%",
        toggleActions: "restart none restart none"
    }
})

// Last Section
gsap.from(".last-section", {
    opacity: 0,
    y: 80,

    scrollTrigger: {
        trigger: ".last-section",
        start: "top 80%",
        toggleActions: "restart none restart none"

    }
});

const movieBoxes = document.querySelectorAll(".movie-box");

movieBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.1)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

const scrollBtn = document.querySelector(".scroll-btn");
const movieContainer = document.querySelector(".movie-container");
const movieBox = document.querySelector(".movie-box");

scrollBtn.addEventListener("click", () => {

    const gap = 40;
    const scrollAmount = movieBox.offsetWidth + gap ;
    movieContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

});



