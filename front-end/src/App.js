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
          <Route path="/view" element={<NewUser />} />
          <Route path="/" element={<UserView />} />
          <Route path={`/edit/'${'63412ce2842a8f832f2d036e'}`} element={<EditForm />} />
          
        </Routes>
      </Router>


    </>
  );
}

export default App;
