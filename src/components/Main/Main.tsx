import { Education } from "../Education/Education"
import { Experience } from "../Experience/Experience"
import { Languages } from "../Languages/Languages"
import { Line } from "../Line/Line"
import { Projects } from "../Projects/Projects"
import { Skills } from "../Skills/Skills"
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <main className={styles.main}>
            <Education />
            <Languages />
            <Skills />
            <Line />
            <Experience />
            <Projects />
        </main>
    )
}