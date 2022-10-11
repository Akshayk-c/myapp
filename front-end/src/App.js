import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditForm from './components/EditForm';
import NewUser from './components/NewUser';
import UserView from './components/UserView';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/New_user" element={<NewUser />} />
          <Route path="/" element={<UserView />} />
          <Route path={"/edit/:id"} element={<EditForm />} />
          
        </Routes>
      </Router>


    </>
  );
}

export default App;
