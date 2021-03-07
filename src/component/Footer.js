import React from 'react'
import img1 from '../images/footimg.svg'
import img2 from '../images/Rectangle.svg'
import img3 from '../images/github.svg'
import img4 from '../images/Line2.svg'
import img5 from '../images/Line3.svg'
import img6 from '../images/Line4.svg'
import sexy from '../images/sext.png'
// import facebook from  '../images/Vector-2.png'
// import github from '../images/Vector-1.png'
import linePng from '../images/Group 23.png'
import '../css/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='imgcontainer' >
                <div className='image-wrapper'>
                    <img src={img1} className='wrapped_image'/>
                    <img src={sexy} className='wrapped_image-sexy'/>
                </div>
                <div className='txtcontainer'>
                    <div className='text'>
                        <h2>Join the waiting list for the beta.</h2>
                        <p className='cnttxt'>
                            Get latest product updates, resources, curated content delivered straight your inbox.Be the first to learn the news
                            about new dfeatures and product updates
                      </p>
                    </div>

                    <div className='boxinput'>
                        
                            <input 
                            type='text' 
                            placeholder='Enter Your Email  ...'
                            className='text-input'
                        /> <input className='inputbutton' type='button' value='subscribe'/>
                        
                        
                    </div>
                </div>
            </div>
            
            <div className='endcont'>

                <img src={img2} className='footer-logo'/>
                <div className='social-logos' > 
                    <i className="fa fa-facebook" style={{marginLeft:'0px'}}></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <i className='fa fa-youtube-play' />
                </div>
                {/* <h1 className='term-text'>2021 Dynopii | Privacy Policy | Terms</h1> */}
            </div>
            

            <div className='end'>
                {/* <img className='l1' src={img4}/>
                <img className='l2' src={img5}/>
                <img className='l3' src={img6}/> */}
                <p className='term-text'>2021 Dynopii | Privacy Policy | Terms</p>
                <img src={linePng} alt="" className='linepng'/>
            </div>
            <div style={{width:'100%',height:'200px'}}></div>
        </div>
    )
}

export default Footer
