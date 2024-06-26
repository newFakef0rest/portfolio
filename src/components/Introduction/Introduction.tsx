import styles from './Introduction.module.scss';
import Logo from '../../images/logo.jpg'
import LinkedIn from '../../images/LinkedIn.svg';
import Github from '../../images/GitHub.svg';
import Email from '../../images/Email.svg';
import Resume from '../../images/Resume.svg';
import ResumePdf from '../../assets/fourth.pdf';
import { Link } from '../Link/Link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


export const Introduction = () => {
    const [text] = useTypewriter({
        words: ['Привет, Я Азизжон', 'Cześć, jestem Azizjon', 'Hallo, ich bin Azizjon', 'Hey, I am Azizjon'],
        loop: true,
    })
    return (
        <div className={`${styles.introduction}`}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className={styles.introduction__box}>
                            <div id='intro-logo' className={styles.introduction__logo}>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div id='intro-title' className={styles.introduction__title}>
                                <h1>{text} <Cursor /></h1>
                                <span className={styles.introduction__span}>Open to work</span>
                            </div>
                            <div id='intro-info' className={styles.introduction__info}>
                                <p className={styles.introduction__color_first}>Motivated and adaptable eager to contribute and learn. &nbsp; </p>
                                <p className={styles.introduction__color_second}>Passionate Web Developer&nbsp;</p>
                                <p className={styles.introduction__color_third}> Dedicated of Pixel Perfect web.</p>
                            </div>
                            <div id='intro-buttons' className={styles.introduction__links}>
                                <li><Link title="LinkedIn" alt="LinkedIn" image={LinkedIn} href="https://www.linkedin.com/in/azizjonmakhamadjonov/"/></li>
                                <li><Link title="GitHub" alt="GitHub" image={Github} href="https://github.com/newFakef0rest"/></li>
                                <li><Link title="Gmail" alt="Email" image={Email} href="mailto:azizmamadjaprio@gmail.com"/></li>
                                <li><Link title="CV" alt="Resume" image={Resume} href={ResumePdf}/></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}