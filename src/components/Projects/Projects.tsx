import styles from './Projects.module.scss';
import Code from '../../images/code.svg'
import { Title } from '../Title/Title';
import { PortfolioCard } from '../PortfolioCard/PortfolioCard';
import GitHub from '../../images/GitHub.svg';
import Figma from '../../images/figma.svg';
import LinkedIn from '../../images/LinkedIn.svg';
import Netlify from '../../images/netlify.svg';
import Portfolio from '../../images/portfolio.png';
import ApiTest from '../../images/apitest.png';
import ObstGe from '../../images/obstge.png';

type TButtons = {
    title: string,
    href: string,
    image: string
}

type TProjectCard = {
    title: string,
    info: string,
    image: string,
    buttons: TButtons[]
}

export type TProject = TProjectCard[]

export const Projects = () => {
    const card: TProject = [
        {
            title: 'Personal Portfolio',
            info: 'Developed an interactive web application using React, TypeScript and Material UI. Designed it to be a reflective space for personal and professional growth, with a focus on simplicity and minimalism.',
            image: Portfolio,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/portfolio',
                image: GitHub
            },
            {
                title: 'Figma',
                href: 'https://www.figma.com/file/zgEBbIa99XQMJT32kwJhRk/Personal-Portfolio-(Community)?type=design&node-id=2%3A5&mode=dev&t=zPwysTcKK3I0ynS4-1',
                image: Figma
            }
            ]
        },
        {
            title: 'API Test',
            info: 'Developed an interactive web API application using React, TypeScript, Axios, MobX, Material UI and React-Router-DOM. More information about this project is in my LinkedIn profile (section "Projects")',
            image: ApiTest,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/apitest',
                image: GitHub
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azizjonmakhamadjonov/',
                image: LinkedIn
            },
            {
                title: 'Netlify',
                href: 'https://apitest-cyan.vercel.app/',
                image: Netlify
            }
            ]
        },
        {
            title: 'ObstGe',
            info: 'Developed an interactive web application using React, TypeScript and Material UI. Designed it to be a reflective space for personal and professional growth, with a focus on simplicity and minimalism. More information about this project is in my LinkedIn profile (section "Projects")',
            image: ObstGe,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/foodSite',
                image: GitHub
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azizjonmakhamadjonov/',
                image: LinkedIn
            },
            {
                title: 'Netlify',
                href: 'https://newfakef0rest.github.io/foodSite/',
                image: Netlify
            }
            ]
        }
    ]
    return (
        <div id='projects' className={styles.projects}>
            <div className="container">
                <div className="row">
                    <div className="col__9">
                        <div className={styles.projects__title}>
                            <Title title='Projects' image={Code} />
                        </div>
                        <PortfolioCard card={card} />
                    </div>
                </div>
            </div>
        </div>
    )
}