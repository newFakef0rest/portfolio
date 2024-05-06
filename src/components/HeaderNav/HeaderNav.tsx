import styles from './HeaderNav.module.scss';

export const HeaderNav = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={`row ${styles.header__row}`}>
                    <div className="col__6">
                        <nav className={styles.header__nav}>
                            <ul>
                                <li><a href="">About me</a></li>
                                <li><a href="">Education</a></li>
                                <li><a href="">Experience</a></li>
                                <li><a href="">Projects</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}