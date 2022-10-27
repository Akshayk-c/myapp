
import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom"
import axios from 'axios'
import './styles/style.css'
import  NavBar  from './NavBar'

function NewUser() {
  axios.defaults.headers.common = { 'Authorization': sessionStorage.getItem('Token') }
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailerr, setEmailErr] = useState('')
  const [admin, setAdmin] = useState('false')
  const navigate = useNavigate();
  async function addUser(e) {
    e.preventDefault()
    try {
      const resp = await axios.post("http://localhost:5000/user", {
        email: email,
        lname: lname,
        fname: fname,
        password: password,
        admin: admin
      });
      if (resp.status === 200) {
        navigate('/view');
      }
    } catch (error) {
      if (error.response.data.message === 'Email already exist') {
        setEmailErr('Email already exist')
      }
      else console.log(error);
    }
  }
  const resetErr=()=>{
    setEmailErr('')
  }

  return (
    <>
     <NavBar props={[ 'true' , 'newuser']} />
      

      <div className='d-flex p-2 justify-content-center align-items-center' >

        <form onSubmit={addUser} >
          <div className="outerDiv ">

            <div className="card px-1 py-4">

              <div className="card-body" style={{ paddingBottom: '0%' }}>

                <div>

                  <span className="headerText">Enter User Details</span>

                </div>


                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className={`form-control ${emailerr ? 'is-invalid ' : ''}`} required="required" id="email" type="email" placeholder="Email" onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailErr('')
                      }} />

                      <span class='text-danger'>{emailerr}</span>
                    </div>

                  </div>

                </div>
                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control nameCss" required="required" id="fname" type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)} />


                    </div>

                  </div>

                </div>
                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control nameCss" required="required" id="lname" type="text" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />


                    </div>

                  </div>

                </div>

                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control passwordCss" required="required" id="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />



                    </div>

                  </div>

                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="labelCss">
                        <div  >Admin Access</div>
                        <div className="row"></div>

                        <label>
                          <input
                            type='radio'
                            name='admin'
                            onClick={(e) => setAdmin('true')}></input>Yes
                        </label>
                        <div className="row"></div>
                        <label>
                          <input
                            type='radio'
                            name='admin'
                            defaultChecked
                            onClick={(e) => setAdmin('false')}></input>No
                        </label>



                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex  text-center px-5 mx-3 d-flex justify-content-evenly" >

                  <div>

                    <button className="btn btn-success confirm-button w-100" type="submit" >Add</button>

                  </div>

                  <div>

                    <button className="btn btn-warning  confirm-button w-100" type="reset" onClick={resetErr}>Reset</button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewUser