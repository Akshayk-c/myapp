import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import './styles/style.css'

function UserView() {
  axios.defaults.headers.common={'Authorization': sessionStorage.getItem('Token') }
  const navigate = useNavigate();
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
          navigate('/')
          sessionStorage.removeItem('Token')
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
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <span class="navbar-brand" >Navbar</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/profile">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">All Users </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/new_user">Add User</Link>
        </li>
        <li class="nav-item ">
      <input class="nav-link Search"  aria-label="Search" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
      </li> 
        
      </ul>
    </div>
  </div>
</nav>
  <div>
     
       <table class='table table-responsive table-hover mt-3' >
        <thead class='table-dark p-1px'><tr>
          <th scope='col'>First name</th>
          <th scope='col'>Last name</th>
          <th scope='col'>Email id</th>
          <th scope='col'>Password</th>
          <th scope='col'>Role</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th></tr>
        </thead>
        <tbody >
          {
            filteredUser.map((data) => (
              <tr  key={data._id}>
                <td >{data.fname}</td>
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
      </div>
      </div>  
    </>
  )
}
export default UserView