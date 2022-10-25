import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/InputField";
import { AuthProvider } from "../../UserContext/UserContext";
import "./Registration.css";

const Registration = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const { signInWithGoogle, createUserWithEmailPass, userSignOut } =
    useContext(AuthProvider);

  const getUserWithEmailPass = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailPass(email, password)
      .then((res) => {
        navigate("/login");
        userSignOut()
          .then((res) => {})
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    event.target.email.value = "";
    event.target.password.value = "";
  };

  const SignInToGoogle = () => {
    signInWithGoogle(googleProvider)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signInToFacebook = () => {
    signInWithGoogle(facebookProvider)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signInToGithub = () => {
    signInWithGoogle(githubProvider)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleEye = () => {
    setEye(!eye);
  };

  // const SignUpWithPassEmail = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       setUser(user);
  //       displayName(name);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  //   event.target.name.value = "";
  //   event.target.email.value = "";
  //   event.target.password.value = "";
  // };

  // const displayName = (name) => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //   })
  //     .then(() => {
  //       console.log("successfully Updated Name");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="registration">
      <div className="registration_wrapper">
        <h1 className="create-acc">Create Account</h1>
        <div className="social-login">
          <FaFacebookF className="icon" onClick={signInToFacebook} />
          <AiOutlineGoogle className="icon" onClick={SignInToGoogle} />
          <FaGithub className="icon" onClick={signInToGithub} />
        </div>
        <hr className="horizontal-line" />
        <p className="use-in">Or use your mail for registration.</p>

        <form className="registrationForm" onSubmit={getUserWithEmailPass}>
          <Input type="text" placeholder="Enter Name" name="name" />
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
            <p className="login-link">
              Have an Account? <Link to={"/login"}>Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
