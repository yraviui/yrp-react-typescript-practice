import React from 'react'
import { BsTypeBold } from "react-icons/bs";
import ToolTip from "./ToolTip";

const M17 = () => {
    return (
        <div>
            <h1>M17 - Popover</h1>
            <div className="mx-auto max-w-3xl p-10">
                <ToolTip tooltip="I am tooltip">
                    <button className="bg-gray-900 text-white p-3 rounded">
                        Show Me Tooltip
                    </button>
                </ToolTip>

                <div className="py-10">
                    <ToolTip tooltip="A pop-up box that appears when the user clicks on an element.">
                        <button className="bg-gray-900 text-white p-3 rounded">
                            <BsTypeBold />
                        </button>
                    </ToolTip>
                </div>
            </div>
        </div>
    )
}

export default M17