import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserLoginPage from "./Pages/user/UserLoginPage";
function App() {
  return (
    <div >
<Router>
  <Routes>
  <Route path="/*" exact element={<UserLoginPage/>}/>

  
  </Routes>
</Router>
    </div>
  );
}
export default App;
