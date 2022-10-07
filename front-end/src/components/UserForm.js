import React, { useState } from "react";
import axios from "axios";

export default function UserForm({setMutate}) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("http://localhost:5000/user", {
        email: email,
        lname: lname,
        fname: fname,
        password: password,
      });
      if (resp.status === 200) alert("User Added successfuly");
    } catch (error) {
      console.log(error.resp);
    }
    await setMutate(Math.random)
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="First Name"
          name="lname"
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last name"
          name="fname"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          Add
        </button>
        <button type="reset">Reset</button>
      </div>
    </div>
  );
}
