import { Education } from "../Education/Education"
import { Experience } from "../Experience/Experience"
import { Introduction } from "../Introduction/Introduction"
import { Languages } from "../Languages/Languages"
import { Projects } from "../Projects/Projects"
import { Skills } from "../Skills/Skills"

export const Main = () => {
    return (
        <main>
            <Introduction />
            <Education />
            <Languages />
            <Skills />
            <Experience />
            <Projects />
        </main>
    )
}