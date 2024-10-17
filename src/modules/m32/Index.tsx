import React from 'react'
import DataGrid from './DataGrid'

// export interface iUser { id: number, name: string, age: number }

const M32 = () => {
    const users = [
        { id: 1, name: 'Ravi', age: 40 },
        { id: 2, name: 'Prakash', age: 30 },
        { id: 3, name: 'Sony', age: 22 },
    ]
    const orders = [
        { orderId: 1, quantity: 40, amout: 75 },
        { orderId: 2, quantity: 22, amout: 21 },
        { orderId: 3, quantity: 33, amout: 88 },
    ]
    return (
        <div>
            <h1>M32</h1>
            <DataGrid items={users} />
            <br />
            <br />
            <DataGrid items={orders} />
        </div>
    )
}

export default M32