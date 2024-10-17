import React from 'react'
type iProps = { msg: string, children: JSX.Element }
const M29Child = ({ msg, children }: iProps) => {
    return (
        <div>
            <h1>M29Child</h1>
            <p>Message: {msg}</p>
            <p>Children: {children}</p>
        </div>
    )
}

export default M29Child