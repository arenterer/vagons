'use client'
import styles from './/ScrollBtn.module.css'
import {useEffect, useState} from "react";



const scroll = ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}


export default function ScrollBtn(){
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <div className={offset >500 ? styles.btnUp :styles.disable} onClick={scroll}></div>
    )
}