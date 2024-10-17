import React from 'react'

interface IProps {
    content: string;
    children: React.ReactNode
}

const TooltipV1 = ({ content, children }: IProps) => {
    return (
        <div>TooltipV1</div>
    )
}

export default TooltipV1