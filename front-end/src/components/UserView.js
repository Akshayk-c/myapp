import React, { useState, useEffect } from 'react'
import axios from 'axios'


function UserView({ mutate }) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [mutate])

  return (
    <>
      <label style={{ fontSize: 'large' }}>USER DETAILS</label>
      <table style={{ border: 'double' }} className="col-xs-12 col-sm-6 col-md-8">
        <thead><tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email id</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th></tr>
        </thead>
        <tbody>
          {
            users.map((data) => (
              <tr key={data._id}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                <input type='button' value='Edit' />
                </td>
                <td>
                <input type='button' value='Delete' />
                </td></tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default UserView