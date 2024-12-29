import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";

 function Login (props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const Context=useContext(NoteContext)
  const {setUserName}=Context
  let history =  useNavigate();
  
 

  const loginhandle = async (e) => {
    e.preventDefault();
    // console.log("handle login call ")
    // const host="http://localhost:5000"
    //backend deploye error on vercel so it deploye on render
      const host = "https://inotebook-back-3se3.onrender.com/"
        const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "authtoken":"pasteauthtoken here"
      },
      // creadentail me ui se data ko fill kar liya gaya hai isliye ham body me email,password credential se le sakte hai
    //   body me data lene ka tarika
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    // fetch() se jo respone mila hai use json me convert karta hau 
    const json = await response.json();
    // console.log({"response when login call: ":json});
    if (json.success) {
      // Save the authtoken in localStroge
      // setItem is predefine function
      localStorage.setItem("token", json.Authorization);
    
      // history ab "/" route par chala jaega automatically (yani ki login karne ke baad home par chala jaega )
      // Navigate('/') both syntex is valid 
      history("/home");
      alert("login success")
      // props.showAlert("create sucfuuly","success")
     
    } else {
       alert("Inavalid Cretentail retry")
       
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form className="mt-3" onSubmit={loginhandle}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fs-5 fw-bold ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fs-5 text-dark fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Login;