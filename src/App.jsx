import { useState, useEffect } from "react";
import SignUp from "./routes/sign-up";
import Login from "./routes/Login";
import { Outlet, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Ipfs from "./components/Ipfs";

function App() {
  const [isIndividual, setIsindividual] = useState(true);
  const [data, setData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [confimState, setConfirmState] = useState(false);

  useEffect(() => {
    if (isIndividual) {
      fetch("http://localhost:3000/individuals/")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsloading(false);
          console.log(data);
        });
    } else {
      fetch("http://localhost:3000/organizations/")
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
      {/* <NavBar /> */}
      <Ipfs />
      {/* <Routes>
        <Route
          path="/login"
          element={
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
          }
        />

        <Route path='/dashboard'  userDetails={userDetails} confimState={confimState} setConfirmState={setConfirmState} />
      </Routes>
      <Outlet /> */}
    </div>
  );
}

export default App;
