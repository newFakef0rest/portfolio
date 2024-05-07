import styles from './Line.module.scss';
import gsap from "gsap"
import { useRef } from 'react';

export const Line = () => {
    const newEl = useRef<HTMLDivElement>(null)
    // const initialPath = "M 0 80 Q 500 10 980 80"
    const resultPath = "M 0 200 Q 500 200 980 200"
    const width = 1000
    const height = 400

    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const resY =  e.clientY - newEl.current!.getBoundingClientRect().y
        const newPath = `M 0 200 Q ${e.clientX} ${resY} 980 200`

        // const locationEl = e.pageY - height

        gsap.to('svg path', {
            attr: { d: newPath },
            duration: 0.3,
            ease: "power3.out"
        })
    }


    const handleMouseLeave = () => {
        gsap.to('svg path', {
            attr: { d: resultPath },
            duration: 0.5,
            ease: "elastic.out(1,0.2)"
        })
    }

    return <div className={styles.line}>
        <div className="container">
            <div className="row">
                <div id='line' ref={newEl} className={styles.line__item} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
                    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
                        <path id='path' d="M 0 200 Q 500 200 980 200" stroke="black" fill="transparent"/>
                    </svg>
                </div>

            </div>
        </div>
    </div>
}