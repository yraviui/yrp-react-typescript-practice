import { useState, useCallback } from 'react'
// import { useState, useCallback, MouseEvent, KeyboardEvent } from 'react'

const M02 = () => {
  const [count, setCount] = useState<number>(0)
  const addTwo = useCallback(() => setCount(prev => prev + 1), [])
  const addThree = useCallback((e: any): void => {
    console.log('e: ', e)
    setCount(prev => prev + 1)
  }, [])
  //  const addFour = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 1), [])
  return (
    <div>
      <h1>M02</h1>
      <button onClick={addTwo}>Sub</button>
      <h2>{count}</h2>
      <button onClick={addThree}>Add</button>
    </div>
  )
}

export default M02