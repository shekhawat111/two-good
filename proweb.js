function vdosec() {
    var videosec = document.querySelector(".videosec");
    var play = document.querySelector(".play");














    videosec.addEventListener("mouseenter", function() {
        gsap.to(play, {
            opacity: 1,
            scale: 1,
        })
    });
    videosec.addEventListener("mouseleave", function() {
        gsap.to(play, {
            opacity: 0,
            scale: 0,
        })
    });
    videosec.addEventListener("mousemove", function(dets, index) {
        gsap.to(play, {
            left: dets.clientX - 80,
            top: dets.clientY - 70,
        })
    });

}
vdosec();


gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    stagger: 0.4,
})

gsap.from(".videosec", {
    scale: 1,
    opacity: 0,
    duration: 0.9,
    delay: 0.9,
    stagger: 0.4,
})





// cursur code here //


document.querySelectorAll(".child").forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        const cruser = elem.querySelector(".cruser"); // Select the .cruser inside the current .child
        gsap.to(".cruser", { // Use the selected .cruser
            transform: "translate(-50%, -50%) scale(1)",
        });
    });

    elem.addEventListener("mouseleave", function() {
        const cruser = elem.querySelector(".cruser"); // Select the .cruser inside the current .child
        gsap.to(".cruser", { // Use the selected .cruser
            transform: "translate(-50%, -50%) scale(0)",
        });
    });

    elem.addEventListener("mousemove", function(dets) {
        const cruser = elem.querySelector(".cruser"); // Select the .cruser inside the current .child
        gsap.to(".cruser", { // Use the selected .cruser
            left: dets.clientX,
            top: dets.clientY,
        });
    });
});
// scrool trigger code here 

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
gsap.to(".navpart1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: 0.8,
    }
})
gsap.to(".navpart2 .links", {
        opacity: 0,
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: 0.8,
            stagger: 1,
        }
    })
    // gsap.to(".navpart2 .icon", {
    //     opacity: 0,
    //     transform: "translateY(-100%)",
    //     scrollTrigger: {
    //         trigger: ".page1",
    //         scroller: ".main",
    //         start: "top 0",
    //         end: "top -5%",
    //         stagger: 0.7,
    //         scrub: 0.8,
    //     }
    // })