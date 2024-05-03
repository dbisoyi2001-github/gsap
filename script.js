function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav a, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from(".center-pt1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-pt1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-pt1 button", {
    opacity: 0,
    duration: 0.3,
  });

  tl.from(
    ".center-pt2 img",
    {
      opacity: 0,
      x: 300,
      duration: 1,
    },
    "-=1"
  );

  tl.from(".section1-bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.18,
    duration: 0.5,
  });
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          scroller: "body",
          start: "top 55%",
          end:"top 10%",
          scrub:2
        },
      });
      
      tl2.from(".services", {
        x: -100,
        opacity:0
      });
      
      tl2.from(".elem.left1",{
          x:-300,
          opacity:0,
          duration:2
      },"anim1")
      
      tl2.from(".elem.right1",{
          x:300,
          opacity:0,
          duration:2
      },"anim1")
      
      tl2.from(".elem.left2",{
          x:-300,
          opacity:0,
          duration:2
      },"anim2")
      
      tl2.from(".elem.right2",{
          x:300,
          opacity:0,
          duration:2
      },"anim2")
      
}

page1Animation()

page2Animation()
