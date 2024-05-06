import styles from './Footer.module.scss';


export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className="container">
                <div className={`row ${styles.footer__row}`}>
                    <span>Created by fakef0rest</span>
                </div>
            </div>
        </div>
    )
}