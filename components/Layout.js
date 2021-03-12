import Nav from './Nav';
import styles from '../styles/Layout.module.css';

export default ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}