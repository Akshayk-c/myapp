import React from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

const loc=useLocation()
const data=(loc.state)
const formSubmit = (e) => {
}

function EditForm() {
  return (
    <>

      <div>EditForm</div>

      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            defaultValue={data.email}
            id='email'

          />
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id='fname'
            defaultValue={data.fname}

          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="lname"
            defaultValue={data.lname}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            defaultValue={data.password}
          />
        </div>
        <div>
          <button type="submit" >
            submit
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  )
}

export default EditForm
