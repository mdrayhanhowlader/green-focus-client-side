import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { login, googleSignIn, setLoading, phoneSignIn, facebookSignIn } =
    useContext(AuthContext);
  const appVerifier = window.recaptchaVerifier;
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        if (user?.uid) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error("login failed by google", error))
      .finally(() => {});
    setLoading(false);
  };

  // login with email password
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user.email) {
          navigate(from, { replace: true });
        } else {
          console.log("please provide email");
        }
      })
      .catch((error) => console.error("login failed", error))
      .finally(() => {
        setLoading(false);
      });
  };

  // phone sign in
  const handlePhoneSignIn = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.number.value;
    console.log(phoneNumber);
    phoneSignIn(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // facebook signin
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Haven't account? Please Register!!
                </Link>
              </label>
            </form>
            <div className="form-control mb-6 w-4/5 mx-auto">
              <button onClick={handleGoogleSignIn} className="btn btn-primary">
                Google
              </button>
            </div>
            <div className="form-control mb-6 w-4/5 mx-auto">
              <button
                onClick={handleFacebookSignIn}
                className="btn btn-primary"
              >
                Facebook
              </button>
            </div>
            <div className="form-control mb-6 w-4/5 mx-auto">
              <form onSubmit={handlePhoneSignIn} action="">
                <input className="mb-4" name="number" type="text" />
                <button type="submit" className="btn btn-primary">
                  Phone Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
