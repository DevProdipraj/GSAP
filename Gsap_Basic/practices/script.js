let tl = gsap.timeline();  

tl.from("#logo", {
    y: -20,           
    duration: 0.5,
    opacity : 0,
    delay: 1
});


tl.from("h1", {
    y: -20,           
    duration: 0.5,
    opacity : 0,
    stagger : 0.3
});
