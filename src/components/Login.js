import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";




const Login = () => {

  const [isSignInForm, useIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick =()=>{
    // validate the form data

    console.log(email);  //returns a object
    console.log(password); //returns a object

    console.log(email.current.value); 
    console.log(password.current.value); 

    const message = checkValidateData(email.current.value ,password.current.value);
    // console.log(message);
    setErrorMessage(message);

    // Now we can move ahead for the sign in sign up

    
  }



  const ToggleSignInForm = () =>{
    useIsSignInForm(!isSignInForm);

  } 

  
  return (
    <div className="">
      <Header/>
      <div className="absolute"> 
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"/>
      </div>
      
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl pb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-3 my-3 w-full  bg-gray-700"/>)}

        <input ref={email} type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-3 my-3 w-full  bg-gray-700"/>
        <p className="text-red-700 py-1 text-bold">{errorMessage}</p>
        <button className="p-3 w-full bg-red-700 my-3 rounded-lg " onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-3 cursor-pointer" onClick={ToggleSignInForm}>{isSignInForm ?"New to Netflix? Sign Up Now": "Already registered ?Sign In Now "}</p>
      </form>
    </div>
  );
}

export default Login;


// rafce
