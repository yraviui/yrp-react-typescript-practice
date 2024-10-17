import React from 'react'
// import { iUser } from './Index'

interface DataGridProps<T> {
    items: T[]
}

function DataGrid<T>({ items }: DataGridProps<T>) {
    return (
        <div>
            <h2>DataGrid</h2>
            <ul>
                <>{items.map((o, i) => (
                    <li key={i}>{JSON.stringify(o)}</li>
                ))}</>
            </ul>
        </div>
    )
}

export default DataGrid