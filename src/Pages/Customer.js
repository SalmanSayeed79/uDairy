import React,{useState,useEffect} from 'react'
import {db} from '../firebase'
import Buy from './components/buy.js'
import Cart from './components/cart'
import '../styles/customer.css'

export default function Customer() {
    const [name,setName]=useState('')
    const [sellerCode,setSellerCode]=useState(0)
    const [add,setAdd]=useState('')
    const [zone,setZone]=useState('Dhaka')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    let [s_code,setS_code]=useState(0)
    const [cart,setCart]=useState([])
    function order(e){
        e.preventDefault()
        cart.forEach(a=>{
            console.log(a.name)
            db.collection("production").doc("orders").collection("wholesale").doc(a.name+s_code+a.quan).set({
                name:a.name,
                quan: a.quan,
                add: add,
                s_code:"Customer",
            })
        })
        setCart([])
    }
    
    console.log(cart)
    return (
        <div id="c_main">
            <div className="shop_header">
                <h2>Udairy Online Shop</h2>
                <h5>Buy . Experince . Live</h5>
                <p>Best dairy products for your needs</p>
            </div>
            
            <div className="whole_shop">
           
            <div className="p_container">
                <p id="title">Milk</p>
                <div className="milk">
                    <Buy name="Regular Milk" image="milk1" des="Basic Milk" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Creamy Milk" image="milk2" des="Basic Milk made better for extra creaminess" cart={cart} setCart={setCart}/>
                    <Buy name="Sugar-free Milk" image="milk3" des="Milk that has no sugar" s_code={s_code}  cart={cart} setCart={setCart}/>
                </div>
                <p id="title">Milkshake</p>
                <div className="milkshake">
                    <Buy name="Cocoa Milkshake" image="shake1" des="Milkshake combined with cocoa collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Strawberry Milkshake" image="shake3" des="Milkshake combined with strawberry collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Vanilla Milkshake" image="shake4" des="Milkshake combined with vanilla collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Mango Milkshake" image="shake2" des="Milkshake combined with mango collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                </div>
                <p id="title">Butter</p>
                <div className="butter">
                    <Buy name="Butter" image="butter1" des="Basic Butter" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Salted Butter" image="butter2" des="Basic Butter but salted" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Un-salted Butter" image="butter3" des="Basic Butter but un-salted" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Light Butter" image="butter1" des="Basic Butter but lighter" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Ghee" image="butter3" des="Basic ghee" s_code={s_code} cart={cart} setCart={setCart}/>
                </div>
                <p id="title">Yogurt</p>
                <div className="yogurt">
                    <Buy name="Yogurt" image="yogurt1" des="Basic Yougrt" s_code={s_code} cart={cart} setCart={setCart}/>
                    <Buy name="Greek Yogurt" image="yogurt2" des="Basic Greek Yougrt" s_code={s_code} cart={cart} setCart={setCart}/>
                </div>
               
                
                
           
                
            </div>
        </div>
        <div className="whole_cart">
            <h3 onClick={()=>{
  
                let button=document.querySelector(".whole_cart h3")
                button.onclick=()=>{
                    document.querySelector(".whole_cart .p_container").classList.toggle("show")
                }
                
            }}>Cart</h3>
            <div className="p_container">
                {cart.map(a=>(<Cart name={a.name} quan={a.quan} />))}
                <div className="cart_buy">
                <button onClick={order}>Buy Now</button>
            </div>
            <p>Please enter your address</p>
            <div className="whole_code">
                <input type="text" name="code" onChange={a=>setAdd(a.target.value)}/>
                <button >Enter</button>
            </div>
            </div>
            

        </div>

        </div>
    )
}
