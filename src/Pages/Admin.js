import React from 'react'
import '../styles/admin.css'
import {Link} from 'react-router-dom'

import Production from './Production'
import Distribution from './Distribution'
import Wholesale from './Wholesale'
import Retail from './Retail'
import Customer from './Customer'



export default function Admin() {
    return (
        <div className="full">
            <h1>UDairy Administration</h1>
            <div className="divisions">
                <div className="production">
                    <h3>Production Zone</h3>
                    <p>The team importing the materials, curating the local ingredients and making the end product</p>
                    <Link to='admin/production'><button>Enter</button></Link>
                </div>
                <div className="distribution">
                    <h3>Distribution Zone</h3>
                    <p>The team working to supply the end products from the factories to the warehouses and then to our partner entities</p>
                    <Link to='admin/distribution'><button>Enter</button></Link>
                
                </div>
                <div className="wholesale">
                    <h3>Wholesale Zone</h3>
                    <p>A page specifically designed for our wholesale customers and the products that are available to that location</p>
                    <Link to='admin/wholesale'><button>Enter</button></Link>
                </div>
                <div className="retailer">
                    <h3>WholeSeller Info</h3>
                    <p>A page for our retailers to connect with our wholesale customers and get their products at the best possible price</p>
                    <Link to='admin/retail'><button>Enter</button></Link>
                
                </div>
                <div className="customer">
                    <h3>Buy Online</h3>
                    <p>Online shop of UMilk. Buy directly from us and get your desired products at the best possible price</p>
                    <Link to='admin/customer'><button>Enter</button></Link>
                </div>
            </div>
        </div>
    )
}
