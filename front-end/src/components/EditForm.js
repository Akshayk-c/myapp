import React from 'react'
const data={
    '_id' :'63412cef842a8f832f2d0371',
     'fname': 'Ajay',
     'lname': 'rajan',
     'email': 'akshaykumarc666@gmail.com',
     'password': 'ww'
   }
   function showUser(name){
    console.log(name)
   }

function EditForm(props) {
  return (
    <>
   
    <div>EditForm</div>
    <form>
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
          <button type="submit" onClick={(e) => showUser(document.getElementById('email').value)}>
            submit
          </button>
          <button type="reset">Reset</button>
        </div>
    </form>
    </>
  )
}

export default EditForm
