import React,{ useState} from 'react';


function Cards() {
    
    // const [indata,setIndata]=useState([])
    const [city,setCity]=useState("")
    const [inp,setdate]=useState("")
    const [price,setPrice]=useState("")

    const getData = async (e)=>{
        e.preventDefault();
        let result = await fetch("http://127.0.0.1:5000/getdata",{
            method:"post",
            headers:{
                'content-type':'application/json'
            }
        })

        result= await result.json()

        result.map((i)=>{

            if(i.city === city && i.date===inp){ 
                setPrice(i.price) 
            }
        })
    }

    const [hcity,setHcity]=useState("")
    const [hdate,setHdate]=useState("")
    const [hprice,setHprice]=useState("")

    const getHen= async (e)=>{
        e.preventDefault();
        let data = await fetch("http://127.0.0.1:5000/gethendata",{
            method:'post',
            headers:{
                'content-type':'application/json'
            }
        })

        data = await data.json();
        console.log(data)

        data.map((i)=>{

            if(i.city === hcity && i.date===hdate){ 
                setHprice(i.price) 
            }
        })
    }

    

   
    return (
        <div className="container row m-auto mt-3">
            
            <div class="card col mr-2 " style={{width: "18rem"}}>
                <img style={{height:"400px"}}  src="https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="egg" />
                <div class="card-body text-center">
                    <input onChange={(e)=>{setCity(e.target.value)}} type="text" className="form-control" placeholder="Mumbai"/>
                    <br/>
                    <input onChange={(e)=>{setdate(e.target.value)}}  type="text" className="form-control" placeholder="4-May"/>
                    <input onClick={getData} type="button" value="Enter"className='btn btn-dark rounded m-2'/>
                    <hr/>
                    <p> Price : {price}</p>
                </div>
            </div>

            <div class="card col ml-2 " style={{width: "18rem"}}>
                <img style={{height:"400px"}} src="https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top m-0" alt="egg" />
                <div class="card-body text-center">
                    <input onChange={(e)=>{setHcity(e.target.value)}} type="text" className="form-control" placeholder="Mumbai"/>
                    <br/>
                    <input onChange={(e)=>{setHdate(e.target.value)}} type="text" className="form-control" placeholder="4-May"/>
                    <input onClick={getHen}  type="button" value="Enter"className='btn btn-dark rounded m-2'/>
                    <hr/>
                    
                    <p>Price : {hprice}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards