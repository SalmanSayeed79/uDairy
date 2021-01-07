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
                            <a href='#sessionals' onClick={hideNavbar}><li>Process</li></a>
                            <a href='#questions' onClick={hideNavbar}><li>About</li></a>
                            <Link to='/admin'><a><li>Admin</li></a></Link>
                        
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
                    <h1>Process</h1>
                    <div id="body">
                        <p>Our aim was to ensure milk for everyone and this new technique has enabled us just to do that. So what is our secret? </p>
                        <p>Genes responsible for milk production are copied are copied from a cow and transferred to a single-celled microbe, microflora. Microflora are particularly good at producing animal proteins and have a long history of safe use in making ingredients in many foods we eat today. The microflora are given the genetic “blueprint” corresponding to whey and casein proteins, giving it the ability to produce real milk proteins — identical to what cows produce.</p>
                        <p>Now, as the flora grazes on simple plant-based inputs, it naturally produces milk proteins. To maximize the amount of protein that can be produced to achieve economies of scale (and for the most sustainable process), the flora is grown in large tanks at the optimal temperature, pH, and salinity. By following a strict cleaning regimen for the tanks and ensuring they’re a closed system isolated from the outside world, it is ensured that the proteins are the purest and safest milk proteins in the world.</p>
                        <p>The proteins have proven to be identical to the ones found in milk. They are Generally Recognized as Safe (GRAS) by the FDA and are some of the purest proteins in the food industry.</p>
                        <p>As a result, one won’t find the slightest trace of lactose, cholesterol, hormones, antibiotics, or anything else that typically comes along for the ride in cow’s milk.</p>
                        <p>The result is a protein like no other in the world. It is identical to milk protein, packing more nutrition per gram than anything else we know of, and performs exactly as one would expect in traditional dairy processes. And it is all 100% animal-free.</p>
                        <p>So we can all continue to enjoy the food we have loved for generations, in a kinder, greener world. That means your favorite butter, yogurt, cheese, milk and more made better - with UDairy.</p>
                    </div>
                    <img src={process} id="aboutimage" />
                    
                </div>
                <div className="questions" id="questions">
                    <h1>About Us</h1>
                    <div id="body">
                        <p>We are a group of enthusiastic individuals trying to revolutionise the dairy industry of the world. Dairy products have been consumed for generations, but relying on animals to make our food is no longer sustainable. The implications of animal farming are devastating for our planet.</p>
                        <p>We are in need for a food system that takes no more than what our planet can give.</p>
                        <p>If you have ever enjoyed a creamy brie or a sinfully dark chocolate, you have enjoyed the products of microbial fermentation. Here at UDairy, we use milk proteins obtained from the same process – essentially making dairy products with dairy proteins without the need for a single cow.</p>
                        <p>As dairy lovers, we took everything we love about milk, without the downsides. We are creating dairy products with no lactose, hormones, cholesterol or antibiotics, that require 5% of the resources and produce 1% of the waste compared to dairy products made using cow. </p>
                        <p>Moreover, this helps us to fight against global warming and climate change and make the world a better place to live in. </p>
                    </div>
                    <img src={AboutImg} id="aboutimage"/>
                </div>
           
                <div className="footer">
                    <h5>Copyright - 2020</h5>
                    <p>All rights reserved - Team Incognito</p>
                </div>
            </div>
        )




    
    
}
