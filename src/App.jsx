import { useState, useEffect } from "react";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import "./App.css";

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
    </div>
  );
}

export default App;
