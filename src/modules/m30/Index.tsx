import React, { ChangeEvent, useState } from 'react'

interface userInputType { userName: string, password: string }
const initialState = { userName: '', password: '' }

const M30 = () => {
    // type userState
    const [userInput, setUserInput] = useState<userInputType>(initialState)
    const setUserName = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserInput({ ...userInput, userName: e.target.value })
    }
    const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserInput({ ...userInput, password: e.target.value })
    }
    console.log(userInput)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log("userInput: ", userInput)
    }
    return (
        <div>
            <h1>M30 - Form</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User Name</label>
                    <input type='text' onChange={(e) => setUserName(e)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Password</label>
                    <input type='text' onChange={(e) => setPassword(e)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button>Submit</button>
                </div>
            </form>
            <div>{JSON.stringify(userInput)}</div>
        </div>
    )
}

export default M30