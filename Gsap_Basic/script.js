// GSAP Time Line 

let tl = gsap.timeline()

// GSAP To Function 
tl.to("#box1", {
    x : 1800,
    duration : 2,
    delay : 1,
    rotate : 360,
    borderRadius : 5,

})

// GSAP From Function 
tl.from("#box2", {
    x : 1800,
    duration : 2,
    daley : 1,
    repeat : -1, //assin repeat value 1,2,3 .. whwn repeat 1,2,3 time give -1 value so repeat infinate time
    borderRadius : 5
})

//GSAP stagger
tl.from(".headerBox h1", {
    y : 10,
    opacity : 0,
    duration :0.5,
    stagger : 0.5
})

// apply css proparty 
tl.to("#box3", {
    x: 1800,                
    duration: 3,           
    delay: 1,               
    backgroundColor: "green",  
    borderRadius: "50%",    
    rotate : 360
});


// GSAP YOYO 
tl.to("#box4", {
    x: 1800,                
    duration: 2,           
    delay: 1,               
    backgroundColor: "green",  
    rotate : 360,
    repeat : -1,
    yoyo : true
});