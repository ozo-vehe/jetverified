import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SignUp() {
  const [isIndividual, setIsIndividual] = useState(true);
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

    setIsIndividual((prev) => !prev);
  };

  const handleOrganizationAccount = (e) => {
    if (!isIndividual) {
      return;
    }

    setIsIndividual((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
  };






  useEffect(() => {
    fetch("https://my-json-server.typicode.com/codeinn001/json-server/individuals/")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
            setIsloading(false)
            console.log(data)
      }
      );
      
    
  }, []);


  
  async function submitData() {
    if(form.password !== form.password2){
      return setPasswordMatch(true)
    }

    if(isIndividual)  {
      const response = await fetch("https://my-json-server.typicode.com/codeinn001/json-server/individuals/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const data = await response.json();
        console.log(data);
    } else {
      const response = await fetch("https://my-json-server.typicode.com/codeinn001/json-server/organizations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const data = await response.json();
        console.log(data);
    }
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
                  placeholder="Enter Password"
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
                <button type="submit" onClick={submitData}>Proceed</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
