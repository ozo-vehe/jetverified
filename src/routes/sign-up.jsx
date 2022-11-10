import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {uploadUserInfo} from '../utils/storedData'

function SignUp() {
  const [isIndividual, setIsindividual] = useState(true);
  const [data, setData] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [form, setForm] = useState({
    fullname: "",  
    email: "",
    password: "",
    password2: "",
  }
  );
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      verified: false,
    });
    // console.log(form);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(passwordCheck() && form.fullname && form.email) {
      if(isIndividual)  {
        const data = {
          ...form,
          role: "individual"
        }
        try {
          await uploadUserInfo(data)
        }catch(e) {
          console.log(e)
        }
        console.log("Individual")
        console.log(data)
      } else {
        const data = {
          ...form,
          role: "organization"
        }
        try {
          await uploadUserInfo(data)
        }catch(e) {
          console.log(e)
        }
        console.log(data)
        console.log("Organisation")
      }
    }
    else {
      alert("Please fill the form with correct details")
    }
  };

  
  function passwordCheck() {
    if(form.password === form.password2)return true
    else return false
  }


  return (
    <div className="signup-parent">
      <div className="sign-up">
        <div className="signup-form">
          <div className="signup-header">
            <h2 className="signup-header-title">Sign up</h2>
            <div className="signup-header-text">
              Already have an account?{" "}
              <Link to="/login" className="login-text">
                Login
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="signup-form-input">
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="fullname"
                  name="fullname"
                  id="fullname"
                  placeholder="Firstname, Lastname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Enter Password"
                  onChange={handleChange}
                />
              </div>
              {passwordMatch && <p className="password-match-text">password do not match</p>}
              <div className="submit-btn-container">
                <button type="submit">Proceed</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
