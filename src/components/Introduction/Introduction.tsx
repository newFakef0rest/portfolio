import styles from './Introduction.module.scss';
import Logo from '../../images/logo.jpg'
import LinkedIn from '../../images/LinkedIn.svg';
import Github from '../../images/GitHub.svg';
import Email from '../../images/Email.svg';
import Resume from '../../images/Resume.svg';
import ResumePdf from '../../assets/fourth.pdf';

export const Introduction = () => {
    return (
        <div className={styles.introduction}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className={styles.introduction__box}>
                            <div className={styles.introduction__logo}>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className={styles.introduction__title}>
                                <h1>Hey,  I am Azizjon</h1>
                                <span>Open to work</span>
                            </div>
                            <div className={styles.introduction__info}>
                                <p className={styles.introduction__color_first}>Motivated and adaptable eager to contribute and learn. &nbsp; </p>
                                <p className={styles.introduction__color_second}>Passionate Web Developer&nbsp;</p>
                                <p className={styles.introduction__color_third}> Dedicated of Pixel Perfect web.</p>
                            </div>
                            <div className={styles.introduction__links}>
                                <li><a href="https://www.linkedin.com/in/azizjonmakhamadjonov/"><img src={LinkedIn} alt="LinkedIn" />LinkedIn</a></li>
                                <li><a href="https://github.com/newFakef0rest"><img src={Github} alt="GitHub" />GitHub</a></li>
                                <li><a href="mailto:azizmamadjaprio@gmail.com"><img src={Email} alt="Email" />azizmamadjaprio@gmail.com</a></li>
                                <li><a href={ResumePdf}><img src={Resume} alt="Resume" />CV</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}