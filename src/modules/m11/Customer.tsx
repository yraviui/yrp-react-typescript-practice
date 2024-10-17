import React from 'react'

interface iCustomer{
    name: string, designation: string, age?:number
}

const Customer = ({name, designation, age}: iCustomer) => {
  return (
    <div>
        <h1>Customer</h1>
        <h3>Name: {name}</h3>
        <h3>Designation: {designation}</h3>
        <h3>Age: {age}</h3>
    </div>
  )
}

export default Customer