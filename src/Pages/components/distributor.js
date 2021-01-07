import React,{useState} from 'react'
import '../../styles/shop.css'
import {db} from '../../firebase'

export default function Distributor({name,add,zone,phone,email}) {


    function order(e){
        e.preventDefault()
        
    
            // db.collection("production").doc("orders").collection("wholesale").doc(name+s_code+quan).set({
            //     name:name,
            //     quan: quan,
            //     s_code: s_code,
            // })
            alert("ok")
        // //reloading the page
        // .then(()=>window.location.reload())
        //
     }
    
    return (
        <div id="shop_main">
        <div className="item">
            <h5>{name}</h5>
            <p>Address: {add}, {zone}</p>
            <p>Phone Number: {phone}</p>
            <p>E-mail: {email}</p>
           
            
            
            
        {/*Picture*/}
        </div>
        

        </div>
    )}
    