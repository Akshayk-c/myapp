import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import './styles/style.css'

function login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailerr, setEmailErr] = useState('')
  const [passworderr, setPasswordErr] = useState('')
  const navigate = useNavigate();


  async function addUser(e) {
    e.preventDefault()
    setEmailErr('')
    setPasswordErr('')
    try {
      const resp = await axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password
      })
      if (resp.status === 200) {
        alert("Logged in  successfuly")
        const token = resp.data.token
        sessionStorage.setItem('Token', token)
        navigate('/profile')

      }
    } catch (error) {
      if (error.response.data === "User email doesn't exist") setEmailErr('Invalid email')
      if (error.response.data === "wrong password") setPasswordErr('Invalid password')
      

      console.log(error.response.data);
    }
  }
  const resetData=()=>{
    setEmail('')
    setPassword('')
    setEmailErr('')
    setPasswordErr('')
  }

  return (

    <div class='d-flex p-2 justify-content-center align-items-center' style={{ height: 100 + 'vh' }}>

      <form onSubmit={addUser} >
        <div class="outerDiv ">

          <div class="card px-1 py-4">

            <div class="card-body">

              <div>

                <h1 class="headerText">Enter Login Details</h1>

              </div>


              <div class="row">

                <div class="col-sm-12">

                  <div class="form-group">
                  
                    <input class={`form-control ${emailerr ? 'is-invalid ': '' }`} id="nameTxt" type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)
                    setEmailErr('')}} />
                    <span class='text-danger'>{emailerr}</span>

                  </div>

                </div>

              </div>

              <div class="row">

                <div class="col-sm-12">

                  <div class="form-group">

                    <input class={`form-control ${passworderr ? 'is-invalid ': '' }`} id="dobTxt" type="password" placeholder="password" value={password}  onChange={(e) => {setPassword(e.target.value)
                    setPasswordErr('')}} />

                    <span class='text-danger'>{passworderr}</span>

                  </div>

                </div>

              </div>

              <div class="d-flex  text-center px-5 mx-3 d-flex justify-content-evenly" >

                <div>

                  <button class="btn btn-success confirm-button w-100" >Save</button>

                </div>

                <div>

                  <button class="btn btn-warning  confirm-button w-100" type="reset" onClick={resetData}>reset</button>

                </div>

              </div>
              <div className="text-center my-4">
                <Link to={`/register`} className='links' >New user ? Sign up</Link>
              </div>

            </div>

          </div>



        </div>
      </form>
    </div>


  )
}

export default login