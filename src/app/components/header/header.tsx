import {FC} from 'react'
import Top from '@/app/components/header/top/Header'
import Nav from './nav/Nav'
import styles from '@/app/components/header/Header.module.css'
const Header:FC =()=>{
    return <>
        <header className={styles.header}>
            <div >
                <Top />
                <Nav/>
            </div>
        </header>
    </>;
}

export default Header