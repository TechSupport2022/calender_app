import React from 'react'
import styles from '@/app/dashboard.module.css'

import { RiDashboardFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


const Sidebar = () => {
   return (
      <section className={`flex flex-col gap-10 flex-[2rem] p-10 ${styles['box-shadow']}`}>
         <div className='flex items-center gap-3'>
            <RiDashboardFill size={25} />
            Dashboard
         </div>
         <div className='flex items-center gap-3'>
            <FaUserAlt size={25}/>
            User
         </div>
         <div className='flex items-center gap-3'>
            <SlCalender size={25}/>
            Calender
         </div>
      </section>
   )
}

export default Sidebar