import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h2 className="title">Our Blog</h2>
      <div className="blog-wrapper">
        <div className="blog">
          <h2 className="question">1. what is cors?</h2>
          <p className="">
            Ans:- Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
        <div className="blog">
          <h2 className="question">
            2. Why are you using firebase?
            <br></br>
            What other options do you have to implement authentication?
          </h2>
          <p className="">
            Ans:- Firebase provides tools to grow your app and business, for
            startups & global enterprises. Get your app up and running quickly &
            securely with fully managed backend infrastructure. Trusted by
            +200,000 Devs. Cross-Platform Solutions. Customize Your App.
            <br></br>
            <br></br>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>

        <div className="blog">
          <h2 className="question">3. How does the private route work?</h2>
          <p className="">
            Ans:- The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. The current logged in user (authUser) is
            retrieved from Redux state with a call to the useSelector() hook.
            Redux is used in this example however it is not required to
            implement a Private Route component in React Router 6. You could use
            a different state management library or any approach you prefer to
            get the logged in status of the user
          </p>
        </div>

        <div className="blog">
          <h2 className="question">4. What is Node? How does Node work?</h2>
          <p className="">
            Ans:- It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
