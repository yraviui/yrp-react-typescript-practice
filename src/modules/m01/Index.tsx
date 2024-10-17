import { useState, useEffect } from 'react'

interface Users {
    id: number, username: string
}
/* interface iUser{
    id: number, username: string
} */

const M01 = () => {
    //const [price, setPrice] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [users] = useState<Users[] | null>(null)
    //const [iuser, setIuser] = useState<iUser>({} as iUser)
    useEffect(() => {
        console.log('Mounting')
        console.log('Users: ', users)
        console.log('UnMounting')
    }, [users])
    // const addTwo = useCallback(() => setCount( prev => prev + 1), [])
    return (
        <div>
            <h1>M01</h1>
            <div style={{ display: 'flex' }}>
                <button onClick={() => setCount(prev => prev - 1)}>Sub</button>
                <h2>{count}</h2>
                <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            </div>
        </div>
    )
}

export default M01