import React, { useState } from "react";
import img1 from "../assets/loginImage.jpg";

const LoginPage = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
console.log(email,"password",password);


function handleClick(event){
    event.preventDefault()
console.log(email,"password",password);
const payLoad = {email:email, password:password}
console.log(payLoad);
localStorage.setItem('myData', payLoad)
}

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col col-md-6">
          <img
            src={img1}
            alt="img"
            style={{ width: "90%" }}
            className="img-fluid"
          />
        </div>
        <div className="col col-md-6">
          <form className="">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <p>{email}</p>
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button onClick={handleClick} class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
