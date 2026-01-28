function navAnimation() {
    let part2 = document.querySelector("#nav-part2");
    let nav = document.querySelector("#nav");

    let openTl = gsap.timeline({ paused: true });
    let closeTl = gsap.timeline({ paused: true });

    /* OPEN ANIMATION (smooth) */
    openTl
        .to("#nav-bottom", {
            height: "250%",
            bottom: "-250%",
            duration: 0.35,
            ease: "power2.out"
        })
        .to(".nav-elem h5", {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05
        }, "-=0.15");

    /* CLOSE ANIMATION (faster) */
    closeTl
        .to(".nav-elem h5", {
            opacity: 0,
            y: 15,
            duration: 0.15,
            stagger: 0.03
        })
        .to("#nav-bottom", {
            height: 0,
            bottom: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "-=0.05");

    nav.addEventListener("mouseenter", () => {
        closeTl.kill();        // stop close if running
        openTl.restart();     // always open fresh
    });

    nav.addEventListener("mouseleave", () => {
        openTl.kill();        // stop open if running
        closeTl.restart();    // fast close
    });

};

function rightElemAnimation() {
    let rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 68.5,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })
        })
    })
}

function page3VideoAnimation(){

    let container = document.querySelector(".play-container");
    let video = document.querySelector("#page3 video");
    
    container.addEventListener("click",function(){
        video.play()
         gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

navAnimation();

rightElemAnimation();

page3VideoAnimation()