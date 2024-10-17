import React, { useState, ChangeEvent } from 'react'
// interface
interface userInputType{
  username: string, password: string
}
const initialState = {username: '', password: ''}
const M09 = () => {
  // type useState
  const [userInput, setUserInput] = useState<userInputType>(initialState)
  // username input,  password input

  // onchange of username -> set ther username perperty equel to the input value
  const setUsername = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserInput({ ...userInput, username: e.target.value })
  }
  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserInput({ ...userInput, password: e.target.value })
  }
  console.log(userInput)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    console.log(userInput)
  }
  return (
    <div>
      <h1>M09 - User</h1>
      <form onSubmit={handleSubmit}>
      <h3>User Name</h3>
      <input type='text' onChange={(e) => setUsername(e)} />
      <h3>Password</h3>
      <input type='text' onChange={(e) => setPassword(e)} />
      <br />
      <br />
      <button>Submit</button>
      </form>
      <div>
      {JSON.stringify(userInput)}
      </div>
    </div>
  )
}

export default M09