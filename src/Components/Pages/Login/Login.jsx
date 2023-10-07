import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginWithEmailAndPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Sign-in successful");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  //
  return (
    <>
      <div className="hero min-h-screen bg-yellow-50">
        <div className="hero-content flex-col w-full gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-[#5f17eef1] font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm max-h-screen shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="pb-8 px-8">
              Do Not have an account?
              <Link
                className="font-semibold py-2 rounded-lg text-orange-50 ml-4 px-5 bg-[#5f17eef1]"
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
