// imports
import {BrowserRouter as Router, Route, Switch , Redirect} from "react-router-dom"
import Home from "./components/Home/Home.js"
import Web from "./components/webPage"

function App() {
  return (
    <> 

        
      <Router>
        <Switch>
          
          <Route path = "/home"            
                render={() =>
                    localStorage.getItem('username') ? (
                      <Web username = {window.localStorage.getItem("username")} socket = {window.localStorage.getItem("socket")}/>
                    ) : (
                            <Redirect to="/" />
                    )}
             />
          <Route path = "/"  render={() =>
                    localStorage.getItem('username') ? (
                      <Web username = {window.localStorage.getItem("username")} socket = {window.localStorage.getItem("socket")}/>
                    ) : (
                            <Home />
                    )}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
