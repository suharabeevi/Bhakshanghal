import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserLoginPage from "./Pages/user/UserLoginPage";
import UserRegister from "./Pages/user/UserRegister";
function App() {
  return (
    <div >
<Router>
  <Routes>
  <Route path="/*" exact element={<UserLoginPage/>}/>
  <Route path="/register*" exact element={<UserRegister/>}/>

  </Routes>
</Router>
    </div>
  );
}

export default App;
