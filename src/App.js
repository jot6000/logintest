import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setisLogin] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");


  const login =(event)=>{
    event.preventDefault();

    if(isLogin){
      console.log("Login");
      return;
    }
    console.log("register");
  }

  return (
    <div className="App">
      <form onSubmit={login}>
        <h2>{isLogin? "Login" : "Register"}</h2>
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
        <input type="submit" value="submit"/>
        <p>
          {isLogin? "Don't have an account?" : "Already have an account?"}
          <button onClick={()=>setisLogin(!isLogin)} type="button">{isLogin? "Click Here to Register" : "Click Here to Login"}</button>
        </p>
      </form>
    </div>
  );
}

export default App;
