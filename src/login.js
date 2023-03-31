import React, { useState } from 'react';
    // this bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
    // this my svg link from unDraw
import login from "./login.svg";


    // In this part I only used bootstrap bootstrap
function LoginSection() {
  return (

    <div className="container col-xl-10 col-xxl-8 px-4 py-5" id='login'>
    <div className="row align-items-center g-lg-5 py-5">
      
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 shadow p-3 mb-5 bg-body-tertiary rounded" style={{background:'#F5F1F5'}}>
            <div className="form-floating mb-3">
              <h2 className='text-end mb-2 py-2' style={{color:'#CB10D4'}}>Log In</h2>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            
            <button className="w-100 btn btn-lg btn-primary" type="submit" style={{background:'#CB10D4'}} >log In</button>
            <hr className="my-4"/>
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>

        <img src={login} alt="Your SVG" className="col-lg-7 " />
    </div>
  </div>

          
      
      
    
  );
}

export default LoginSection;