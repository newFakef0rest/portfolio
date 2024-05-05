import styles from './Card.module.scss';

type CardProps = {
    title: string,
    info: string,
    date: string[]
}

export const Card = ({title, info, date} : CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__date}>
                <span>{`${date[0]} - ${date[1]}`}</span>
            </div>
            <div className={styles.card__title}>
                <h3>{title}</h3>
            </div>
            <div className={styles.card__info}>
                <p>{info}</p>
            </div>
        </div>
    )
}