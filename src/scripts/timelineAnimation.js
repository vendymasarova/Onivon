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

      "(min-height: 1000px)": function() {

        // gsap.set(lines, {
        //   opacity: 1
        // })
        // // gsap.set(lines, {
        // //   scaleX: 0,
        // //   opacity: 0,
        // // })
        // // gsap.set(linesContent, {
        // //   opacity: 0
        // // })

        const anim = gsap.timeline({
          scrollTrigger: {
            trigger: '.js--timeline',
            scrub: 1,
            pin: true,
            start: 'center center',
            end: 'bottom 20%',
            once: true,
            // markers: true,
            defaults: {
              duration: 5,
            },
            onLeave: self => {
              // let scroll = self.scroll();
              self.kill();
              // console.log(scroll);
              // self.scroll(scroll);
              anim.progress(1);
            },
            // anticipatePin: 1,
          },
        })
        .fromTo(lines,
          {scaleX: 0, opacity: 0}, {scaleX:1, opacity: 1, stagger: 0.8, transformOrigin: 'left center'}
        )
        .fromTo(linesContent,
          {opacity: 0}, {opacity: 1, stagger: 0.8}, '<')
        .fromTo(dottedLine,
          {opacity: 0}, {opacity: 1})
      },
    })
  }


 }


export default timelineAnimation;
