import { Card } from '../Card/Card';
import styles from './StickCards.module.scss';

// type CardProps = {
//     item: object
// }

export const StickCards = ({}) => {
    return (
        <div className={styles.cards}>
            <li className={styles.cards__item}>
                <Card 
                    date={['Oct 2023', 'Feb 2026']} 
                    title='Bachelor of Computer Science in "Uniwersytet WSB Merito Warszawa"'
                    info='This degree program is about engineering and programming'/>
            </li>
            <li className={styles.cards__item}>
                <Card 
                    date={['Apr 2024', 'Dec 2024']} 
                    title='Python Course in Educational Center "Tehnikum"'
                    info='The course is about becoming a back-end developer and making telegram bots'/>
            </li>
        </div>
    )
}   