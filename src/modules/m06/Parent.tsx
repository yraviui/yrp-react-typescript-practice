import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [msg, setMsg] = useState<string>('Message at Parent')
  return (
    <div>
        <h1>Parent</h1>
        <Child msg={msg} />
        <button onClick={() => setMsg('Message at Parent after click button')}>msg update</button>
    </div>
  )
}

export default Parent