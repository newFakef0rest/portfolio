import styles from './Title.module.scss';

type TitleProps = {
    title: string,
    image: string
}

export const Title = ({title, image} : TitleProps) => {
    return (
        <h2 className={styles.title}><img src={image} alt="" />{title}</h2>
    )
}