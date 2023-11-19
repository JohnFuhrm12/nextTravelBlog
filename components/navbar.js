import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <>
        <div id={styles.navContainer}>
            <div id={styles.navTitleContainer}>
               <li className={styles.navList}><a id={styles.navTitle}>Viva Viajero</a></li> 
            </div>
            <div id={styles.navItemsContainer}>
                <li className={styles.navList}><a className={styles.navItem}>START</a></li> 
                <li className={styles.navList}><a className={styles.navItem}>DESTINATIONS</a></li> 
                <li className={styles.navList}><a className={styles.navItem}>ABOUT</a></li> 
                <li className={styles.navList}><a className={styles.navItem}>CONTACT</a></li> 
                <li className={styles.navList}><a className={styles.instagram}></a></li> 
            </div>
        </div>
        </>
    );
}