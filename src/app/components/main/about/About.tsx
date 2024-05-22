import styles from './About.module.css'
import catalogStyles from '../catalog/Catalog.module.css'
import Image from "next/image";

export default function About(){
    return (
        <div className={styles.about}>
            <div className="container mx-auto px-5 lg:px-12 pb-12" id="about">
                <h1 className={catalogStyles.catalog_title}>О нас</h1>
                <div className="block lg:flex gap-14">
                    <Image className="mx-auto" src="/img/1.jpeg" width={500} height={0} alt='vagons'/>
                    <p>
                        Наша компания специализируется на изготовлении высококачественных бытовок
                        и торговых павильонов по индивидуальным заказам. Мы предлагаем широкий
                        выбор дизайнов и материалов для создания уникальных конструкций,
                        которые полностью соответствуют потребностям наших клиентов.
                        Независимо от того, нужна вам бытовка для дачи, строительного
                        объекта или торговый павильон для бизнеса, мы всегда готовы предложить
                        оптимальное решение. Наши бытовки и вагончики отличаются прочностью,
                        надежностью и долговечностью, что делает их идеальным выбором для любых целей.
                        Мы работаем по всей Сибири, включая город Омск. Обращайтесь к нам,
                        и мы создадим идеальное решение специально для вас!
                    </p>
                </div>
            </div>
        </div>
    );
}