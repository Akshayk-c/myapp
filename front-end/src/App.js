import React, { useState } from 'react';
import UserForm from './components/UserForm';

import UserView from './components/UserView';

function App() {
  const [mutate,setMutate]=useState("")
  return (
    <>
       <UserForm setMutate={setMutate}/>
        <UserView mutate={mutate}/>
    </>
  );
}

export default App;
