import { useState, useEffect } from "react";
import Login from "./routes/login";
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';
import LandingPage from "./components/LandingPage";

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
      {/* <Login
        data={data}
        setData={setData}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isIndividual={isIndividual}
        setIsindividual={setIsindividual}
        confimState={confimState}
        setConfirmState={setConfirmState}
      /> */}

    </div>
)}

export default App;
