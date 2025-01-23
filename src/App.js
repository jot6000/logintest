import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login";
import About from "./pages/about";
import './App.css';
import WithNavbar from "./pages/withNavbar";
import MyAccount from "./pages/myaccount";
import Home from "./pages/home";
import { useState } from "react";

function App() {
  const [accounts, setaccounts] = useState([
    {
      email: "jimmmy@gmail.com",
      password: "Password123"
    },
  ]);
  const [userAccount, setuserAccount] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage setuserAccount={setuserAccount} accounts={accounts} setaccounts={setaccounts} />} />
          <Route element={<WithNavbar setuserAccount={setuserAccount}/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/myaccount" element={<MyAccount userAccount={userAccount}/>} />
            <Route path="/about" element={<About/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
