import React,{useState,useEffect} from 'react'
import {db} from '../firebase'
import Dist from './components/dist'
import P_dairy from './components/P_dairy'
import '../styles/distribution.css'



export default function Distribution() {
    let [d_code,setD_code]=useState(0)
    let [m_items,setM_items]=useState([])
    let [d_items,setD_items]=useState([])
    let [pending,setPending]=useState([])
    let [shipped,setShipped]=useState([])
    useEffect(()=>{
        getMilk()
        getDairy()
    },[d_code])
    function getMilk(){
        db.collection("production").doc("items").collection("milk").get()
            .then(res=>{
                res.forEach(a=>{
                    console.log(a.data().d_code)
                    console.log("----")
                    console.log(d_code)
                    if(a.data().d_code==d_code){
                        console.log(a.data())
                        setM_items(prevItems=>[...prevItems,a.data()])
                        if(a.data().stat=="Pending"){setPending(prev=>[...prev,a.data()])}
                        if(a.data().stat=="Shipped"){setShipped(prev=>[...prev,a.data()])}
                    }
                    
                })
            })
            
    }
    function getDairy(){
        db.collection("production").doc("items").collection("dairy").get()
            .then(res=>{
                res.forEach(a=>{
                    if(a.data().d_code==d_code){
                        console.log(a.data())
                        setD_items(prevItems=>[...prevItems,a.data()])
                        if(a.data().stat=="Pending"){setPending(prev=>[...prev,a.data()])}
                        if(a.data().stat=="Shipped"){setShipped(prev=>[...prev,a.data()])}
                    }
                })
            })
            
    }




    return (
        <div id="d_main">
            <h1>Distribution</h1>
            <p>Please enter your distributor code</p>
            <div className="dist_code">
                <input type="number" name="code"/>
                <button onClick={()=>{
                    setD_code(document.querySelector(".dist_code input").value)}}>Enter</button>
            </div>


            <div className="pending">
            <h3>Pending</h3>
            <div className="p_container">
                {pending.map((a)=>{
                    return (<Dist name={a.name} bat={a.bat} m_bat={a.m_bat} fac={a.fac} sold={a.sold} quan={a.quan} stat={a.stat} dist={a.dist} s_code={a.s_code} d_code={a.d_code}/>)
                })}
            </div>
        </div>
        <div className="shipped">
            <h3 onClick={()=>{
                let button=document.querySelector(".shipped h3")
                button.onclick=()=>{
                    document.querySelector(".shipped .p_container").classList.toggle("show")
                }
                
            }}>Shipped</h3>
            <div className="p_container">
                {shipped.map((a)=>{
                    return (<Dist name={a.name} m_bat={a.m_bat} bat={a.bat} fac={a.fac} sold={a.sold} quan={a.quan} stat={a.stat} s_code={a.s_code} d_code={a.d_code}/>)
                })}
            </div>
        </div>
            
        </div>
    )
}
