import React from 'react';
import './App.css';
import Profile from './Profile/Profile Component/profile.component';


function App() {
  const handleName= name=>alert(name)
  return (
    <div className="App">
      <Profile
      fullName="Dieko" bio="I am a full-stack web developer" profession="Software Enigineer" 
      handleName={handleName}
      >
        <img src="./react header.png" alt="react"/>
      </Profile>
    </div>
  );
}

export default App;
