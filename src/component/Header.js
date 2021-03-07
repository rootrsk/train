import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/logo.svg'
import '../css/header.css'
function Header() {
    return (
        <div className='head'>
            <div className='header'>

                <ul>
                <li><img src={img1}/></li>   
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                </ul>

                <div className='navbtn'>
                    <button className='btn1'>
                        Contact Sales
                    </button>
                    <button className='btn2'>
                        SCHEDULE DEMO
                    </button>
                </div>
                {/* <div className='lgcnt'>
                    <div> Home</div>
                    <div> Home</div>
                    <div> Home</div>
                    <div> Home</div>

                   
                   
                </div>
                <div className='navbtn'>
                        
                </div> */}
                {/* <Link to='/product'>Product</Link>
                <Link to='/about'>About Us</Link>
                <Link>contact sales</Link> */}
            </div>
        </div>
    )
}

export default Header
