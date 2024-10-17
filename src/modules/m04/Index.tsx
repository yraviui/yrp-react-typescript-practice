import { useRef } from 'react'

const M04 = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
        <h1>M04</h1>
        <input type='text' ref={inputRef} />
    </div>
  )
}

export default M04