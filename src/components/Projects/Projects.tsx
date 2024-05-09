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
import Fides from '../../images/fides.png';
import SmokeOff from '../../images/smokeoff.png';
import KumushSaroy from '../../images/kumush-saroy.png';
import Cerera from '../../images/Cerera.png';
import Xmedia from '../../images/xmedia.png';
import Nevotag from '../../images/nevotag.png';

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
        },
        {
            title: 'Fides',
            info: 'Developed an interactive web application using HTML, CSS, SCSS, Gulp and Javacscript. Designed it to be a reflective space for personal and professional growth, with a focus on simplicity and minimalism.',
            image: Fides,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/fides',
                image: GitHub
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azizjonmakhamadjonov/',
                image: LinkedIn
            },
            {
                title: 'GitHub Pages',
                href: 'https://newfakef0rest.github.io/fides/',
                image: Netlify
            }
            ]
        },{
            title: 'SmokeOff',
            info: 'Developed an interactive web application using HTML, CSS, SCSS, Gulp, and Javacscript. Designed it to be a reflective space for personal and professional growth, with a focus on simplicity and minimalism.',
            image: SmokeOff,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/smokeoff',
                image: GitHub
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azizjonmakhamadjonov/',
                image: LinkedIn
            },
            {
                title: 'GitHub Pages',
                href: 'https://newfakef0rest.github.io/smokeoff/',
                image: GitHub
            }
            ]
        },{
            title: 'Kumush Saroy',
            info: 'Experience the essence of Tashkent at our hotel-cafés sleek and intuitive website. Seamlessly designed for effortless navigation, discover our enticing offerings, from sumptuous dining options to luxurious accommodations. Immerse yourself in the elegance of our online platform and let your journey through Tashkent begin with just a click',
            image: KumushSaroy,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/kumush',
                image: GitHub
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azizjonmakhamadjonov/',
                image: LinkedIn
            },
            {
                title: 'GitHub Pages',
                href: 'https://newfakef0rest.github.io/kumush/',
                image: GitHub
            }
            ]
        },{
            title: 'Cerera',
            info: 'Cereras website captivates visitors with its interactive JavaScript content, enhanced by SCSS for sleek styling. Featuring multiple pages, it offers a dynamic journey through Cereras world, engaging users with seamless navigation and captivating visuals.',
            image: Cerera,
            buttons: [
            {
                title: 'GitHub',
                href: 'https://github.com/newFakef0rest/cerera',
                image: GitHub
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azizjonmakhamadjonov/',
                image: LinkedIn
            },
            {
                title: 'GitHub Pages',
                href: 'https://newfakef0rest.github.io/cerera/',
                image: GitHub
            }
            ]
        },{
            title: 'Xmedia Group',
            info: 'The Xmedia-Group website serves as a comprehensive online presence for a firm specializing in website design, flyer creation, and related services. With multiple pages, it offers detailed information about the companys offerings, showcasing their expertise in digital and print media. Visitors can explore their portfolio, learn about their process, and connect with them for their design needs.',
            image: Xmedia,
            buttons: [
            {
                title: 'Xmedia',
                href: 'https://xmedia-group.uz/',
                image: 'XmediaLogo'
            }
            ]
        },{
            title: 'Nevotag',
            info: 'The Nevotag landing website is the gateway to a premier programming education center. With a sleek design and intuitive navigation, it offers comprehensive insights into the centers courses, faculty, and unique learning approach, catering to aspiring programmers seeking quality education.',
            image: Nevotag,
            buttons: [
            {
                title: 'Nevotag',
                href: 'https://nevotag.uz/',
                image: 'Nevotag'
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