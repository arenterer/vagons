'use client'
import styles from './Works.module.css'
import stylesCatalog from '../catalog/Catalog.module.css'
import LightGallery from "lightgallery/react";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
export default function Works(){
    return(
    <div className='container pb-12 mx-auto px-5 lg:px-12' id='works'>
        <h1 className={stylesCatalog.catalog_title}>Наши работы</h1>
        <h2 className={stylesCatalog.catalog_sub_title}>Гарантируем вам минимум хлопот, благодаря нашему опыту в этом деле. Сделаем расчёт за 5 минут! Звоните сейчас.</h2>
        <div className={styles.gallery}>
            <LightGallery elementClassNames={styles.lg} mode='lg-fade'>
                <a href="img/1.jpeg">
                    <img src="img/1.jpeg" alt=""/>
                </a>
                <a href="img/2.jpeg">
                    <img src="img/2.jpeg" alt=""/>
                </a>
                <a href="img/3.jpeg">
                    <img src="img/3.jpeg" alt=""/>
                </a>
                <a href="img/4.jpeg">
                    <img src="img/4.jpeg" alt=""/>
                </a>
                <a href="img/5.jpeg">
                    <img src="img/5.jpeg" alt=""/>
                </a>
                <a href="img/6.jpeg">
                    <img src="img/6.jpeg" alt=""/>
                </a>
                <a href="img/7.jpeg">
                    <img src="img/7.jpeg" alt=""/>
                </a>
                <a href="img/8.jpeg">
                    <img src="img/8.jpeg" alt=""/>
                </a>
                <a href="img/9.jpeg">
                    <img src="img/9.jpeg" alt=""/>
                </a>
            </LightGallery>
        </div>
    </div>
    )
}