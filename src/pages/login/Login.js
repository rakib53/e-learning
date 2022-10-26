import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Input/InputField";
import { AuthProvider } from "../../UserContext/UserContext";
import "./Login.css";

const Login = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEye = () => {
    setEye(!eye);
  };

  const { signInWithGoogle, signInWithEmailPass } = useContext(AuthProvider);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const getInWithEmailPass = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailPass(email, password)
      .then((userCredential) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    event.target.email.value = "";
    event.target.password.value = "";
  };

  const SignInToGoogle = () => {
    signInWithGoogle(googleProvider).then((res) => {
      navigate(from, { replace: true });
    });
  };

  const signInToFacebook = () => {
    signInWithGoogle(facebookProvider).then((res) => {
      navigate(from, { replace: true });
    });
  };

  const signInToGithub = () => {
    signInWithGoogle(githubProvider).then((res) => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-page">
      <div className="login-page-wrapper">
        <h1 className="login create-acc">Login</h1>
        <div className="social-login">
          <FaFacebookF className="icon" onClick={signInToFacebook} />
          <AiOutlineGoogle className="icon" onClick={SignInToGoogle} />
          <FaLinkedinIn className="icon" onClick={signInToGithub} />
        </div>
        <hr className="horizontal-line" />
        <p className="use-in">Or use your mail for login.</p>
        <form
          className="registrationForm loginForm"
          onSubmit={getInWithEmailPass}
        >
          <Input type="email" placeholder="Enter email" name="email" />
          <div className="inputFiled">
            <Input
              type={eye ? "text" : "password"}
              placeholder="Enter password"
              name="password"
            />
            <div className="eye" onClick={handleEye}>
              {eye ? <BsEyeSlashFill /> : <BsFillEyeFill />}
            </div>
          </div>
          <div className="sign-up-btn-wrapper">
            <button className="sign-up" type="submit">
              sign up
            </button>
            <p className="need-acc">
              Need Account? <Link to={"/registration"}>Registration</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// onSubmit={getLogin}
