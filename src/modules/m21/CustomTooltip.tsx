import React, { useState } from 'react'
interface IProps {
    content: string;
    children: React.ReactNode
}
const CustomTooltip = ({ content, children }: IProps) => {
    const [isTooltipIn, setIsTooltipIn] = useState<boolean>(false)
    return (
        <div className='p-20'>
            <span className='relative w-0 h-0'>
                {isTooltipIn ? <div className='absolute top-[-50px] min-w-[200px] max-w-[200px] bg-[#e8e8e8] p-3 group-hover:inline-block  text-black text-xs rounded'>{content}</div> : ''}
            </span>
            <div className="mx-2 my-1 cursor-pointer" onMouseEnter={() => setIsTooltipIn(true)} onMouseLeave={() => setIsTooltipIn(false)}>
                {children}
            </div>
        </div>
    )
}

export default CustomTooltip