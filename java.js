function locoscroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".Main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".Main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".Main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".Main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoscroll()

function mouseenter(){
  const Enter = document.querySelector(".page1")
  const move = document.querySelector(".mousemove")

Enter.addEventListener("mouseenter",()=>{
  gsap.to(move,{
    opacity:1,
})

Enter.addEventListener("mouseleave",()=>{
  gsap.to(move,{
    opacity:0,
})
})

Enter.addEventListener("mousemove",(dets)=>{
  gsap.to(move,{
    left:dets.x-50,
    top:dets.y-50
})
})

// Enter.addEventListener("click",()=>{
//   console.log("hello");
// })

})
}
mouseenter()

function togglemenu(){
  const closebtn = document.querySelector(".menu-close");
  const open = document.querySelector(".Hiddenmenu");
  const menu = document.querySelector(".menu");

  menu.addEventListener("click",()=>{
    open.classList.toggle('margintop');
  })

  closebtn.addEventListener("click",()=>{
    open.classList.toggle("margintop");
  })
}
togglemenu()

function videoanimation(){
    function setupVideoHover(photoId, overlayId, videoId) {
    const videoContainer = document.getElementById(photoId);
    const videoOverlay = document.getElementById(overlayId);
    const video = document.getElementById(videoId);
  
    videoContainer.addEventListener('mouseenter', () => {
        videoOverlay.style.opacity = '1';
        video.play();
    });
  
    videoContainer.addEventListener('mouseleave', () => {
        videoOverlay.style.opacity = '0';
        video.pause();
        video.currentTime = 0;
    });
  }
  
  setupVideoHover('video-container-1', 'video-overlay-1', 'video-1');
  setupVideoHover('video-container-2', 'video-overlay-2', 'video-2');
  setupVideoHover('video-container-3', 'video-overlay-3', 'video-3');
}
videoanimation()

