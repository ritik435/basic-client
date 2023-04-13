import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [profile, setProfile] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://basic-server-five.vercel.app/",{ mode: 'cors' })
      .then((res) =>res.json() )
      .then((data) => setMessage(data.message) );
  
    fetch("https://basic-server-five.vercel.app/users",{ mode: 'cors' })
      .then((res) =>res.json() )
      .then((data) => setProfile(data.message) );
  },
   []);
  return (
    <div className="App">
      <h1>Hello From React......{message}</h1>
      <h1>Hello From React......{profile}..Humko krne do</h1>
    </div>
  );
}

export default App;
