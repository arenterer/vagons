import styles from './Title.module.css'
import btnStyles from '../../Buttons.module.css'
import ModalButton from '../../button/ModalButton'
export default function Title(){
    return (
        <div className={styles.presentation}>
            <div className="container mx-auto px-5 lg:px-10">
                <div className={styles.main_title}>
                    <h1 className="pb-4">Производство бытовок</h1>
                    <div className={styles.line}></div>
                    <div className={styles.sub_title}>Бытовки в наличии и под заказ</div>
                    <div className={styles.sub_title}>Быстрое производство</div>
                    <div className={btnStyles.button_title}>
                            <ModalButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}