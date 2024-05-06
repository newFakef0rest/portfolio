import { Title } from '../Title/Title'
import styles from './Education.module.scss'
import EducationImage from '../../images/education.svg';
import { StickCards } from '../StickCards/StickCards';
import { TCardArray } from '../Experience/Experience';

export const Education = () => {
    const education: TCardArray = [
        {
            date: ['Oct 2023', 'Feb 2026'],
            title: "Bachelor of Computer Science in 'Uniwersytet WSB Merito Warszawa'",
            description: "This degree program is about engineering and programming"
        },
        {
            date: ['Apr 2024', 'Dec 2024'],
            title: "Python Course in Educational Center 'Tehnikum'",
            description: "The course is about becoming a back-end developer and making telegram bots"
        }
    ]
    return (
        <div className={styles.education}>
            <div className="container">
                <div className="row">
                    <div className="col__9">
                        <div className="education__items">
                            <div className={styles.education__title}>
                                <Title title="Education" image={EducationImage}/>
                            </div>
                            <div className="education__box">
                                <StickCards items={education}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}