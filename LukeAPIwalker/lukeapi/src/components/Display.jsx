import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {
    const {category, id} =useParams()
    const [apiData,setApiData]=useState({})

    useEffect(()=>{
        axios.get('https://swapi.dev/api/'+category+'/'+id)
        .then(response =>{
            console.log(response.data)
            setApiData(response.data)
        })
    },[category,id])


  return  (
    <div>
        hi
        { <ul>
            {Object.keys(apiData).map((key,i)=>
            <li key={i}><h4>{key}:</h4>{apiData[key]} </li>
         )
            }
        </ul> }
   
    </div>
    )
  
}

export default Display
