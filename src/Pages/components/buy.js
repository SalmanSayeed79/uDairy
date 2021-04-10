import React,{useState} from 'react'
import '../../styles/shop.css'
import {db} from '../../firebase'

export default function Dist({name,des,s_code,cart,setCart,image}) {
    const [quantity,setQuantity]=useState(1)

    function order(e){
        e.preventDefault()
        
    
            // db.collection("production").doc("orders").collection("wholesale").doc(name+s_code+quan).set({
            //     name:name,
            //     quan: quan,
            //     s_code: s_code,
            // })
            // alert("ok")
        // //reloading the page
        // .then(()=>window.location.reload())
        //
     }
    console.log(image)
    return (
        <div id="shop_main">
        <div className="item">
            <h5>{name}</h5>
            <div>
                <img src={require(`../../images/products/${image}.jpg`).default} alt='' width={300}/>
                
            </div>
            
            <p>{des}</p>
            <form id="item_form">
                <label>Quantity</label>
                <input type="number" name="quan" placeholder="Quantity" onChange={a=>{
                    let number =parseInt(a.target.value)
                    setQuantity(number)
                }} />
            </form>
            
        {/*Picture*/}
        </div>
        <div className="buttons">
            <button onClick={(e)=>{
                e.preventDefault()
                let quan=1
                quan=document.querySelector("#shop_main .item #item_form").quan.value
                if(!quan) {quan=1}
                else{
                    quan=parseInt(document.querySelector("#shop_main .item #item_form").quan.value)
                    console.log("quna")
                    console.log(quantity)
                    //setQuantity(quan)
                }
                setCart(prev=>[...prev,{name:name,quan:quantity,s_code:s_code}])
           
            }}>Buy</button>
        </div>
        
        

        </div>
    )}
    