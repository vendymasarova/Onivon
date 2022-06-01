import { gsap } from 'gsap';
import gsapCore, { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, Timeline);

const timelineAnimation = () => {
  const timelineWrapper = document.querySelector('.js--timeline');
  const timelineSection = document.querySelector('.js--timeline-section');
  const lines = document.querySelectorAll('.js--timeline-line');
  const linesContent = document.querySelectorAll('.js--timeline-content');
  const contentBoxTop = document.querySelectorAll('.js--timeline-content--top');
  const contentBoxBottom = document.querySelectorAll('.js--timeline-content--bottom');
  const dottedLine = document.querySelector('.js--dotted-line');

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

    console.log(timelineWrapperHeight);

    const sectionHeight = parseInt(timelineSection.clientHeight + timelineWrapperHeight);
    console.log(sectionHeight);



    ScrollTrigger.matchMedia({

      "(min-width: 900px)": function() {

        const anim = gsap.timeline({
          scrollTrigger: {
            trigger: '.js--timeline',
            scrub: true,
            pin: true,
            start: 'center center',
            end: `+=30%`,
            markers: 'true',

            onEnterBack: self => {
              console.log("on enter back");
              anim.killTweensOf([lines, linesContent, dottedLine])
            },

            onLeaveBack: self => {
              self.kill();
              anim.progress(1);
              console.log("on leave back");
            },
            anticipatePin: 1,
          },
        });
        anim.fromTo(lines,
          {scaleX: 0, opacity: 0}, {scaleX:1, opacity: 1, stagger: 0.8, transformOrigin: 'left center'}
        )
        anim.fromTo(linesContent,
          {opacity: 0}, {opacity: 1, stagger: 0.8}, '<')
        anim.fromTo(dottedLine,
          {opacity: 0}, {opacity: 1})
      },
    })
  }
 }

export default timelineAnimation;
