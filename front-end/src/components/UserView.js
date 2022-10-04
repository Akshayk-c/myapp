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
     
    <div>
      
        {
          
          users.map((data) => (
            <div key={data._id}>{data.fname}
            </div>))
            
        }
    </div>
    
  )
}

export default UserView