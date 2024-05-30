import React from 'react'
import Header from '../../components/layout/Header'
import top from '../../assets/ourmenu/top3.jpeg'
import '../../styles/menu.css'

const OurMenu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu_first">
            <Header />
            <img src={top} alt="" />
        </div>
        <div className="menu_second">lorem400</div>
      </div>
    </>
  )
}

export default OurMenu
