import { useState } from "react"
import { Coursor } from "../Coursor/Coursor"
import { Education } from "../Education/Education"
import { Experience } from "../Experience/Experience"
import { Languages } from "../Languages/Languages"
import { Line } from "../Line/Line"
import { Projects } from "../Projects/Projects"
import { Skills } from "../Skills/Skills"
import styles from './Main.module.scss';

export const Main = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <main id='main' className={styles.main}>
            <Coursor isHovered={isHovered}/>
            <div onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Education />
                <Languages />
                <Skills />
            </div>
            <Line />
            <Experience />
            <Projects/>
        </main>
    )
}