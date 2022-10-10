import React, { useState, useEffect,  } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


  
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [users, setUsers] = useState([])
  const [render, setRender] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },[render])

  //   async function addUser (e){
  //   e.preventDefault()
  //   try {
  //     const resp =await axios.post("http://localhost:5000/user", {
  //       email: email,
  //       lname: lname,
  //       fname: fname,
  //       password: password,
  //     });
  //     if (resp.status === 200) alert("User Added successfuly")
  //   } catch (error) {
  //     console.log(error.resp);
  //   }
  //   setRender(Math.random)
  // }
  // function updateUser(data) {
  //   console.log(data)
    
  // }

  async function deleteUser  (id) {
    try{
      const res =await axios.delete(`http://localhost:5000/user/${id}`)
        try{
        if(res.status ===200)
        {alert("User deleted successfuly")}}
        catch(error){ console.log(error) }
      } 
      catch (error) {
        console.log(error.resp);
      }
       setRender(Math.random)
  }
  function UserView() {
  return (
    <>
      <label style={{ fontSize: 'large' }}>USER DETAILS</label>
      <Link to={`/view`} >Add New User</Link>
      <table style={{ border: 'double' }} >
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
                
                <Link to={`/edit/${data._id}`} state={data}>edit</Link>
                </td>
                <td>
                  <button onClick={(e) => deleteUser(data._id)}>Delete</button>
                </td></tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
export default UserView