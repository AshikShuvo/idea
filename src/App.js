import NavBar from "./components/ui/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ModelType from "./pages/ModelType";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { isAuth } from "./Auth/Auth";
import SubModelType from "./pages/SubModelType";
function App() {
   const [isAuthenticated,setAuth]=useState(isAuth());
   const [authHit,setAuthHit]=useState(false)
   useEffect(() => {
    setAuth(isAuth())
     
   }, [authHit])
  return (
    <>
      
      <Router>
       <NavBar auth={isAuthenticated} authHit={authHit} setAuthHit={setAuthHit}/>
        <Switch>
          <Route path="/" exact={true} component={()=><HomePage  />} />
          <Route path="/models" exact={true} component={()=><ModelType auth={isAuthenticated}/>} />
          <Route path="/models/:brandId/:name"  component={()=><SubModelType auth={isAuthenticated}/>} />
          <Route path="/login" exact={true} component={()=><LoginPage isAuthenticated={isAuthenticated} authHit={authHit} setAuthHit={setAuthHit}/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
