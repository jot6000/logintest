import { useState } from 'react';
import { useNavigate } from "react-router";

export default function LoginPage(props) {
  let navigate = useNavigate();
  
  const [isLogin, setisLogin] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  
  const [errorMessage, seterrorMessage] = useState("");

  const login =(event)=>{
    event.preventDefault();

    if(isLogin){
      const account = props.accounts.find(account=> account.email === email && account.password === password);
      if(account){
        seterrorMessage("");
        props.setuserAccount(account.email);
        navigate("/home");
      }
      else{
        seterrorMessage("Invalid email or password");
      }
      return;
    }

    if(password.length < 8){
      seterrorMessage("Password must be at least 8 characters long");
      return;
    }

    if(password !== confirmpassword){
      seterrorMessage("Passwords do not match");
      return;
    }

    if(props.accounts.find(account=> account.email === email)){
      seterrorMessage("Account already exists");
      return;
    }

    props.setaccounts([...props.accounts, {email, password}]);
    props.setuserAccount(email);
    navigate("/home");
  }

  return(
    <div className='login-page'>
      <form className='login-form' onSubmit={login}>
        <img src="/images/logo.png" alt="Logo" />
        <h1>{isLogin? "Login" : "Register"}</h1>
        <label>
          Email:
          <input name="email" type="email" required value={email} onChange={(e)=>setemail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input name="password" type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </label>
        {!isLogin?
          <label>
            Confirm Password:
            <input name="confirmPassword" type="password" required value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
          </label>:
          null
        }
        <input type="submit" value="Submit"/>
        <p>
          {isLogin? "Don't have an account?" : "Already have an account?"}
          <button 
            className='switch-form'
            onClick={()=>setisLogin(!isLogin)}
            type="button"
          >
            {isLogin? "Click Here to Register" : "Click Here to Login"}
          </button>
        </p>
        {errorMessage? <p className='error-message'>{errorMessage}</p> : null}
      </form>
    </div>
  );
}