gsap.to("#Page1 .box1", {
    duration : 2,
    delay : 1,
    rotate : 360,
     
})
gsap.to("#Page2 .box2", {
    duration : 2,
    rotate : 720,
    scrollTrigger: {
        trigger: '#Page2 .box2',
        scroller : "body",
        markers : true,
        start : "top 50%",
        end : "top 40%",
        scrub : 2
    }
})


gsap.from("#Page3 .box3", {
    duration : 2,
    x : -500,
     scrollTrigger : {
        trigger : "#Page3 .box3",
        scroller : "body",
        markers : true,
        start : "top 50%",
        end : "top 20%",
        scrub : 2
     }

}
)