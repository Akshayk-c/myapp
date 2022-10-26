import React, { useState   } from 'react'
import axios from 'axios'
import {useLocation,useNavigate,Link} from 'react-router-dom'

function EditForm() {
const loc=useLocation()
const data=(loc.state)
const navigate = useNavigate()
const [email, setEmail] = useState(data.email)
const [fname, setFname] = useState(data.fname)
const [lname, setLname] = useState(data.lname)
const [admin, setAdmin] = useState(data.admin)
const [password, setPassword] = useState(data.password)
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
      alert("User updated successfuly")
      navigate('/view')
    } 
  } catch (error) {
    console.log(error);
  } 
}
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <label class="navbar-brand" >Edit User</label>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="btn btn-outline-success" to='/profile'>Home </Link>
          </div>
          <div class="navbar-nav">
            <Link class="btn btn-outline-secondary" to='/view'>All Users </Link>
          </div>
          <div class="navbar-nav">
            <Link class="btn btn-outline-secondary" to='/new_user'>Add User </Link>
          </div>
        </div>
      </nav>
      
      
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

                      <input className="form-control emailCss" required="required" id="email" type="email" placeholder="Email" defaultValue={data.email} onChange={(e) => setEmail(e.target.value)}/>


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

                    <button className="btn btn-warning  confirm-button w-100" type="reset" >Reset</button>

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
