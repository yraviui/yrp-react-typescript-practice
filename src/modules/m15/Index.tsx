import React, { useEffect, useState } from 'react'
import iTodo from './type'
import apiServices from './apiServices'

const M15 = () => {
    const [todos, setTodos] = useState<iTodo[]>([])
    const getData = async () => {
       apiServices.getTodos()
       .then(  (response: any) => setTodos(response.data) )
       .catch( error => console.log(error))
    }
    useEffect(() => {
        getData()
    },[])
  return (
    <div>
        <h1>M15</h1>
        <ul>
            {todos.map( o => <li key={o.id}>{o.title}</li>)}
        </ul>
    </div>
  )
}

export default M15