import React, { useState, useEffect, useRef  } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function UserView() {
  axios.defaults.headers.common={'Authorization': sessionStorage.getItem('Token') }
  const ref=useRef(null)
  const [search,setSearch]=useState("")
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


const searchSubmit  =async (e,searchName)=>{
  e.preventDefault()
  await axios.get(`http://localhost:5000/user/${searchName}`)
  .then(result => {
    console.log(result.data)
    if(result.data.length===0)
    {alert(` ${searchName} doesn't existed`)
    setRender(Math.random)
  }
    else {
      setUsers(result.data)
      }
  })
  .catch(err => {
    console.log(err)
  })
  ref.current.value=""
  setSearch("")
}
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
 
  
  return (
    <>
      <label style={{ fontSize: 'large' }}>USER DETAILS</label>
      <form ><br></br>
      <input ref={ref} placeholder='Search..'  onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={(e)=>searchSubmit(e,search) }> . </button>
     </form><br></br>
       <table style={{ border: 'double' }} >
        <thead><tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email id</th>
          <th>Password</th>
          <th>Role</th>
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
                <td>{data.admin.toString()===`true`?`Admin`:`User`}</td>
                <td>
                <Link to={`/edit`} state={data}>edit</Link>
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