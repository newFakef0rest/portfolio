import styles from './Link.module.scss';

type LinkProps = {
    title: string,
    image: string,
    alt: string,
    href: string
}

export const Link = ({title, image, alt, href} : LinkProps) => {
    return (
        <a href={href} target='_blank' className={styles.link}><img src={image} alt={alt} />{title}</a>
    )
}