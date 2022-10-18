import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import axios from 'axios'


function profile() {
  axios.defaults.headers.common={'Authorization': sessionStorage.getItem('Token') }
  const navigate = useNavigate();
  var token = sessionStorage.getItem('Token')
  token = token.replace('Bearer','');
  var decoded = jwt_decode(token);
  const [user,setUser]=useState('')
  useEffect(() => {
    axios.get(`http://localhost:5000/user/profile/${decoded.id}`)
      .then(res => {
       setUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },[])

       const adminAcessUser=()=>{
        if(decoded.admin===false){
          alert('Access denied')
          navigate('/profile')
        }
        else navigate('/view')
       }
       const adminAcessAdd=()=>{
        if(decoded.admin===false){
          alert('Access denied')
          navigate('/profile')
        }
        else navigate('/new_user')
       }

  return (
    <><div>
      Dashboard<br></br>
      <label>
      {user.fname}
      </label><br></br>
     <label>
     {user.lname}
      </label><br></br>
      <label>
     {user.email}
      </label><br></br>
      <label>
     {user.password}
      </label><br></br>
      
    

    </div>
    <button onClick={adminAcessUser}>All User</button>
    <button onClick={adminAcessAdd}>Add User</button>
    </> 
  )
}

export default profile