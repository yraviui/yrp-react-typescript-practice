import React from 'react'

const M03 = () => {
  return (
    <div>M03</div>
  )
}

export default M03

/* 

import { useMemo } from 'react'

type fibFunc = (n: number) => number

const M03 = () => {
  const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
  }
  const myNum: number = 37
  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div>
      <h1>M03</h1>
      <p>result: {result}</p>
    </div>
  )
}

export default M03

*/