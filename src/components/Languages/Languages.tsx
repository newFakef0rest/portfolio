import { Title } from '../Title/Title';
import styles from './Languages.module.scss';
import Language from '../../images/language.svg';
import Slider from '@mui/material/Slider';  

export const Languages = () => {
    return (
        <div className={styles.languages}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className="languages__title">
                            <Title title="Languages" image={Language} />
                        </div>
                        <ul className={styles.languages__box}>
                            <li>
                                <p>Russian - Native</p>
                                <Slider className={styles.language__slider} value={100} aria-label="Default" valueLabelDisplay="auto" />
                            </li>
                            <li>
                                <p>English - Professional Proficiency (C1)</p>
                                <Slider className={styles.language__slider} value={90} aria-label="Default" valueLabelDisplay="auto" />
                            </li>
                            <li>
                                <p>German - Intermediate (B1)</p>
                                <Slider className={styles.language__slider} value={60} aria-label="Default" valueLabelDisplay="auto" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}