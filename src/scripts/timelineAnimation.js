import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, Timeline);

const timelineAnimation = () => {
  const lines = document.querySelectorAll('.js--line');
  const linesContent = document.querySelectorAll('.js--timeline-content');
  const dottedLine = document.querySelector('.js--dotted-line')

  gsap.timeline({
    scrollTrigger: {
      trigger: ".js--timelineAnimation",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
      once: true,
    },
  })
  .from(lines, {
  scaleX: 0,
  stagger: 0.6,
  transformOrigin: "left center",
  })
  .to(dottedLine, {
    opacity: 1,
  })
  .from(linesContent, {
    scaleX: 1,
    opacity: 0,
    stagger: 0.6,
  }, "-=0")

  gsap.utils.toArray('.js--timeline-content').forEach(content => {
    gsap.set(content, {
      opacity: 1,
    })
  })
 }


export default timelineAnimation;
