import React, { useState } from "react";

function Login() {
  // const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    // console.log(firstName);
    // console.log(age);
    console.log(email);
    console.log(password);
  };
  return (
    <main>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="text-center">Login Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <p>Email: {email}</p>
            <p>Password: {password}</p>

            <div className="card px-4 p-5">
              <div className="row">
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-success w-100"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
