import { Link } from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={`${styles.container} ${styles.image}`}>
            <h1>
            <Link className={styles['nav-link']} to="/">BOOK</Link>
            </h1>
            
            <div className={styles.navbar}>
                <div className={styles['link-box']}>
                    <Link className={styles['nav-link']} to="/assignments">Assignments</Link>
                </div>
                <div className={styles['link-box']}>
                    <Link className={styles['nav-link']} to="/lessons">Lessons</Link>
                </div>
                <div className={styles['link-box']}>
                    <Link className={styles['nav-link']} to="/quizes">Quizes</Link>
                </div>
                <div className={styles['link-box']}>
                    <a className={styles['nav-link']} href="/lessons">Lessons Application(Anchor)</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;