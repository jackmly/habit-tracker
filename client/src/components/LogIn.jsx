import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";


function LogIn(props) {

  const [user, setUser] = useState({username:"", password:""});
  const [redirectTo, setRedirectTo] = useState(null);

  function handleChange(event){
    const {name, value} = event.target;

    setUser(prevValue =>{
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios
      .post("http://localhost:3001/api/login", 
        user, 
        {headers:{'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:3000"}},
        // {withCredentials: true}
      )
      .then(function(response) {
        console.log("login response: ", response);
        if (response.data.success) {
          console.log("username returned: ", response.data.user.username)
          props.onUpdate({
            loggedIn: true,
            username: response.data.user.username
          })
          console.log(props.username)
          setRedirectTo("/");
        };
      })
      .catch(function(err){
          console.log("login response: ", err);
      })
  }

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  } else {
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">

              {/* Makes POST request to /login route */}
              <form action="/login" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="username" onChange={handleChange} value={user.username}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" onChange={handleChange} value={user.password}/>
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
              </form>

            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <a className="btn btn-block" href="/auth/google" role="button">
                <i className="fab fa-google" />
                Sign In with Google
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
}
}
export default LogIn;
