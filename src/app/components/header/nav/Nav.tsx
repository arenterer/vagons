'use client'
import {FC} from 'react'
import styles from '@/app/components/header/Header.module.css'
import { Dropdown } from "flowbite-react";

const Header:FC =()=>{
    return (<div className={styles.nav_div}>
        <div className="hidden lg:flex container  mx-auto px-1 sm:px-12">
            <nav>
                <ul>
                    <li><a href="#catalog">Каталог</a></li>
                    <li><a href="#works">Наши работы</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
        </div>
        <div className="flex lg:hidden justify-between items-center container px-5">
            <div>
                <h1 className={styles.logo}>Лучшие вагончики</h1>
                <p className={styles.phoneM}>+7(904)071-57-29</p>
            </div>
            <div className={styles.dropDownWrapper}>

                <Dropdown label="" className={styles.dropDown}>
                    <Dropdown.Item href="#catalog" className=" block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Каталог
                    </Dropdown.Item>
                    <Dropdown.Item href="#works" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Наши работы
                    </Dropdown.Item>
                    <Dropdown.Item href="#about" className=" block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        О нас
                    </Dropdown.Item>
                    <Dropdown.Item href="#contact" className=" block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Контакты
                    </Dropdown.Item>
                </Dropdown>
            </div>

        </div>
    </div>);
}

export default Header