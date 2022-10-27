import React, { useState   } from 'react'
import axios from 'axios'
import {useLocation,useNavigate} from 'react-router-dom'
import  NavBar  from './NavBar'


function EditForm() {
const loc=useLocation()
const data=(loc.state)
const navigate = useNavigate()
const [email, setEmail] = useState(data.email)
const [fname, setFname] = useState(data.fname)
const [lname, setLname] = useState(data.lname)
const [admin, setAdmin] = useState(data.admin)
const [password, setPassword] = useState(data.password)
const [emailerr,setEmailErr] =useState('')
const formSubmit =async (e) => {
  e.preventDefault()
  try {
    const  res =await axios.put(`http://localhost:5000/user/${data._id}`, {
      email: email,
      lname: lname,
      fname: fname,
      password: password,
      admin : admin
    });
    if (res.status === 200){
      navigate('/view')
    } 
  } catch (error) {
    if (error.response.data.message ==='Email already exist') {
     setEmailErr('Email already exist')
    }
   else console.log(error);
  } 
}
  return (
    <>
     <NavBar props={'true'} />
      
      <div className='d-flex p-2 justify-content-center align-items-center' >

        <form onSubmit={formSubmit} >
          <div className="outerDiv ">

            <div className="card px-1 py-4">

              <div className="card-body" style={{ paddingBottom: '0%' }}>

                <div>

                  <span className="headerText">Enter User Details</span>

                </div>
                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control idCss" required="required" id="id" type="text"  value={'ID : '+data._id} readOnly
             />


                    </div>

                  </div>

                </div>


                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">


                      <input className={`form-control ${emailerr ? 'is-invalid ': '' }`} required="required" id="email" type="email" placeholder="Email" defaultValue={data.email} onChange={(e) =>{ setEmail(e.target.value)
                      setEmailErr('')}} />

                      <span class='text-danger'>{emailerr}</span>

                    </div>

                  </div>

                </div>
                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control nameCss" required="required" id="fname" type="text" placeholder="First Name" defaultValue={data.fname} onChange={(e) => setFname(e.target.value)} />


                    </div>

                  </div>

                </div>
                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control nameCss" required="required" id="lname" type="text" placeholder="Last Name" defaultValue={data.lname} onChange={(e) => setLname(e.target.value)} />


                    </div>

                  </div>

                </div>

                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group">

                      <input className="form-control passwordCss" required="required" id="password" type="text" placeholder="password" defaultValue={data.password} onChange={(e) => setPassword(e.target.value)} />



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
                            defaultChecked={data.admin}
                            onClick={(e)=>setAdmin('true')}></input>Yes
                        </label>
                        <div className="row"></div>
                        <label>
                          <input
                            type='radio'
                            name='admin'
                            defaultChecked={!(data.admin)}
                            onClick={(e)=>setAdmin('false')}></input>No
                        </label>



                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex  text-center px-5 mx-3 d-flex justify-content-evenly" >

                  <div>

                    <button className="btn btn-success confirm-button w-100" type="submit" >Submit</button>

                  </div>

                  <div>

                    <button className="btn btn-warning  confirm-button w-100" type="reset"  >Reset</button>

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

export default EditForm
