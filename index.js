gsap.from('#imggg',{duration:2,x:'-100%'});
gsap.from('#col2',{duration:2,x:'100%'});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start:'center bottom',
       
    },
    x:500
})
tl.from('#sec2',{y:'100%',opacity:0,duratin:2})
tl.from('#sec3',{x:'100%',opacity:0,duratin:2})

$('#facility').magnificPopup({
    delegate :'a',
    type:'image',
    gallery:{
        enabled:true
    }
});
let ttl = gsap.timeline({
    scrollTrigger: {
        trigger: '#ourTeam',
        start:'center bottom',
       
    },
    x:500
})
ttl.from('#ourTeam',{duration:1,x:'100%'});
ttl.from('#member',{duration:1,opacity:0})

let tttl = gsap.timeline({
    scrollTrigger: {
        trigger: '#counterm',
        start:'center center',
       
    },
    x:500
})
tttl.from('.iconss',{duration:1,opacity:0,stagger:.5});
let counter = document.getElementById('counter')
counter.style.margin='50px';