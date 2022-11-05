import React from "react";
import { Link } from "react-router-dom";

const Singin = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content w-full md:w-1/2 flex flex-col">
        <div>
          <h1 className="uppercase text-2xl">SingIn</h1>
        </div>
        <div className="w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="flex justify-between w-1/2">
                <label className="label">
                  <Link  className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <span>||</span>
                </label>
                <label className="label">
                  <Link to='/singup' className="label-text-alt link link-hover">
                    Singup now?
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Singin</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singin;
