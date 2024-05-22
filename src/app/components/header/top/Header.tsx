import {FC} from 'react'
import styles from '@/app/components/header/Header.module.css'

const Header:FC =()=>{
    return (
        <div className="hidden lg:flex container mx-auto px-10 py-7  justify-between items-center">
            <h1 className={styles.logo}>Лучшие вагончики</h1>
            <div>
                <a href="tel:+79040715729" className={styles.phone}>
                    +7(904)071-57-29{" "}
                </a>
                <a href="#contact" className={styles.btn_new}>
                    Задать вопрос
                </a>
            </div>

        </div>
    );
}

export default Header