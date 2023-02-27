gsap.registerPlugin(ScrollTrigger);

gsap.from(".items", {
    duration: 1,
    // x:-100,
    opacity:0, 
    stagger: 0.5,
    scrollTrigger:{
        trigger:".services",
        toggleActions: "play pause resume reset",
    }
});

// toggle menu bar
function toggle(){
    let a = document.querySelector(".menu");
    a.style.display = ""
}
