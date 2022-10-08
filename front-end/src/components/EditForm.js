import React from 'react'
import axios from 'axios'

const datas = () => {
  axios.get('http://localhost:5000/user')
  .then(res => {
    console.log(res.data._id)
  })
  .catch(err => {
    console.log(err)
  })

}

const formSubmit = (e) => {

}

function EditForm() {
  return (
    <>

      <div>EditForm</div>
      <script>
        console.log(data)
      </script>

      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            defaultValue={datas.email}
            id='email'

          />
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id='fname'
            defaultValue={datas.fname}

          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="lname"
            defaultValue={datas.lname}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            defaultValue={datas.password}
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
