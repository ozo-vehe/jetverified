import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dataFromIPFS } from '../utils/storedData'

function Login({ data, setData, userDetails, setUserDetails, isIndividual, setIsIndividual, confimState, setConfirmState }) {
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

    setIsIndividual((prev) => !prev);
  };

  const handleOrganizationAccount = (e) => {

    if (!isIndividual) {
      return;
    }

    setIsIndividual((prev) => !prev);
  };

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

<<<<<<< HEAD
=======
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(loginEmail, loginPassword)
  // }

//   useEffect(() => {
//     if (isIndividual) {
//       fetch("http://localhost:3000/individuals/")
//         .then((res) => res.json())
//         .then((data) => {
//           setData(data);
//           setIsloading(false);
//           console.log(data);
//         });
//     } else {
//       fetch("http://localhost:3000/organizations/")
//         .then((res) => res.json())
//         .then((data) => {
//           setData(data);
//           setIsloading(false);
//           console.log(data);
//         });
//     }
//   }, [isIndividual]);

  const handleIndividualLogin = (e) => {
    e.preventDefault();
    data.find((item) => {
      // Change item.username to item.password
      if (item.email === loginEmail && item.password === loginPassword) {
        setUserDetails({...item})
        setConfirmState(true)
        setUserNotFound(false)
        console.log("email found", userDetails, confimState);
        return 'user found'
      }  else {
        console.log('user not found')
        setUserNotFound(true)
      }
    });
   
  };



// useEffect(() => {
//     handleIndividualAccount()
// }, [loginEmail, loginEmail])


//   navigate to dashboard 
function navigateToDashboard() {
    if(confimState) {
        window.location.href = "/dashboard";
    }
  }

//   set user details to local storage
    useEffect(() => {
        if (confimState) {
            localStorage.setItem('userDetails', JSON.stringify(userDetails))
            // navigateToDashboard()
        }
    }, [confimState])


>>>>>>> 2c1c4285139f30a7d88bc2324ba2489e9190bc75
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
<<<<<<< HEAD
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
=======
                <button type="submit" className="signup-btn">
>>>>>>> 2c1c4285139f30a7d88bc2324ba2489e9190bc75
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
