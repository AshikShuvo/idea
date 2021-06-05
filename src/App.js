import NavBar from "./components/ui/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ModelType from "./pages/ModelType";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
function App() {
    const [auth,setAuth]=useState(false);
  return (
    <>
      
      <Router>
       <NavBar auth={auth} logOutFunction={setAuth}/>
        <Switch>
          <Route path="/" exact={true} component={()=><HomePage  />} />
          <Route path="/models" exact={true} component={()=><ModelType auth={auth}/>} />
          <Route path="/login" exact={true} component={()=><LoginPage/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
