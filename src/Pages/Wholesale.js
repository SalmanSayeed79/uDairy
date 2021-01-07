import React,{useState} from 'react'
import Buy from './components/buy'
import Cart from './components/cart'
import '../styles/wholesale.css'
import {db} from '../firebase'

export default function Wholesale() {
    const [name,setName]=useState('')
    const [sellerCode,setSellerCode]=useState(0)
    const [add,setAdd]=useState('')
    const [zone,setZone]=useState('Dhaka')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    function order(e){
        e.preventDefault()
        cart.forEach(a=>{
            console.log(a.name)
            db.collection("production").doc("orders").collection("wholesale").doc(a.name+s_code+a.quan).set({
                name:a.name,
                quan: a.quan,
                s_code: s_code,
                add:"Distributor Address",
            })
        })
        setCart([])
    }
    function register(e){
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(add)
        console.log(zone)
        console.log(number)
        console.log(sellerCode)

        db.collection("production").doc("sellers").collection("sellers").doc(name+s_code).set({
            name:name,
            add:add,
            zone:zone,
            phone:number,
            email:email,
            s_code: sellerCode,
        })
    }
    let [s_code,setS_code]=useState(0)
    const [cart,setCart]=useState([])
    console.log(cart)
    return (
        <div id="w_main">
            <h1>Wholesale</h1>
            <p>Please enter your seller code</p>
            <div className="whole_code">
                <input type="number" name="code" onChange={a=>setS_code(a.target.value)}/>
                <button >Enter</button>
            </div>
            <div className="register">
                <h3 onClick={()=>{
                    let button=document.querySelector(".register h3")
                    button.onclick=()=>{
                        document.querySelector(".register .p_container").classList.toggle("show")
                    }
                    
                }}>Register</h3>
                <div className="p_container">
                    <form>
                        <input type="text" name="name" placeholder="Name" onChange={a=>setName(a.target.value)}/>
                        <input type="number" name="s_code" placeholder="Seller Code" onChange={a=>setSellerCode(a.target.value)}/>
                        <input type="text" name="address" placeholder="Address" onChange={a=>setAdd(a.target.value)}/>
                        <input type="text" name="email" placeholder="E-mail" onChange={a=>setEmail(a.target.value)}/>
                        <input type="text" name="phone" placeholder="Phone" onChange={a=>setNumber(a.target.value)}/>
                        <select id="zone" onChange={a=>setZone(a.target.value)}>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Khulna">Khulna</option>
                        
                        </select>
                        <button onClick={(e)=>register(e)}> Submit </button>
                    </form>
                
                </div>
            </div>

            <div className="whole_shop">
            <h3 onClick={()=>{
                let button=document.querySelector(".whole_shop h3")
                button.onclick=()=>{
                    document.querySelector(".whole_shop .p_container").classList.toggle("show")
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
