import { HeaderNav } from '../HeaderNav/HeaderNav';
import { IntroCursor } from '../IntroCursor/IntroCursor';
import { Introduction } from '../Introduction/Introduction';
import styles from './Header.module.scss';


export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderNav/>
            <Introduction />
            <IntroCursor />
        </header>
    )
}