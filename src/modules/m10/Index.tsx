import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
interface iTodo{
  userId: string, id: number, title: string, completed: boolean
}
const M10 = () => {
  // https://jsonplaceholder.typicode.com/todos
  const [todos, setTodos] = useState<iTodo[]>([])

  const fetchTodos = async () => {
   try {
    const response: AxiosResponse<iTodo[]> = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
      setTodos(response.data);
   } catch (error) {
    console.log(error)
   }
  }

  useEffect(() => {
    fetchTodos()
  },[])
  return (
    <div>
      <h1>M10 - Axios API call</h1>
      <ul>
        {todos.map( o => <li key={o.id}>{o.title}</li>)}
      </ul>
    </div>
  )
}

export default M10