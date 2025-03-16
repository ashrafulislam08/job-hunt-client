import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row ">
        <div className="text-center lg:text-left md:w-1/3">
          <h1 className="text-5xl font-bold text-red-400">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full md:w-1/2 shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <p className="">
                    Already have an account?{" "}
                    <Link className="underline" to="/signin">
                      Sign In
                    </Link>{" "}
                  </p>
                </div>
                <button className="btn btn-error text-white mt-4 ">
                  Register
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
