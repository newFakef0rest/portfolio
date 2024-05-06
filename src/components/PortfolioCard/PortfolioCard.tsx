import { Link } from '../Link/Link';
import styles from './PortfolioCard.module.scss';
import { TProject } from '../Projects/Projects';

type PortfolioProps = {
    card: TProject
}

export const PortfolioCard = ({card} : PortfolioProps) => {
    return (
        <>
            {card.map(item => (
                <div key={item.title} className={styles.card}>
                    <div className={styles.card__title}>
                        <h5>{item.title}</h5>
                    </div>
                    <div className={styles.card__info}>
                        <p>{item.info}</p>
                    </div>
                    <div className={styles.card__buttons}>
                        {item.buttons.map(button => (
                            <li key={button.title}>
                                <Link title={button.title} alt={button.title} image={button.image} href={button.href} />
                            </li>
                        ))}

                    </div>
                    <div className={styles.card__image}>
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))}
        </>
        
    )
}

