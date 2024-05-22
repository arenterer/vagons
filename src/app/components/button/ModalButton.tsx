'use client'
import btnStyles from "@/app/components/Buttons.module.css";
import Modal from '../../components/modal/Modal'
import {useState} from "react";


export default function ModalButton(){
    const [modalActive,setModalActive]= useState(false)
    const handleClick =()=>{
        setModalActive(true)
    }
    return(

        <>
        <button className={btnStyles.btn_new} onClick={handleClick}>
            Оставить заявку
        </button>
        <Modal active={modalActive} setActive={setModalActive}/>
        </>
    )
}