import { Title } from '../Title/Title'
import styles from './Education.module.scss'
import EducationImage from '../../images/education.svg';
import { StickCards } from '../StickCards/StickCards';

export const Education = () => {
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
                                <StickCards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}