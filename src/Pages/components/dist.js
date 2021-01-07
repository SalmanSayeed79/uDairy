import React from 'react'
import '../../styles/items.css'
import {db} from '../../firebase'

export default function Dist({name, bat, fac, m_bat, sold, quan, stat, dist,s_code,d_code}) {
    
    function cngStat(e){
        e.preventDefault()
        
        if(!m_bat){
            db.collection("production").doc("items").collection("milk").doc(name+bat).set({
                name:name,
                bat: bat,
                fac:fac,
                sold:sold,
                quan:quan,
                stat:"Shipped",
                dist:dist,
                s_code:s_code,
                d_code:d_code,
            })
            alert("ok")
        }
        else{
            db.collection("production").doc("items").collection("dairy").doc(name+bat).set({
                name:name,
                bat: bat,
                m_bat:m_bat,
                fac:fac,
                sold:sold,
                quan:quan,
                stat:"Shipped",
                dist:dist,
                s_code:s_code,
                d_code:d_code,
            })
        }
        
        
        // //reloading the page
        // .then(()=>window.location.reload())
        //
     }
    
    
    
    
    return (
        <div id="dist_main">
        <div className="source">
            <h5>{name}</h5>
            <p>Batch No: {bat}</p>
            <p>Factory: {fac}</p>
        </div>
        
        <div className="sold">
            <p>Sold To:({s_code}) {sold}</p>
            <p>Quantity: {quan} galons</p>
            <p>Shipping Status: {stat}</p>
        </div>
        
        <div className="buttons">
            <button onClick={(e)=>cngStat(e)}>Shipped</button>
        </div>
        
        

        </div>
    )}
    