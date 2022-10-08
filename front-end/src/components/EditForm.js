import React from 'react'

const datas={
    '_id' :'63412cef842a8f832f2d0371',
     'fname': 'Ajay',
     'lname': 'rajan',
     'email': 'akshaykumarc666@gmail.com',
     'password': 'ww'
   }
   const formSubmit=(e)=>{
    
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
