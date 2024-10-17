import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface iTodos { id: number, userId: number, title: string, completed: boolean }

const M27 = () => { // https://jsonplaceholder.typicode.com/todos
    const [todos, setTodos] = useState<iTodos[]>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setTodos(res.data))
            .catch(error => console.log(error))
    })
    return (
        <div>
            <ul>
                {todos.map(o => <li key={o.id}>{o.title}</li>)}
            </ul>
        </div>
    )
}

export default M27