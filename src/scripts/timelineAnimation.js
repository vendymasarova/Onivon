import { gsap } from 'gsap';
import gsapCore, { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, Timeline);

const timelineAnimation = () => {
  const timelineWrapper = document.querySelector('.js--timeline');
  const timelineSection = document.querySelector('.js--timeline-wrap');
  const lines = document.querySelectorAll('.js--timeline-line');
  const linesContent = document.querySelectorAll('.js--timeline-content');
  const contentBoxTop = document.querySelectorAll('.js--timeline-content--top');
  const contentBoxBottom = document.querySelectorAll('.js--timeline-content--bottom');
  const dottedLine = document.querySelector('.js--dotted-line');

  const w = window.innerWidth;

  if(timelineWrapper) {

    const topBoxArray = [];
    const bottomBoxArray = [];


    contentBoxTop.forEach(box => {
      topBoxArray.push(box.clientHeight)
    })

    const maxTopBoxHeight = (Math.max(...topBoxArray));


    contentBoxBottom.forEach(box => {
      bottomBoxArray.push(box.clientHeight)
    })

    const maxBottomBoxHeight = (Math.max(...bottomBoxArray));

    const timelineWrapperHeight = (maxTopBoxHeight + maxBottomBoxHeight) + 176;
    timelineWrapper.style.height = `${timelineWrapperHeight + 'px'}`;

    const timelineWrapperWidth = (timelineSection.scrollWidth) + 50;
    console.log(timelineWrapperWidth);

    const sectionHeight = parseInt(timelineSection.clientHeight + timelineWrapperHeight);



    ScrollTrigger.matchMedia({

      "(min-width: 900px)": function() {

        // gsap.to(timelineWrapper, {
        //     // xPercent: -100 * (sections.length - 1),
        //     x: (windowWidth - (scrollBoxWidth * scrollBoxItems.length)),
        //     ease: "none",
        //     scrollTrigger: {
        //       trigger: ".horizontal-scroll",
        //       scrub: 0.5,
        //       start: "bottom bottom",
        //       end: "top +=50",
        //       // markers: true
        //     }
        //   });

        const anim = gsap.timeline({

          scrollTrigger: {
            trigger: '.js--timeline',
            scrub: 2,
            pin: true,
            start: 'center center',
            end: `+=30%`,
            // markers: 'true',

            onEnterBack: self => {
              console.log("on enter back");
              anim.killTweensOf([lines, linesContent, dottedLine, timelineSection])
            },

            onLeaveBack: self => {
              self.kill();
              anim.progress(1);
              console.log("on leave back");
            },
            anticipatePin: 1,
          },
        });
        // anim.to(timelineSection, {x: -timelineWrapperWidth + w})
        anim.fromTo(lines,
          {scaleX: 0, opacity: 0}, {scaleX:1, opacity: 1, stagger: 1.2, duration: 1.2, transformOrigin: 'left center'}
        )
        anim.fromTo(linesContent,
          {opacity: 0}, {opacity: 1, stagger: 1.2, duration: 1.2}, '<')
        anim.fromTo(dottedLine,
          {opacity: 0}, {opacity: 1})
      },
    })
  }
 }

export default timelineAnimation;
