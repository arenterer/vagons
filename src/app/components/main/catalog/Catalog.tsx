import styles from './Catalog.module.css'
import {list} from './item/item'


export default function Catalog(){


    return(
        <div className="container mp-10 mx-auto" id="catalog">
            <h1 className={styles.catalog_title}>Каталог бытовок</h1>
            <h2 className={styles.catalog_sub_title}>Гарантируем вам минимум хлопот, благодаря нашему опыту в этом деле. Сделаем расчёт за 5 минут! Звоните сейчас.</h2>
            <div className="flex justify-between flex-wrap py-5 lg:py-12 px-10 mx-auto">
                    {list}
            </div>
        </div>
    )
}
