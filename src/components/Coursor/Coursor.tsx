/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import styles from './Coursor.module.scss';
import gsap from "gsap";

type CoursorProps = {
    isHovered: boolean
}

const colors = [
  '#c32d27',
  '#f5c63f',
  '#457ec4',
  '#356fdb'
]

export const Coursor = ({isHovered}: CoursorProps) => {
    const size = isHovered ? 300 : 30
    const delay = isHovered ? 0.015 : 0.005
    const circles = useRef<HTMLDivElement[]>([]);
    const mouse = useRef({
      x: 0,
      y: 0
    })
  
    const delayedMouse = useRef({
      x: 0,
      y: 0
    })

    const manageMouseMove = (e: MouseEvent) => {
        const {clientX, clientY} = e;
        mouse.current = {
          x: clientX,
          y: clientY
        }
    }

    // console.log(mouse.current)
    
      const lerp = (x : number,y : number,a : number) => x * (1 - a) + y * a
    
      const moveCircle = (x: number, y: number) => {
        circles.current.forEach((circle) => {
          gsap.set(circle, {x, y, xPercent: -50, yPercent: -50})
        })
      }
    
      const animate = () => {
        const {x, y} = delayedMouse.current;
    
        delayedMouse.current = {
          x: lerp(x, mouse.current.x, 0.075),
          y: lerp(y, mouse.current.y, 0.075)
        }
    
        moveCircle(delayedMouse.current.x, delayedMouse.current.y)
        window.requestAnimationFrame(animate);
      }
    
      useEffect(() => {
        animate()
        window.addEventListener('mousemove', manageMouseMove)
        return () => window.removeEventListener('mousemove', manageMouseMove)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
      <>
        {colors.map((color, i, array) => (
          <div 
          id='circle-main' 
          ref={ref => ref ? circles.current[i] = ref : null}
          key={color}
          style={{width: size, 
            height: size,
            backgroundColor: color,
            filter: `blur(${isHovered ? 30 : 2}px)`,
            transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${(array.length - i) * delay}s linear`}} 
          className={`circles ${styles.circle}`}></div>
        ))}

      </>

    )
}

 
         