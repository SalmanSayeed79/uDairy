import React,{useState,useEffect} from 'react'
import {db} from '../firebase'
import Distributor from './components/distributor'
import '../styles/retail.css'
export default function Retail() {
    const [sellers,setSellers]=useState([])
    const [crntZone,setCrntZone]=useState("All")
    
    
    function getSellers(){
        db.collection("production").doc("sellers").collection("sellers").get()
            .then(res=>{
                    res.forEach(a=>{
                        console.log(a.data())
                        if(crntZone=="All"){
                            setSellers(prevItems=>[...prevItems,a.data()])
                        }else{
                            if(a.data().zone==crntZone){
                                
                                setSellers(prevItems=>[...prevItems,a.data()])
                            }
                        }
 
                    })
            })
    }
    useEffect(()=>{
        getSellers()
    },[crntZone])
    
    return (
        <div id="ret_main">
            <h1>Wholesellers' Info</h1>
            <p>Enter Your Desired Zone</p>
            <div className="ret_code">
            <select id="zone" onChange={a=>{
                setSellers([])
                setCrntZone(a.target.value)
            }}>
                        <option value="All">All</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                    </select>
                <button>Enter</button>
            </div>
        <div className="sellers">
            <h3>Our Sellers</h3>
            <div className="p_container">
                
                {sellers.map((a)=>{
                    return (<Distributor name={a.name} add={a.add} zone={a.zone} phone={a.phone} email={a.email} />)
                })}
            </div>
        </div>

        </div>
    )
}
