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
     
    <table style={{border: 'double'}} class="col-xs-12 col-sm-6 col-md-8">
      <label style={{fontSize:'large'}}>USER DETAILS</label>
      <tr style={{width: '50%'}}>
          <th>First name</th>
          <th>Last name</th>
          <th>Email id</th>
          <th>Password</th>
          </tr>
          {
          users.map((data) => (
             <tr key={data._id}><td>{data.fname}</td>
            <td>{data.lname}</td><td>{data.email}</td><td>{data.password}</td></tr>
            ))  
        }
    </table> 
  )
}

export default UserView