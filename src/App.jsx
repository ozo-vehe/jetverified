import { useState, useEffect } from "react";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import { Outlet, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  const [isIndividual, setIsindividual] = useState(true);
  const [data, setData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [confimState, setConfirmState] = useState(false);

  useEffect(() => {
    if (isIndividual) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsloading(false);
          console.log(data);
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsloading(false);
          console.log(data);
        });
    }
  }, [isIndividual]);

  return (
    <div className="App">
      {/* <SignUp /> */}
      <NavBar />
      <Outlet />
      <Login
        data={data}
        setData={setData}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isIndividual={isIndividual}
        setIsindividual={setIsindividual}
        confimState={confimState}
        setConfirmState={setConfirmState}
      />
      <Routes>
        <Route path='/dashboard'  userDetails={userDetails} confimState={confimState} setConfirmState={setConfirmState} />
      </Routes>
      <Outlet /> 
    </div>
  );
}

export default App;
