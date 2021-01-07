import React from 'react'
import '../../styles/items.css'

export default function P_dairy({name, bat, fac, m_bat, sold, quan, stat, dist,s_code,d_code}) {
    return (
        <div id="main">
        <div className="source">
            <h5>{name}</h5>
            <p>Batch No: {bat}</p>
            <p>Factory: {fac}</p>
            <p>Milk Batch: {m_bat}</p>
            
        </div>
        
        <div className="sold">
            <p>Sold To:({s_code}) {sold}</p>
            <p>Distributor:({d_code}) {dist}</p>
            <p>Quantity: {quan} galons</p>
            <p>Shipping Status: {stat}</p>
        </div>
        </div>
    )
}
