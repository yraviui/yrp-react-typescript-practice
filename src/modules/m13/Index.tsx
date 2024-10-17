import React, { useState } from 'react'
interface iMsg{
    message: string
}
const M13 = () => {
    const [msg, setMsg] = useState<iMsg>({message: 'Welcome'})
  return (
    <div>
        <h1>M13 - Message update</h1>
        <h1>{msg.message}</h1>
        <button onClick={() => setMsg({message: 'LIKE'})}>Like</button>
        <button onClick={() => setMsg({message: 'Comment'})}>Comment</button>
        <button onClick={() => setMsg({message: 'Subscript'})}>Subscript</button>
    </div>
  )
}

export default M13