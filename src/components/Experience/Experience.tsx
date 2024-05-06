import { StickCards } from '../StickCards/StickCards';
import { Title } from '../Title/Title';
import styles from './Experience.module.scss';
import Job from '../../images/job.svg';

type TCardItem = {
    date: string[],
    title: string,
    description: string
}

export type TCardArray = TCardItem[]

export const Experience = () => {
    const experience: TCardArray = [
        {
            date: ['Sep 2021', 'Apr 2023'],
            title: "Frontend developer in 'Nevotag' company - Tashkent, Uzbekistan",
            description: "Develop and design projects strengthening skills in HTML, CSS, SCSS, JavaScript and Figma."
        }
    ]
    return (
        <div className={styles.experience}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className={styles.experience__title}>
                            <Title title='Experience' image={Job}/>
                        </div>
                        <StickCards items={experience}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
