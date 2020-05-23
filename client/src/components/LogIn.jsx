import React, {useState} from "react";
import axios from "axios";

function LogIn() {

  const [user, setUser] = useState({username:"", password:""});

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

    axios.post("http://localhost:5000/login", user, {headers:{'Content-Type': 'application/json'}})
      .then(function(response) {
        console.log(response);
      });
  }
  
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
                  <input type="email" className="form-control" name="username" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" onChange={handleChange} />
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

export default LogIn
