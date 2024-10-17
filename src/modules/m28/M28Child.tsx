import React from 'react'

type iMsg = { msg: string }

const M28Child = ({ msg }: iMsg) => {
    return (
        <div>
            <h1>M28Child</h1>
            <p>Message: {msg}</p>
        </div>
    )
}

export default M28Child