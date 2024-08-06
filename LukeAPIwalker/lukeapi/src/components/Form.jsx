import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const [categories, setCategories] = useState([])
    const [id, setId] = useState(1)
    const [category, setCategory] = useState('people')
    const [apiData, setApiData] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://swapi.dev/api/')
        .then(response => {
            setCategories(Object.keys(response.data))
        })
    },[])

    useEffect(()=>{
        axios.get('https://swapi.dev/api/'+category+'/'+id)
        .then(response => {
            console.log(response.data)
            setApiData(response.data)
        })
    },[category,id])

    const handleId = (e)=>{
        setId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // props.setResult(apiData)
        navigate(`${category}/${id}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="dropdown"> Search for:</label>
        <select name="dropdown" onChange={(e)=>setCategory(e.target.value)}>
            {categories.map((category, i)=>
                <option key={i} value={category}>{category}</option>
            )
            }

        </select>

        <label htmlFor="id">ID: </label>
        <input type="number" name="id" value={id} onChange={handleId}/>
        <input type="submit" value="Search" />
    </form>
  )
}

export default Form
