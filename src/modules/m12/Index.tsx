import React, { useState } from 'react'

interface iState{
    count: number
}

const M12 = () => {
    const [state, setState] = useState<iState>({count: 0})
    const handleAdd = () => setState({count: state.count + 1})
    const handleSub = () => setState({count: state.count - 1})
  return (
    <div>
        <h1>M12 - count: {state.count}</h1>
        <button onClick={handleSub}>Sub</button>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default M12