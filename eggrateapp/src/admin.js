import React, { useState } from 'react'
import './admin.css'
function Admin() {

    const [price,setPrice] = useState("")
    const [city,setCity] = useState("")
    const [date,setDate] = useState("")

    const setdata = async ()=>{
        console.log(price,city,date)
        let result = await fetch("http://127.0.0.1:5000/admin_rate",{
            method:"post",
            body:JSON.stringify({city,date,price}),
            headers:{
                "content-type":"application/json"
            }
        })
        result = await result.json();
        console.log(result)
    }

  return (
    <div className='outer'>
        <div className='inner'>
            <ul type='none'>
                <header>
                    <h1>Enter Rate to today:---</h1>
                    <p>This is only for ADMIN :</p>
                </header>
                <footer>
                    <li>
                        <h5>City</h5>
                        <input onChange={(e)=>{setCity(e.target.value)}} type='text'/>
                    </li>
                    <li>
                        <h5>Date</h5>
                        <input onChange={(e)=>{setDate(e.target.value)}} type='text'/>
                    </li>
                    <li>
                        <h5>Price</h5>
                        <input onChange={(e)=>{setPrice(e.target.value)}} type='string'/>
                    </li>
                    <li>
                        <br/>
                        <button className='btn btn-dark btnn' onClick={setdata}>Enter</button>
                    </li>
                </footer>
            </ul>
        </div>
    </div>
  )
}

export default Admin