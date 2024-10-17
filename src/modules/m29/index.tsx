import React, { useState } from 'react'
import M29Child from './M29Child'

const M29 = () => {
    const [msg] = useState<string>('Parent to Child Message')
    return (
        <div>
            <h1>M29 - Parent to child and children</h1>
            <M29Child msg={msg}>
                <p>Children message</p>
            </M29Child>
        </div>
    )
}

export default M29