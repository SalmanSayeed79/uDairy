import React,{useState} from 'react'
import '../../styles/shop.css'
import {db} from '../../firebase'

export default function Orders({name,quan,s_code,add}) {


    function delete_order(e){
        e.preventDefault()
        
    
        db.collection("production").doc("orders").collection("wholesale").doc(name+s_code+quan).delete()
  
        // //reloading the page
        // .then(()=>window.location.reload())
        //
     }
    
    return (
        <div id="shop_main">
        <div className="item">
            <h5>{name}</h5>
            <p>Quantity: {quan}</p>
            <p>Wholeseller ID: {s_code}</p>
            <p>Address: {add}</p>
            <button id="order_button" onClick={delete_order}>Done</button>

            
        {/*Picture*/}
        </div>
        

        </div>
    )}
    