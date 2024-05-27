import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserLoginPage from "./Pages/user/UserLoginPage";
import UserRegister from "./Pages/user/UserRegister";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div >
<Router>
  <Routes>
  <Route path="/*" exact element={<Home/>}/>
  <Route path="/register*" exact element={<UserLoginPage/>}/>
  <Route path="/login*" exact element={<UserRegister/>}/>
  <Route path="/home*" exact element={<Home/>}/>

  </Routes>
</Router>
    </div>
  );
}

export default App;
