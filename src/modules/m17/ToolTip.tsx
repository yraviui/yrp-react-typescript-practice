import React, { ReactNode, useRef } from 'react'
interface Props {
    children: ReactNode;
    tooltip?: string;
}

const ToolTip = ({ children, tooltip }: Props): JSX.Element => {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const container = useRef<HTMLDivElement>(null);
    return (
        <div ref={container} onMouseEnter={({ clientX, clientY }) => {
            console.log('clientX: ', clientX)
            console.log('clientY: ', clientY)
            if (!tooltipRef.current || !container.current) return;
            const { left } = container.current.getBoundingClientRect();
            const { top } = container.current.getBoundingClientRect();

            tooltipRef.current.style.left = clientX - left - 150 + "px";
            tooltipRef.current.style.top = clientY - top - 140 + "px";
        }}
            className="group relative inline-block"
        >
            {children}
            {tooltip ? (
                <span ref={tooltipRef} className="min-w-[300px] invisible group-hover:visible bg-blue-500 text-white p-5 rounded absolute top-full mt-2">
                    {tooltip}
                </span>
            ) : null}
        </div>
    )
}

export default ToolTip