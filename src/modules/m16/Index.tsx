import React from 'react'
import M16Child from './M16Child'

const M16 = () => {
    const printUrl = (arg: string) => { console.log(arg) }
    return (
        <div>
            <h1>M16: Child to Parent</h1>
            <M16Child printUrl={printUrl} />
        </div>
    )
}

export default M16