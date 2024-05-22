import styles from './ads.module.css'
import stylesc from '../catalog/Catalog.module.css'
import { FaRubleSign } from 'react-icons/fa'
import { BsLayersFill } from 'react-icons/bs'
import { FaGears } from 'react-icons/fa6'
import { TbTruckDelivery } from 'react-icons/tb'

export default function Ads (){
    return (
        <div className={styles.whyb}>
            <div className="container px-5 lg:px-12 mx-auto">
                <div className={stylesc.catalog_title}>Почему работать с нами выгодно</div>
                <div className="block lg:flex justify-between pt-5 pb-16">
                    <div className={styles.item}>
                        <FaRubleSign className={styles.ico}/>
                        <div className={styles.item_title}>Удобная оплата</div>
                        <div className={styles.itemText}>Наличные и безналичные расчеты, оплата картой</div>
                    </div>
                    <div className={styles.item}>
                        <BsLayersFill className={styles.ico}/>
                        <div className={styles.item_title}>Использование качественных материалов</div>
                        <div className={styles.itemText}>Обеспечивают надежность и безопасность конструкций</div>
                    </div>
                    <div className={styles.item}>
                        <FaGears className={styles.ico}/>
                        <div className={styles.item_title}>Собственное производство</div>
                        <div className={styles.itemText}>Быстрое исполнения заказов по лучшим ценам, без наценки
                            посредников
                        </div>
                    </div>
                    <div className={styles.item}>
                        <TbTruckDelivery className={styles.ico}/>
                        <div className={styles.item_title}>Доставка</div>
                        <div className={styles.itemText}>У нас собственный парк, всю логистику мы берем на себя</div>
                    </div>
                </div>
            </div>
        </div>
    );
}