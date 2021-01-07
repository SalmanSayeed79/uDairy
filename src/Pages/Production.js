import React,{useState,useEffect} from 'react'
import '../styles/production.css'
import P_milk from './components/P_milk'
import P_dairy from './components/P_dairy'
import Orders from './components/orders'
import {db} from '../firebase'







export default function Production() {
    let [m_items,setM_items]=useState([])
    let [d_items,setD_items]=useState([])
    let [orders,setOrders]=useState([])
    useEffect(()=>{
        getMilk()
        getDairy()
        getOrders()
    },[])
    function getMilk(){
        db.collection("production").doc("items").collection("milk").get()
            .then(res=>{
                res.forEach(a=>{
                    //console.log(a.data())
                    setM_items(prevItems=>[...prevItems,a.data()])
                })
            })
            
    }
    function getOrders(){
        db.collection("production").doc("orders").collection("wholesale").get()
            .then(res=>[
                res.forEach(a=>{
                    setOrders(prev=>[...prev,a.data()])
                })
            ])
            .then(()=>{
                console.log(orders)
            })
    }
    function getDairy(){
        db.collection("production").doc("items").collection("dairy").get()
            .then(res=>{
                res.forEach(a=>{
                    //console.log(a.data())
                    setD_items(prevItems=>[...prevItems,a.data()])
                })
            })
            
    }
    const addMilk=(e)=>{
        e.preventDefault()
        let form=document.querySelector("#add_item")
        const name=(form.name.value)
        const bat=(form.bat.value)
        const m_bat=(form.m_bat.value)
        const fac=(form.fac.value)
        const sold=(form.sold.value)
        const quan=(form.quan.value)
        const stat=(form.stat.value)
        const dist=(form.dist.value)
        const s_code=(form.s_code.value)
        const d_code=(form.d_code.value)
        if(!name||!bat||!fac||!sold||!quan||!stat){
            alert("Enter elements correctly")
        }else{
        db.collection("production").doc("items").collection("milk").doc(name+bat).set({
            name:name,
            bat: bat,
            fac:fac,
            sold:sold,
            quan:quan,
            stat:stat,
            dist:dist,
            s_code:s_code,
            d_code:d_code,
        })
        
        //reloading the page
        .then(()=>window.location.reload())
        }
    }
    function deleteMilk(){

    }
    function addDairy(e){
        e.preventDefault()
        let form=document.querySelector("#add_item")
        const name=(form.name.value)
        const bat=(form.bat.value)
        const m_bat=(form.m_bat.value)
        const fac=(form.fac.value)
        const sold=(form.sold.value)
        const quan=(form.quan.value)
        const stat=(form.stat.value)
        const dist=(form.dist.value)
        const s_code=(form.s_code.value)
        const d_code=(form.d_code.value)
        if(!name||!bat||!fac||!sold||!quan||!stat){
            alert("Enter elements correctly")
        }else{
        db.collection("production").doc("items").collection("dairy").doc(name+bat).set({
            name:name,
            bat: bat,
            m_bat:m_bat,
            fac:fac,
            sold:sold,
            quan:quan,
            stat:stat,
            dist:dist,
            s_code:s_code,
            d_code:d_code,
        })
        
        //reloading the page
        .then(()=>window.location.reload())
        }
    }
    function deleteDairy(){

    }
    return (
        <div className='production_full'>
            <h1>Production</h1>
            {/*<div className="p_sources">
                <h3 onClick={()=>{
                    let button=document.querySelector(".p_sources h3")
                    button.onclick=()=>{
                        document.querySelector(".p_sources .p_container").classList.toggle("show")
                    }
                    
                }}>Microbes and Ingredients</h3>
                <div className="p_container">
                    
                </div>
            </div>*/}
            <div className="p_milk">
                <h3 onClick={()=>{
                    let button=document.querySelector(".p_milk h3")
                    button.onclick=()=>{
                        document.querySelector(".p_milk .p_container").classList.toggle("show")
                    }
                    
                }} >Milk Products</h3>
                <div className="p_container">
                    {m_items.map((a)=>{
                        return (<P_milk name={a.name} bat={a.bat} fac={a.fac} sold={a.sold} quan={a.quan} stat={a.stat} dist={a.dist} s_code={a.s_code} d_code={a.d_code}/>)
                    })}
                </div>
            </div>
            <div className="p_dairy">
                <h3 onClick={()=>{
                    let button=document.querySelector(".p_dairy h3")
                    button.onclick=()=>{                        
                        document.querySelector(".p_dairy .p_container").classList.toggle("show")
                    }
                    
                }}>Dairy Products</h3>
                <div className="p_container">
                    {d_items.map((a)=>{
                        return (<P_dairy name={a.name} m_bat={a.m_bat} bat={a.bat} fac={a.fac} sold={a.sold} quan={a.quan} stat={a.stat} s_code={a.s_code} d_code={a.d_code}/>)
                    })}
                </div>
            </div>
            <div className="p_orders">
                <h3 onClick={()=>{
                    let button=document.querySelector(".p_orders h3")
                    button.onclick=()=>{
                        document.querySelector(".p_orders .p_container").classList.toggle("show")
                    }
                    
                }}>Orders</h3>
                <div className="p_container">
                    {orders.map((a)=>{
                        return (<Orders name={a.name} quan={a.quan} s_code={a.s_code} add={a.add}/>)
                    })}
                </div>
            </div>
            <div className="add">
                <h4 onClick={()=>{
                    let button=document.querySelector(".add h4")
                    button.onclick=()=>{
                        document.querySelector(".add #add_item").classList.toggle("show")
                    }
                    
                }}>Add new item</h4>
                <form id="add_item">
                    <input type="text" name="name" placeholder="Product Name"/>
                    <input type="number" name="bat" placeholder="Batch No"/>
                    <input type="text" name="fac" placeholder="Factory"/>
                    <input type="number" name="m_bat" placeholder="Milk Batch No"/>
                    <input type="text" name="sold" placeholder="Sold To"/>  
                    <input type="number" name="s_code" placeholder="S_Code"/>  
                    <input type="text" name="dist" placeholder="Distributor"/>  
                    <input type="Number" name="d_code" placeholder="D_Code"/>  
                    <input type="number" name="quan" placeholder="Quantity"/>                  
                    
                    <select id="stat">
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        
                    </select>
                    <div className="form_buttons">
                        <button onClick={(e)=>addMilk(e)}>Add Milk Item</button>
                        <button onClick={(e)=>addDairy(e)}>Add Dairy Item</button> 
                    </div>
                                      
                </form>
                
            </div>

        </div>
    )
}
