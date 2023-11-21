import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

    const [show , setShow]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{         //for making banner background black while scrolling //2.ntan call cheyandath
        if(window.scrollY>600){                    //banner size is 600  //y direction
                   setShow(true)
        }
        else{
            setShow(false)
        }
    })               

  })

  return (
    <div className={` ${show && 'nav-bg'} nav`}>
        <img width={'160px'}src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="netflix logo" />
    </div>
  )
}

export default Nav