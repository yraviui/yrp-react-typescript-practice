import React from 'react'
import CustomTooltip from './CustomTooltip'

const M21 = () => {
    /* const [isTooltip, setIsTooltip] = useState<boolean>(false) */
    return (
        <div>
            <h1>M21</h1>
            <CustomTooltip content="This is tooltip content. This is tooltip content.">Tooltip</CustomTooltip>
            {/* {isTooltip ? "AAAAAAAA" : 'BBBBBBBBB'}
            <button onMouseOver={() => setIsTooltip(true)} onMouseOut={() => setIsTooltip(false)} >Button</button> */}
        </div>
    )
}

export default M21