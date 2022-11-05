import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Singup = () => {
  const { singupUser } = useContext(AuthContext);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullname.value;
    const imgUrl = form.imgurl.value;
    const email = form.email.value;
    const password = form.password.value;
    singupUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content w-full md:w-1/2 flex flex-col">
        <div>
          <h1 className="uppercase text-2xl">SingUp</h1>
        </div>
        <div className="w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmitForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                name="imgurl"
                placeholder="url"
                className="input input-bordered w-full"
                required
              />
            </div>
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
                  <Link to="/singin" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Singup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
