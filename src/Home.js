import React from 'react'
import {Link} from 'react-router-dom'
import './styles/base.css'
import './styles/home.css'
import homeImg from './images/home-main.png'
import AboutImg from './images/about.png'
import process from './images/process.png'
import butter  from './images/butter.png'
import milk from './images/milk.png'
import cheese from './images/cheese.png'



export default function Home() {

  


    const showNavbar=()=>{
        const burger=document.querySelector("#burger")
        const drawer=document.querySelector(".navbar ul")
        burger.addEventListener('click',()=>{
            //console.log('clicked')
            drawer.classList.toggle('move-in')
      })

    }
    const hideNavbar=()=>{
        const drawer=document.querySelector(".navbar ul")
        drawer.classList.remove('move-in')
    }






        return (
            
            <div>
                <div className="home">
                    <div className="navbar" id="navbar">
                        <h1>UDairy</h1>
                        <ul>
                            <a href="#navbar" onClick={hideNavbar}><li>Home</li></a>
                            <a href='#courses' onClick={hideNavbar}><li>Products</li></a>
                            <a href='#sessionals' onClick={hideNavbar}><li>Goals</li></a>
                            <a href='#questions' onClick={hideNavbar}><li>About</li></a>
                            <Link to='/shop'><a><li>Shop</li></a></Link>
                        
                        </ul>
                        <i className="material-icons" id="burger" onClick={showNavbar} >menu</i>
                    </div>
                    
    
                    <div className="main-home" id="home">
                        <div className="home-title">
                            <h2>UDairy</h2>
                            <h3>Dairy for a better you</h3>
                        </div>
                        <img src={homeImg}/>
                        <a href='#navbar'><i class="material-icons">arrow_upward</i></a>
                    </div>
                    
                </div>
                <div className="courses" id="courses">
                    <h1>Products</h1>
                    <div className="milk">
                        
                        <img src={milk} />
                        <div className="text">
                            <h3>Milk Products</h3>
                                <ul>
                                    <li>Regular Milk</li>
                                    <li>Creamy Milk</li>
                                    <li>Sugar-free Milk</li>
                                </ul>
                            <h3>Milk Shakes</h3>
                                <ul>
                                    <li>Cocoa MilkShake</li>
                                    <li>Strawbery MilkShake</li>
                                    <li>Vanilla MilkShake</li>
                                    <li>Mango MilkShake</li>
                                </ul>
                        </div>
                    </div>
                    <div className="butter">
                        
                        <div className="text">
                            <h3>Butter</h3>
                                <ul>
                                    <li>Regular Butter</li>
                                    <li>Salted Butter</li>
                                    <li>Un-Salted Butter</li>
                                    <li>Light Butter</li>
                                </ul>
                        </div>
                        <img src={butter} />
                        
                    </div>
                    <div className="yogurt">
                        <img src={cheese} />
                        <div className="text">
                            <h3>Yogurt</h3>
                                <ul>
                                    <li>Non-fat Yogurt</li>
                                    <li>Skyr</li>
                                    <li>Greek Yogurt</li>
                                    <li>Synthetic Ghee</li>      
                                </ul>
                        </div>
                    </div>
                   
                    
                </div>
                <div className="sessionals" id="sessionals">
                    <h1>Our Goals</h1>
                    <div id="body">
                        <div className="malnut">
                            <h2>Saving children from malnutrition</h2>
                            <div className="des">
                                <img src={require('./images/goals/mal.png').default} alt=""/>
                                <p><span>9.4 Million</span> Children in Bangladesh suffer from malnutrition</p>
                            </div>
                        </div>
                        <div className="women">
                            <h2>Fighting Calcium deficiency</h2>
                            <div className="des">
                                <p><span>44% Women</span> suffer from Calcium deficiency</p>
                                <img src={require('./images/goals/woman.png').default} alt=""/>
                            </div>
                        </div>
                        <div className="lac">
                            <h2>Lactose Intolerance</h2>
                            <div className="des">
                                <img src={require('./images/goals/lact.png').default} alt=""/>
                                <p> In Bangladesh, death due to diarrhoea <span>500 per year</span></p>
                            </div>
                        </div>
                        <div className="dis">
                            <h2>Fighting diseases</h2>
                            <div className="des">
                                <img src={require('./images/goals/heart.png').default} alt=""/>
                                <img src={require('./images/goals/cancer.png').default} alt=""/>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="questions" id="questions">
                    <h1>About Us</h1>
                    <div id="body">
                        <h2>Meet Our Team</h2>
                        {/*<p>We are a group of enthusiastic individuals trying to revolutionise the dairy industry of the world. Dairy products have been consumed for generations, but relying on animals to make our food is no longer sustainable. The implications of animal farming are devastating for our planet.</p>
                        <p>We are in need for a food system that takes no more than what our planet can give.</p>
                        <p>If you have ever enjoyed a creamy brie or a sinfully dark chocolate, you have enjoyed the products of microbial fermentation. Here at UDairy, we use milk proteins obtained from the same process – essentially making dairy products with dairy proteins without the need for a single cow.</p>
                        <p>As dairy lovers, we took everything we love about milk, without the downsides. We are creating dairy products with no lactose, hormones, cholesterol or antibiotics, that require 5% of the resources and produce 1% of the waste compared to dairy products made using cow. </p>
                        <p>Moreover, this helps us to fight against global warming and climate change and make the world a better place to live in. </p>*/}
                        <div className="jaid" id="jaid">
                            <img src={require("./images/people/jaid.png").default}/>
                            <p>Jaid Monwar Chowdhury</p>
                            <p id="post">Chief Executive Officer (CEO)</p>
                        </div>
                        <div className="salman">
                            <img src={require("./images/people/salman.png").default}/>
                            <p>Salman Sayeed</p>
                            <p id="post">Chief Technology Officer (CTO)</p>
                        </div>
                        <div className="zarif">
                            <img src={require("./images/people/zarif.png").default}/>
                            <p>Zarif Ikram</p>
                            <p id="post">Chief Finance Officer (CFO)</p>
                        </div>
                        <div className="sunjukta">
                            <img src={require("./images/people/sunjukta.png").default}/>
                            <p>Professor Dr. Sunjukta Ahsan</p>
                            <p id="post">Advisor(GE Specialist)</p>
                        </div>
                    </div>
                    <div className="achievements">
                        <h2>Our achievements so far</h2>
                        <div className="buet">
                            <img src={require("./images/hult-buet.png").default} alt=""/>
                            <p>Hult prize at BUET</p>
                            <p id="prize">1st Runners Up</p>
                        </div>
                        <div className="regionals">
                            <img src={require("./images/hult.png").default} alt=""/>
                            <p>Hult prize Regionals</p>
                            <p id="prize">1st Runners Up</p>
                        </div>
                    
                    </div>
                    <div className="socials">
                        <h2>Follow Our Socials</h2>
                        <div className="facebook">
                            <a href="https://www.facebook.com/udairybd" target="_blank"><img src={require("./images/fb.png").default} alt=""/></a>
                            <p>Facebook</p>
                          
                        </div>
                        <div className="linked_in">
                            <a href="https://www.linkedin.com/company/udairy/?viewAsMember=true&fbclid=IwAR2ZIxigbmbJQvdYquP3A6yTb4Jj1tKXOGc4UWXB6xdlcf0YQ7_O7FDBh_o" target="_blank"><img src={require("./images/linkedin.png").default} alt=""/></a>
                            <p>Linked In</p>
                
                        </div>
                    
                    </div>
                   
                </div>
           
                <div className="footer">
                    <h5>Copyright - 2020</h5>
                    <p>All rights reserved - Team Incognito</p>
                </div>
            </div>
        )




    
    
}
