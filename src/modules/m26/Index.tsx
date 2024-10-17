import React, { useState } from 'react'

const M26 = () => {
    const [obj, setObj] = useState("");
    const [myData, setMyData] = useState(['One'] as any);
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log('obj: ', obj)
        setMyData([...myData, obj])
    }
    const handleDel = (id: number) => {
        const updateData = myData.filter((o: any, i: number) => i !== id)
        setMyData(updateData)
    }
    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={onSubmit}>
                {/* <input className='border border-gray-400' value={obj} onChange={(e) => setObj(e.target.value)} /> */}
                {myData.map((o: any, i: number) => <div key={i}><input className='border border-gray-400' value={o} onChange={(e) => setObj(e.target.value)} /> <button onClick={() => handleDel(i)}>Del</button></div>)}
                <button>Add</button>
            </form>
            <h2>My Data</h2>
        </div>
    )
}

export default M26
