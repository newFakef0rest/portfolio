import { StickCards } from '../StickCards/StickCards';
import { Title } from '../Title/Title';
import styles from './Experience.module.scss';
import Job from '../../images/job.svg';

export const Experience = () => {
    return (
        <div className={styles.experience}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className={styles.experience__title}>
                            <Title title='Experience' image={Job}/>
                        </div>
                        <StickCards />
                    </div>
                </div>
            </div>
        </div>
    )
}