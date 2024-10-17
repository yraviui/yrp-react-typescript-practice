import React from 'react'

type iProps = { title?: string, children?: JSX.Element}

const M07Child = ({title, children}: iProps) => {
  return (
    <div>
        <h1>M07Child</h1>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
  )
}

export default M07Child