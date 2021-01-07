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
            <h1>Online Shop</h1>
            <p>Please enter your address</p>
            <div className="whole_code">
                <input type="text" name="code" onChange={a=>setAdd(a.target.value)}/>
                <button >Enter</button>
            </div>
            <div className="whole_shop">
            <h3 onClick={()=>{
                let button=document.querySelector("#c_main .whole_shop h3")
                button.onclick=()=>{
                    document.querySelector("#c_main .whole_shop .p_container").classList.toggle("show")
                }
                
            }}>Shop</h3>
            <div className="p_container">
                <Buy name="Regular Milk" des="Basic Milk" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Creamy Milk" des="Basic Milk made better for extra creaminess" cart={cart} setCart={setCart}/>
                <Buy name="Sugar-free Milk" des="Milk that has no sugar" s_code={s_code}  cart={cart} setCart={setCart}/>
                <Buy name="Cocoa Milkshake" des="Milkshake combined with cocoa collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Strawberry Milkshake" des="Milkshake combined with strawberry collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Vanilla Milkshake" des="Milkshake combined with vanilla collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Mango Milkshake" des="Milkshake combined with mango collected freshly from the farm" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Butter" des="Basic Butter" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Salted Butter" des="Basic Butter but salted" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Un-salted Butter" des="Basic Butter but un-salted" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Light Butter" des="Basic Butter but lighter" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Yogurt" des="Basic Yougrt" s_code={s_code} cart={cart} setCart={setCart}/>
                <Buy name="Greek Yogurt" des="Basic Greek Yougrt" s_code={s_code} cart={cart} setCart={setCart}/>
        
                <Buy name="Ghee" des="Basic ghee" s_code={s_code} cart={cart} setCart={setCart}/>
           
                
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
            </div>
            

        </div>

        </div>
    )
}
