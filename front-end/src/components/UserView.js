import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js'
import './styles/style.css'

function UserView() {
   axios.defaults.headers.common={'Authorization': sessionStorage.getItem('Token') }
  const navigate = useNavigate()
  const [search,setSearch]=useState("")
  const [users, setUsers] = useState([])
  const [render, setRender] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        if(err.response.status===401){
          navigate('/profile')
          // sessionStorage.removeItem('Token')
        }
        else console.log(err)
      })
    },[render])
     var filteredUser=users.filter((user)=>{
      return user.fname.toLowerCase().includes(search.toLowerCase())
     })

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
     <NavBar props={[ 'true' , 'alluser']} />
    <div>
<div class='p-3 d-flex justify-content-end'>
  <input class=" search"  aria-label="Search" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
 
 </div>
     
  <div class='tablediv p-3'>
     
       <table class='table table-responsive table-hover'>
        <thead class='table-dark p-1px'><tr>
          <th scope='col'>First name</th>
          <th scope='col'>Last name</th>
          <th scope='col'>Email id</th>
          <th scope='col'>Password</th>
          <th scope='col'>Role</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th></tr>
        </thead>
        <tbody  >
          {
            filteredUser.map((data) => (
              <tr  key={data._id}>
                <td   >{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.admin.toString()===`true`?`Admin`:`User`}</td>
                <td>
                <Link class='btn btn-success h-2' to={`/edit`} state={data}>Edit</Link>
                </td>
                <td>
                  <button class='btn btn-danger p-1' onClick={(e) => deleteUser(data._id)}>Delete</button>
                </td></tr>
            ))
          }
        </tbody>
      </table>
      </div>
      </div>  
    </>
  )
}
export default UserView