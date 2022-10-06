import React, { useState, useEffect } from 'react'
import axios from 'axios'


function  UserView ({mutate}) {
  const [users, setUsers] = useState([])
  useEffect( () => {
      axios.get('http://localhost:5000/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      
  },[mutate])
  
  return (
     
    <table >
      <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email id</th>
          </tr>
          {
          users.map((data) => (
             <tr key={data._id}><td>{data.fname}</td>
            <td>{data.lname}</td><td>{data.email}</td></tr>
            ))  
        }
    </table> 
  )
}

export default UserView