import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const smoothImageMove = () => {

  const box = document.querySelector('.js--imageParallax');
  if (box) {
    const picture = document.querySelector('.js--imageParallax__image');
    const pictureHeight = picture.offsetHeight;

    if (box) {
      const heightDiff = box.offsetHeight;

      gsap.fromTo('.js--imageParallax .js--imageParallax__image',{
        y: 0
      }, {
        scrollTrigger: {
          scrub: true,
          top: 'top bottom',
          end: `+=${pictureHeight*5} top`,
        },
        y: heightDiff,
        ease: "none"
      });
    }
  }
}

export default smoothImageMove;








