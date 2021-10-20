import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import MainThreeScene from './MainThreeScene'

gsap.registerPlugin(ScrollTrigger, SplitText);

export default class App {
  // constructor() {
  // }

  init() {
    this.titles = [...document.querySelectorAll('h2')]
    this.image = document.querySelector('.image')

    this.textAnimation()
  }

  textAnimation() {
    const tlImage = gsap.timeline()

    tlImage.from(this.image, 
      {
        scrollTrigger: {
          trigger: this.image,
          start: 'top top+=300px',
          end: 'bottom bottom-=450px',
          scrub: 2,
          toggleActions: 'restart pause reverse pause'
        },
        opacity: 0,
        y: 50,
        duration: 4,
        ease:'elastic(1.8, 1.5'
      })

    this.titles.forEach(title=> {
      const mySplitText = new SplitText(title, {type: 'chars'})
      const tlText = gsap.timeline({
        delay: 0.2,
        repeat: -1,
        repeatDelay: 1.5
      })
      gsap.set(mySplitText.chars, {
        transformOrigin: "center center -100px"
      })

      tlText.from(mySplitText.chars, {
        scrollTrigger: {
          trigger: title,
          start: 'top top+=300px',
          end: 'bottom bottom-=700px',
          scrub: 2,
          // toggleActions: 'restart pause reverse pause'
        },
        rotationX: 90,
        y: -100,
        stagger: 0.05,
        duration: 2,
        ease: 'elastic(1.8, 1.5)'
      })
      // .to(mySplitText.chars, {
      //   rotationX: '-=90',
      //   y: 0,
      //   stagger: 0.05,
      //   duration: 5,
      //   ease: 'expo.in'
      // }, '-=5')

      // gsap.from(mySplitText.chars, {
      //   scrollTrigger: {
      //     trigger: title,
      //     // markers: true,
      //     start: 'top center',
      //     end: 'bottom bottom-=500px',
      //     scrub: 2,
      //     toggleActions: 'restart pause reverse pause'
      //   },  
      //   duration: 3,
      //   stagger: 0.09,
      //   scale: 3,
      //   autoAlpha: 0,
      //   rotation: 90,
      // })
    })
  }

  roboAnimation() {
    // const o = {a:0}
    const tl = gsap.timeline()
    // tl.to(o, {
    //   a: 1,
    //   scrollTrigger: {
    //     trigger: '.wrap',
    //     markers: true,
    //     scrub: 5,
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     snap: 1/(this.titles.length - 1),
    //     onUpdate: (self) => {
    //         this.model = MainThreeScene.robo.model

    //         this.model.rotation.y = 2. * 3.14 * self.progress
    //         this.model.position.z = 3.6 * Math.sin(3.14 * self.progress)
    //       }
    //     }
    //   }
    // )

    ScrollTrigger.create({
      animation:tl,
      trigger: '.wrap',
      scrub: 0.2,
      start: 'top top',
      end: 'bottom bottom',
      snap: 1/ (this.titles.length -1),
      onUpdate: (self) => {
        this.model = MainThreeScene.robo.model

        this.model.rotation.y = 2. * 3.14 * self.progress

        this.model.position.z = 3.6 * Math.sin(3.14 * self.progress)
      }
    })
  }
}