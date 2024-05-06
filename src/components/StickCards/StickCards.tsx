import { Card } from '../Card/Card';
import { TCardArray } from '../Experience/Experience';
import styles from './StickCards.module.scss';

type CardProps = {
    items: TCardArray
}

export const StickCards = ({items} : CardProps) => {
    return (
        <div className={styles.cards}>
            {items.map(item => (
                <li key={item.title} className={styles.cards__item}>
                    <Card 
                        date={item.date} 
                        title={item.title}
                        info={item.description}/>
                </li>
            ))}

        </div>
    )
}   

{/* <li className={styles.cards__item}>
<Card 
    date={} 
    title=''
    info=''/>
</li> */}