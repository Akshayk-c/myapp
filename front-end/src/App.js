import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditForm from './components/EditForm';
import NewUser from './components/NewUser';
import UserView from './components/UserView';
import Register from './components/register';
import Login from './components/login';
import Profile from './components/profile';



function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/register"}  element={<Register />} />
        <Route path={"/profile"} element={<Profile />} />
          <Route path="/new_user" element={<NewUser />} />
          <Route path="/view" element={<UserView />} />
          <Route path={"/edit"} element={<EditForm />} />
          
        </Routes>
      </Router>


    </>
  );
}

export default App;
