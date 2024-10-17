import React, { useState } from 'react'
interface iState{
    isLogin: boolean
}
const M14 = () => {
    const [state, setState] = useState<iState>({ isLogin: false})
  return (
    <div>
        <h1>M14</h1>
        {state.isLogin && state.isLogin ? ( <h1>Welcome User</h1>) : (<h1>Please Login for dashboard</h1>) }
        {state.isLogin && state.isLogin ? ( <button onClick={() => setState({isLogin: false})}>Logout</button>) : (<button onClick={() => setState({isLogin: true})}>Login</button>) }
        
        
    </div>
  )
}

export default M14