'use client'
import { useState } from 'react';
import styles from './Modal.module.css'

import dynamic from 'next/dynamic'

const Quiz = dynamic(() => import("@/app/components/quiz/Quiz"), {
    ssr: false,
})
export default function Modal({active, setActive}:any){
    const [activeQuestion, setActiveQuestion] = useState(0)

    return(
        <div className={active ? styles.modalActive : styles.modal} onClick={()=> setActive(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <Quiz active={activeQuestion} setActive={setActiveQuestion}/>

            </div>
        </div>
    )
}