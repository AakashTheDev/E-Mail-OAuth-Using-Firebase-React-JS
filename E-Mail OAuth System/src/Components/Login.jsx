import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function Login() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const nav = useNavigate();
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          if(user){
            setTimeout(() => {
              nav("/Dashboard")
            }, 1500);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
  };
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black w-[1600px]">
        <div className="bg-[#4ed6db] w-[500px] rounded-lg h-auto gap-2">
          <div className="text-black uppercase underline font-bold text-lg text-center">
            User Login
          </div>
          <form
            className="flex flex-col gap-4 p-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* <div className="flex flex-col gap-2">
              <label className="font-bold">E-Mail:</label>
              <input
                type="email"
                placeholder="Enter Your EMail"
                className="w-full p-2 rounded-lg border-2 border-black"
                onChange={(e) => setUser({ ...user, Email: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Password:</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="p-2 rounded-lg border-2 border-black"
                onChange={(e) => setUser({ ...user, Password: e.target.value })}
                required
              />
            </div> */}
            <div className="flex flex-col gap-2">
              <button className="p-2 bg-black text-white rounded-lg font-bold">
                Login
              </button>
            </div>
            <div className="flex justify-center items-center gap-2">
              Don't have an account?{" "}
              <Link to={"/Register"}>
                <span className="font-bold text-white cursor-pointer hover:scale-105 hover:underline">
                  Sign up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;