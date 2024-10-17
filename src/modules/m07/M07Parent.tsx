import React from 'react'
import M07Child from './M07Child'

const M07Parent = () => {
  return (
    <div>
        <h1>M07 - Parent</h1>
        <M07Child title="Parent to Child Title AAAAAA">
            <p>This message is children BBBBBBB</p>
        </M07Child>
    </div>
  )
}

export default M07Parent