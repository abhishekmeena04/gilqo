function slide(){
    document.querySelectorAll(".s1")
    .forEach(function(elem){
        elem.addEventListener("mousemove",function(dets){
            // console.log(dets)
            var dim = this.getBoundingClientRect();
            this.children[1].style.clipPath = `circle(10% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`
        })
        elem.addEventListener("mouseleave",function(dets){
        // console.log(dets)
        var dim = this.getBoundingClientRect();
        this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`
        })
    
    })
    }
    slide();
    
function lala(){
    document.querySelector(".project")
    .addEventListener("scroll", function(){
        var dim = document.querySelector(".s1").getBoundingClientRect()
        var prev = dim.left
        // console.log(dim.left)
    
        document.querySelector(".project").addEventListener("scroll",function(){
            var dim2 = document.querySelector(".s1").getBoundingClientRect()
            var dim3 = prev - dim2.left
            prev = dim2
            document.querySelectorAll(".s1").forEach(function(lode){
                lode.style.transform = `skewX(${dim3*0.10}deg)`
            })
        })
    })
    }
    lala();
    // scroll trigger
    function lode(){
        gsap.registerPlugin(ScrollTrigger);
        
        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
        
        const locoScroll = new LocomotiveScroll({
          el: document.querySelector(".no"),
          smooth: true
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);
        
        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(".no", {
          scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
          }, // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
          },
        
          pinType: document.querySelector(".no").style.transform ? "transform" : "fixed"
        });
        
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        
        ScrollTrigger.refresh();
    }
    // texti
    gsap.from(".page1 h1",{
        onStart: function(){
            $('.page1 h1').textillate({
                 in: {
                     effect: 'fadeInDown',
                     callback: function(){
                        $('.page1 h1').textillate('')
                     }
                 },
                 out: {effect: 'fadeOutUp'}
                });     
        }
    })
    lode()
        gsap.from(".part3 h4",{
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            y: -5,
        })
        gsap.from(".page2 h1",{
            scrollTrigger: {
                trigger: "page2",
                scroller: "no",
                start: "top 50%",
                markers: "true"
            },
            opacity: 0,
            y: 10,
            duration: 1,
        })
        // gsap.from("#hh",{
            // opacity: 0,
            // scale: 0.99,
            // duration: 1,
        // })
        // gsap.from("#i1",{
            // y: 100,
            // duration: 1,
            // opacity: 0
        // })
        // gsap.from("#i2",{
            // x: 100,
            // duration: 1,
            // opacity: 0
        // },'-=1')
        // gsap.from("#i3",{
            // y: -100,
            // duration: 1,
            // opacity: 0
        // },'-=1')
        // gsap.from(".page2 h1",{
            // scrollTrigger: {
                // trigger: ".page2",
                // scroller: ".no",
                // start: "top 65%",
                // markers: "true",
            // },
            // y: 20,
            // opacity: 0,
            // delay: .2
        // })
        // gsap.from(".page2 h5",{
            // scrollTrigger: {
                // trigger: ".page2",
                // scroller: ".no",
                // start: "top 65%",
                // markers: "true",
            // },
            // y: 20,
            // opacity: 0,
            // delay: .5
        // })
        // gsap.from(".page2 .abo",{
            // scrollTrigger: {
                // trigger: ".page2",
                // scroller: ".no",
                // start: "top 65%",
                // markers: "true",
            // },
            // y: 20,
            // delay: .8,
            // opacity: 0,
        // })
        // gsap.from(".page3 #iii, .page3 #ooo, .page3 #mmm, .page3 #bbb",{
            // scrollTrigger: {
                // trigger: ".page3",
                // scroller: ".no",
                // start: "top 60%",
                // markers: "true",
            // },
            // y: 30,
            // opacity: 0,
            // delay: .2
        // })
        // gsap.from(".page3 h1",{
            // scrollTrigger: {
                // trigger: ".page3",
                // scroller: ".no",
                // start: "top 30%",
                // markers: "true",
            // },
            // y: 20,
            // duration: 1,
            // opacity: 0,
            // delay: 1
        // })
        // gsap.from(".page3 p",{
            // scrollTrigger: {
                // trigger: ".page3",
                // scroller: ".no",
                // start: "top 30%",
                // markers: "true",
            // },
            // y: 20,
            // duration: 1,
            // delay: 1.5,
            // opacity: 0,
        // })
        // gsap.from(".page3 .lala",{
            // scrollTrigger: {
                // trigger: ".page3",
                // scroller: ".no",
                // start: "top 30%",
                // markers: "true",
            // },
            // y: 20,
            // duration: 1,
            // delay: 2,
            // opacity: 0,
        // })
        // gsap.from(".page4 h1",{
            // scrollTrigger: {
                // trigger: ".page4",
                // scroller: ".no",
                // start: "top 60%",
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0
        // })
        // gsap.from(".page5 .box",{
            // scrollTrigger: {
                // trigger: ".page5",
                // scroller: ".no",
                // start: "top 70%",
                // markers: "true"
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0
        // })
        // gsap.from(".page5 .lala #lali",{
            // scrollTrigger: {
                // trigger: ".page5",
                // scroller: ".no",
                // start: "top 90%",
                // markers: "true"
            // },
            // x: 10,
            // duration: 1,
            // opacity: 0
        // })
        // gsap.from(".page7>img",{
            // scrollTrigger: {
                // trigger: ".page7",
                // scroller: ".no",
                // start: "top 30%",
                // markers: "true",
                // markers: "true",
            // },
            // y: 30,
            // ease: Expo.easeInOut,
            // duration: 0.9,
            // opacity: 0,
            // scrub: 2
        // })
        // gsap.from(".text1",{
            // scrollTrigger: {
                // trigger: ".page7",
                // scroller: ".no",
                // start: "top 20%",
                // markers: "true"
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0,
        // })
        // gsap.from(".text2",{
            // scrollTrigger: {
                // trigger: ".page7",
                // scroller: ".no",
                // start: "top 20%",
                // markers: "true"
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0,
            // delay: 0.5
            // 
        // })
        // gsap.from(".text3",{
            // scrollTrigger: {
                // trigger: ".page7",
                // scroller: ".no",
                // start: "top 20%",
                // markers: "true",
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0,
            // delay: 0.8
        // })
        // gsap.from(".text4",{
            // scrollTrigger: {
                // trigger: ".page7",
                // scroller: ".no",
                // start: "top 20%",
                // markers: "true",
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0,
            // delay: 1.3
        // })
        // gsap.from(".text5",{
            // scrollTrigger: {
                // trigger: ".page7",
                // scroller: ".no",
                // start: "top 20%",
                // markers: "true",
            // },
            // y: 30,
            // duration: 1,
            // opacity: 0,
            // delay: 1.8
        // })