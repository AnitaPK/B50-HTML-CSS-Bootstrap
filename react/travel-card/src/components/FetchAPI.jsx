import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const[users,setUsers] = useState([])
 function fetchUserAPI(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUsers(data))
}
useEffect(fetchUserAPI,[users])
  return (
    <div>
      <ul>
        {users.map((user,index)=>(
            <li key={index}>{user.name} 
            <i>{ user.address.city}</i>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchAPI
