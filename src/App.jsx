import { useState, useEffect } from "react";
import SignUp from "./routes/sign-up";
import Login from "./routes/Login";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [isIndividual, setIsIndividual] = useState(true);
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
      
      <Routes>
        <Route path="/jetverify" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/login" element={<Login
          data={data}
          setData={setData}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          isIndividual={isIndividual}
          setIsIndividual={setIsIndividual}
          confimState={confimState}
          setConfirmState={setConfirmState}
        />} />

        <Route
          path="/dashboard"
          userDetails={userDetails}
          confimState={confimState}
          setConfirmState={setConfirmState}
          element={<Dashboard />} 
        />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
