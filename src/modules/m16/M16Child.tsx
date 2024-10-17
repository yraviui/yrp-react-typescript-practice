import React from 'react'
interface PropsInterface {
    printUrl: (url: string) => void;
}
const M16Child = ({ printUrl }: PropsInterface) => {
    return (
        <div>
            <h1>M16Child</h1>
        </div>
    )
}

export default M16Child