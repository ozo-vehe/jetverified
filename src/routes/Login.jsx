import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dataFromIPFS } from '../utils/storedData'

function Login({ data, setData, userDetails, setUserDetails, isIndividual, setIsindividual, confimState, setConfirmState }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userNotfound, setUserNotFound] = useState(false)
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const isUser = async(loginEmail, loginPassword) => {
    console.log("Waiting....")
    let user = {}
    let storedData = await dataFromIPFS()
    setUsers(storedData)
    console.log(users)
    users.forEach((d) => {
      console.log("Data")
      console.log(d)
    })

    user = users.find((data) => {
      return loginEmail == data.email && loginPassword == data.password
    })
    console.log(user)
    if(!user) return false
    else return true
  }

  const handleIndividualAccount = (e) => {
    if (isIndividual) {
      return;
    }

    setIsindividual((prev) => !prev);
  };

  const handleOrganizationAccount = (e) => {
    if (!isIndividual) {
      return;
    }

    setIsindividual((prev) => !prev);
  };

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  return (
    <div className="signup-parent">
      <div className="sign-up">
        <div className="signup-form">
          <div className="signup-header">
            <h2 className="signup-header-title">Login</h2>
            <div className="signup-header-text">
              Don't have an account?{" "}
              <Link to="/signup" className="login-text">
                Sign up
              </Link>
            </div>
          </div>
          <div className="account-type">
            <button
              className={isIndividual ? "active" : "inactive"}
              onClick={handleIndividualAccount}
            >
              Individual
            </button>
            <button
              className={isIndividual ? "inactive" : "active"}
              onClick={handleOrganizationAccount}
            >
              Organization
            </button>
          </div>
          <form className="form">
            <div className="signup-form-input">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={handleLoginEmail}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={handleLoginPassword}
                />
              </div>

              {userNotfound && <p className="password-match-text">Email and password do no match</p>}
              <div className="submit-btn-container">
                <button className="signup-btn"
                  onClick={ async (e)=> {
                    e.preventDefault()
                    // await isUser(loginEmail, loginPassword)
                    if(await isUser(loginEmail, loginPassword)) {
                      console.log(isUser(loginEmail, loginPassword))
                      // navigate("jetverify/dashboard")
                      window.location.pathname = "jetverify/dashboard"
                    }
                    else {
                      alert("Wrong details")
                    }
                    // handleIndividualLogin(e);
                  }}>
                  Proceed
                </button>
                {/* <Route
                  path="/"
                  element={ cartItems.length < 1 ? <Navigate to="/products" /> : <Checkout /> }
                />; */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
