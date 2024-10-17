import React from 'react'

type iMsg = { msg: string}

const Child = ({msg}: iMsg )=> {
  return (
    <div>
        <h1>Child</h1>
        <p>{msg}</p>
    </div>
  )
}

export default Child