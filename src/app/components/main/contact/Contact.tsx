import styles from './Contact.module.css'
import catalogStyles from '../catalog/Catalog.module.css'
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import {backgroundColorNames} from "ansi-styles";

export default function Contact(){
    return (
        <div className={styles.wrapper}>
            <div className="container mx-auto pb-10" style={{backgroundColor: "#434343", borderRadius: "50px 50px 0 0"}}
                 id="contact">
                <h1 className={catalogStyles.catalog_title}>Контакты</h1>
                <div className="block lg:flex gap-24  container mx-auto px-12">
                    <div className='relative overflow-hidden pb-7'><iframe src="https://yandex.ru/map-widget/v1/?ll=73.338864%2C54.933013&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzEzMDkwNxI40KDQvtGB0YHQuNGPLCDQntC80YHQuiwg0KXQu9C10LHQvdCw0Y8g0YPQu9C40YbQsCwgMTQvMjQiCg0trZJCFXW7W0I%2C&z=18.37" width="560" height="400" frameBorder="1" ></iframe></div>


                    <div className={styles.text}>
                        <h1 className="mb-5">г.Омск, ул.Хлебная 14</h1>
                        <div className="flex gap-5 items-center">
                            <FaTelegramPlane size={40}/>
                            <div>+7-999-999-99-99</div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FaWhatsapp size={40}/>
                            <div>+7-999-999-99-99</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}