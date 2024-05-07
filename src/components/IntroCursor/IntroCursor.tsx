import { useRef, useEffect } from "react";
import Coding from './../../images/coding.mp4';
import gsap from "gsap";

export const IntroCursor = () => {
    const newtest = useRef(null);
    const circleRef = useRef({x: 0, y: 0});
    const delayedRef = useRef({x: 0, y: 0});

  const updateMouse = (e: MouseEvent) => {
    circleRef.current = {
        x: e.clientX,
        y: e.clientY
    }
  }

  
  const lerp = (x : number,y : number,a : number) => x * (1 - a) + y * a

  const moveCircle = (x:number, y:number) => {
    gsap.set('.mask', {
      maskPosition: `${x - 50}px ${y - 50}px`
    })
  }

  const animate = () => {
    const {x, y} = delayedRef.current;

    delayedRef.current = {
      x: lerp(x, circleRef.current.x, 0.075),
      y: lerp(y, circleRef.current.y, 0.075)
    }

    moveCircle(delayedRef.current.x, delayedRef.current.y)
    window.requestAnimationFrame(animate);
  }

  useEffect(() => {
    animate()
     window.addEventListener("mousemove", updateMouse)
     return () => {
      window.removeEventListener("mousemove", updateMouse)
     } 
  })

  return (
    <div 
    className={`mask`} id='mask'> 
      <video ref={newtest} className="video video__mask" src={Coding} autoPlay loop muted></video>
    </div>  
  )
}