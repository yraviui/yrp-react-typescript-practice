import axios from 'axios'
import {useState} from 'react'

interface iTodos{
  userId:  number, id: number, title: string, completed: boolean
}

const M05 = () => {
  const [todos, setTodos] = useState<iTodos[]>([])
  axios.get<iTodos[]>('https://jsonplaceholder.typicode.com/todos')
       .then( res => setTodos(res.data))
       .catch( err => console.log(err))
  return (
    <div>
      <h1>M05 - API call</h1>
      <ul>
        {todos.map( o => <li key={o.id}>{o.title}</li>)}
      </ul>
    </div>
  )
}

export default M05