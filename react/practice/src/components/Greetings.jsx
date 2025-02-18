import React from 'react'

const Greetings = ({user}) => {
    console.log(user)
        console.log(user.fname)
  return (
    <>
      <h1>Welcome to React <span>{`${user.fname} ${user.lName}`}</span></h1>
    </>
  )
}

export default Greetings
