import React, { useState } from 'react'
import M28Child from './M28Child'

const M28 = () => {
    const [msg] = useState<string>('Message from parent to child')
    return (
        <div>
            <h1>M28 - child message</h1>
            <M28Child msg={msg} />
        </div>
    )
}

export default M28