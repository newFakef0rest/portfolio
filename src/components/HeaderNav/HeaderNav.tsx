import styles from './HeaderNav.module.scss';



export const HeaderNav = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id : string) => {
        const item = document.getElementById(id)
        console.log(item)
        e.preventDefault();
        item && item.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={`row ${styles.header__row}`}>
                    <div className="col__6">
                        <nav className={styles.header__nav}>
                            <ul>
                                <li className='anim__buttons'><a onClick={e => handleSmoothScroll(e, 'education')} href="#education">Education</a></li>
                                <li className='anim__buttons'><a onClick={e => handleSmoothScroll(e, 'skills')} href="#skills">Skills</a></li>
                                <li className='anim__buttons'><a onClick={e => handleSmoothScroll(e, 'experience')} href="#experience">Experience</a></li>
                                <li className='anim__buttons'><a onClick={e => handleSmoothScroll(e, 'projects')} href="#projects">Projects</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}