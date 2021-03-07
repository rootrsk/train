import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/PIC.png'
import img2 from '../images/maxresdefault.png'
import img3 from '../images/Group1.svg'
import img4 from '../images/Group2.svg'
import img5 from '../images/Group3.svg'
import img6 from '../images/Group4.svg'
import img7 from '../images/Group5.svg'
import img8 from '../images/Group6.svg'
import img9 from '../images/Group9.svg'
import img10 from '../images/Star1.svg'
import main from '../images/main3.png'
import playIcon from '../images/playbtn.svg'
import amazon from '../images/amazon.svg'
import '../css/main.css'

function Main() {
    return (
        <div >
            <div>
                <p className='mainclass'>Redefining the way you communicate.</p>
                <p className = "tag1"> Speak English in short fun dialogues.Get instant feedback
                    from proprietary artificial intelligence technology. 
                </p>
            </div>
            
            <div className='main_btn-div'>
                <button className='btn_1'><span className='circle'></span><span>SCHEDULE DEMO</span></button>
                <button className='btn_2'><span className='circle'></span><span>CONTACT SALES</span></button>
            </div>

            <div className='main-img-wrapper'>
                <img className='img1' src={main}/>
            </div>

            <div className='main-footer_wrapper'>
                <div className='play-btn'>
                    <button><img src={playIcon} className='play_icon' /> Watch Demo </button>
                </div>
                <div className='main-footer_header'>
                    <h2>Trusted by top universties around the world </h2>
                </div>
                <div className='main_logos'>
                    <img src={amazon}  className='amazon' alt='amazon.com'/>
                    <img src={amazon}  className='amazon' alt='amazon.com'/>
                    <img src={amazon}  className='amazon' alt='amazon.com'/>
                    <img src={amazon}  className='amazon' alt='amazon.com'/>
                </div>
            </div>


            <div className='section_5'>   
                <div className='section_5-div1'> 
                    <h1>Focus on your sales, not accent!</h1>
                    <h4>Let our trained models ease your work. Introducing AI based solutions.<br/>
                        See the impossible become reality.</h4>
                </div>
                <div className='section_5-div_2'> 
                    <img src={img9} alt='intrcu' />
                    <h1>Introducing Dhwani</h1>
                    <h3>The goal of dhwani is to simplify the<br/>
                        pain points of a solution center.</h3>
                </div>
            </div>

            <div className='section_6'>
                <div className='section_6-div1'>
                    <div className='box1'>
                        
                    </div>
                    <div className='section_6-text'>
                            <p className='section_header'>AI Voice Accent Changer</p>
                            <p className='section_text'>Change you accent on the go. Change you 
                            accent on the go. Change you accent on the go. Change you accent on the go. 
                            </p>
                            <Link to='#' className='l1'>LEARN MORE &#8594;</Link>
                    </div>    
                </div>

                <div className='section_6-div1'>
                    <div className='box2'>
                        
                    </div>
                    <div className='section_6-text'>
                            <p className='section_header'>AI Voice Accent Changer</p>
                            <p className='section_text'>Change you accent on the go. Change you 
                                accent on the go. Change you accent on the go.Change you accent on the go.
                            </p>
                            <Link to='/' className='l2'>LEARN MORE &#8594;</Link>
                    </div>    
                </div>
            </div>
            <div className='section_7'>
                <h1 className='section_header'>A possibility explored like never before.<br/><br />
                   More that 30 integrated features.
                </h1>
                <div className='sometxt'>
                    {/* <div> */}
                        <div className='dotcnt'><span className='dot'></span><span>AI Agent (Real time)</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>Customizable Dashboards</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>AI Voice Accent Changer</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>SAAS base solution</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>Insights based dashboards</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>Insights based dashboards</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>One-click installation</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>15 min installation time</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>AI Voice Accent Changer</span></div>
                    {/* </div> */}
                    {/* <div>
                        <div className='dotcnt'><span className='dot'></span><span>SAAS base solution</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>Insights based dashboards</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>Insights based dashboards</span></div>
                    </div>
                    <div>
                        <div className='dotcnt'><span className='dot'></span><span>One-click installation</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>15 min installation time</span></div>
                        <div className='dotcnt'><span className='dot'></span><span>AI Voice Accent Changer</span></div>
                    </div> */}
                </div>
                <div>
                    <button className='dbtn'>SCHEDULE A DEMO</button>
                </div>
            </div>

                
            
            

            {/* <div className='div'>
                <h1>Integration with the tools you use</h1>
                <h3>Dhwani can easily connect with the tools your<br/>
                    team use to communicate with client.s
                </h3>
            </div> */}
            <div className='div'>
            <h1>Why Dhwani is #1 go to solution</h1>
                <h3>Dhwani can easily connect with the tools your <br/>
                    team use to communicate with client.s
                </h3>
            </div>


            {/* <div class='icons-container1'> */}
                {/* <div className='content'> */}
                    {/* <img src={img3}/>  */}
                    {/* <h3 className='ic_txt'>35% increase in conversation</h3> */}
                    {/* <p className='ic_txt2'> */}
                        {/* It is our continued effort to bring<br/>about ideas solely for the benefit of<br/> mankind. */}
                    {/* </p> */}
                {/* </div> */}
                {/* <div className='content'> */}
                    {/* <img src={img4}/> */}
                    {/* <h3 className='ic_txt'> */}
                        {/* 20% increase in rebound-sales */}
                    {/* </h3> */}
                    {/* <p className='ic_txt2'>  */}
                        {/* {/* We have always maintained a <br/> relation of faith and trust with our<br/> clients, never letting them down. */} 
                    {/* </p> */}
                {/* </div> */}
                {/* <div className='content'> */}
                    {/* <img src={img5}/> */}
                    {/* <h3 className='ic_txt'> */}
                        {/* 50% cost reduction in trainin */}
                    {/* </h3> */}
                    {/* <p className='ic_txt2'> */}
                        {/* Our current goal being to change<br/> the channels of communications,<br/> making interaction a ton easier. */}
                    {/* </p> */}
                {/* </div> */}
            {/* </div> */}
            <div class='icons-container1'>
                <div className='content'>
                        <img src={img3}/> 
                        <h3 className='ic_txt'>35% increase in conversation</h3>
                        <p className='ic_txt2'>
                            It is our continued effort to bring about ideas solely for the benefit of mankind.
                        </p>
                    </div>
                    <div className='content'>
                        <img src={img4}/>
                        <h3 className='ic_txt'>
                            20% increase in rebound-sales
                        </h3>
                        <p className='ic_txt2'> 
                            We have always maintained a  relation of faith and trust with our clients, never letting them down.
                        </p>
                    </div>
                    <div className='content'>
                        <img src={img5}/>
                        <h3 className='ic_txt'>
                            50% cost reduction in trainin
                        </h3>
                        <p className='ic_txt2'>
                            Our current goal being to change the channels of communications, making interaction a ton easier.
                        </p>
                    </div>
            <div className='content'>
                    <img src={img6}/> 
                    <h3 className='ic_txt'>10% TAT reduction for 
                        new campaigns</h3>
                        <p className='ic_txt2'>
                        It is our continued effort to bringabout ideas solely for the benefit of mankind.
                        </p>
                    </div>
                    <div className='content'>
                        <img src={img7}/>
                        <h3 className='ic_txt'>
                            5% increase in new market entry
                        </h3>
                        <p className='ic_txt2'> 
                            We have always maintained a  relation of faith and trust with our clients, never letting them down.
                        </p>
                    </div>
                    <div className='content'>
                        <img src={img8}/>
                        <h3 className='ic_txt'>
                            Start focsing on increasing sales more
                        </h3>
                        <p className='ic_txt2'></p>
                    </div>
            </div>

            <div className='div'>
                <h1 className='ic_txt' >Don’t just take our word for it - here’s what our users have to say</h1>
                <p className='ic_txt2'>Proudly showcasing our appreciated efforts through <br/>
                    a few words from our worthy clients.</p>
            </div>
                   

            <div className='container2'>
                
                <div className='black'>
                    <div class="arrow-right"></div> 
                        <div className='top_star_circle'>
                            <div className='starcontainer'>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                            </div>
                            <div>
                            <div className='round'></div>
                            </div>
                        </div>
                    <p  className='ic_txt2'>The enterprise dhwanii solutions<br/>
                     not only increased our outbound<br/>
                      sales but also solved a huge<br/>
                       problem of accent change on <br/>the go and training new <br/>
                       members. Waiting for there other<br/>
                        solutions in the pipeline...</p>
                </div>
                
                <div className='black'>
                    <div class="arrow-right"></div> 

                    <div className='top_star_circle'>
                            <div className='starcontainer'>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                            </div>
                            <div>
                            <div className='round'></div>
                            </div>
                        </div>
                    <p  className='ic_txt2'>The enterprise dhwanii solutions<br/>
                     not only increased our outbound<br/>
                      sales but also solved a huge<br/>
                       problem of accent change on <br/>the go and training new <br/>
                       members. Waiting for there other<br/>
                        solutions in the pipeline...</p>

                </div>
                <div className='black'>
                    <div class="arrow-right"></div> 

                    <div className='top_star_circle'>
                            <div className='starcontainer'>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                            </div>
                            <div>
                            <div className='round'></div>
                            </div>
                        </div>
                    <p  className='ic_txt2'>The enterprise dhwanii solutions<br/>
                     not only increased our outbound<br/>
                      sales but also solved a huge<br/>
                       problem of accent change on <br/>the go and training new <br/>
                       members. Waiting for there other<br/>
                        solutions in the pipeline...</p>


                </div>
            </div>

            {/* <div className='downblack'>
                <div className='down1'>
                    <div className='smround'>
                    </div>
                    <div className='downtxt'>
                        <h3>Jack</h3>
                        <p className='dp'>Tech support manager@VRS solutions</p>
                    </div>
                </div>
                <div className='down1'>
                    <div className='smround'>
                    </div>
                    <div className='downtxt'>
                        <h3>Jack</h3>
                        <p className='dp' >Tech support manager@VRS solutions</p>
                    </div>
                </div>
                <div className='down1'>
                    <div className='smround'>
                    </div>
                    <div className='downtxt'>
                        <h3>Jack</h3>
                        <p className='dp'>Tech support manager@VRS solutions</p>
                    </div>
                </div>  
    

            </div> */}


        </div>
    )
}

export default Main
