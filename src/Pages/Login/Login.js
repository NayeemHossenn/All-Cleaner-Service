import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/others/loginfinal.png";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGoogleSignIn = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero  w-full">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="login" />
            </div>
          </form>
          <p className="text-center">
            Have an Account?
            <Link className="text-orange-600 text-bold" to="/signup">
              SignUp
            </Link>
          </p>
          <button onClick={handleGoogleSignIn} className="btn btn-primary mt-3">
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
