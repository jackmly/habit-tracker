import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

function Register(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [redirectTo, setRedirectTo] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(user);

    axios
      .post(
        "/api/register",
        user,
        { headers: { "Content-Type": "application/json" } },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log("registration response: ", response);
        setRedirectTo("/login");
      })
      .catch(function (err) {
        console.log("registration response: ", err);
      });
  }

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  } else {
  return (
    <div className="container mt-5">
      <h1>Register</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              {/* Makes POST request to /register route */}
              <form action="/register" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card social-block">
            <div className="card-body">
              <a
                className="btn btn-block"
                href="http://localhost:5000/api/auth/google/"
                role="button"
              >
                <i className="auth fa fa-google"></i>
                Sign Up with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Register;
