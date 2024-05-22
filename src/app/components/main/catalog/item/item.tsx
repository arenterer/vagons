import {catalog} from '@/app/data'
import styles from './item.module.css'
import btnStyles from "@/app/components/Buttons.module.css";
import Link from "next/link";
export const list = catalog.items.map(el =>
    <div key={el.id} className={styles.item}>
        <img src={"img/" + el.img}></img>
        <h2>{el.title}</h2>
        <b className={styles.price}>{el.price}₽</b>
        <p>{el.desc}</p>
        <div className={styles.itemButton}>
            <b className={styles.exi} style={{color: el.existence === "В наличии" ? '#5fa36a' : '#3c82f8' }}>
                {el.existence}
            </b>
            <Link href='#contact'>
                <button className={btnStyles.btn_new}>
                    Связаться с нами
                </button>
            </Link>
        </div>
    </div>
);
