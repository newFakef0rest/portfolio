import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import Coding from './images/coding.mp4';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData from './images/loader.json';

function App() {
  const comp = useRef<HTMLDivElement>(null);
  const anim = useRef<LottieRefCurrentProps>(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#test', {
        opacity: 0,
        y: "+=200",
        duration: 1
      }).to('#test', {
        delay: 2,
        duration: 1,
        opacity: 0
      }).to('#test', {
        style: 'display: none'
      }).from('.titles', {
        duration: 1,
        opacity: 0,
        y: '+=30',
        stagger: 1 
      }).to('#blackBox', {
        delay: 1,
        xPercent: "-100",
        duration: 2
      }).from(['.video', '.anim__buttons'], {
        opacity: 0,
        y: "-=20",
        stagger: 1
      }).from(['#intro-logo', '#intro-title', '#intro-info', '#intro-buttons'], {
        opacity: 0,
        x: "-=20",
        stagger: 1
      })
    }, comp)

    return () => ctx.revert()
  })

  return (
    <div id='app' className="app" ref={comp}>
      <div id='blackBox' className="test">
        <Lottie lottieRef={anim} id="test" animationData={animationData} />
        <div className="title__box">
          <span className="titles" id='title-1'>Student</span>
          <span className="titles" id='title-2'>Developer</span>
          <span className="titles" id='title-3'>Creator</span>
        </div>
      </div>
      <Header />
      <Main />
      <Footer />
      <video className="video" src={Coding} autoPlay loop muted></video>
    </div>
  )
}

export default App
