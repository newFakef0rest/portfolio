import { Title } from '../Title/Title'
import styles from './Education.module.scss'
import EducationImage from '../../images/education.svg';

export const Education = () => {
    return (
        <div className={styles.education}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className="education__items">
                            <div className="education__title">
                                <Title title="Education" image={EducationImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}