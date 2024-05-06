import { Education } from "../Education/Education"
import { Experience } from "../Experience/Experience"
import { Languages } from "../Languages/Languages"
import { Projects } from "../Projects/Projects"
import { Skills } from "../Skills/Skills"
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <main className={styles.main}>
            <Education />
            <Languages />
            <Skills />
            <Experience />
            <Projects />
        </main>
    )
}