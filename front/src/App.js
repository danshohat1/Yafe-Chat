// imports
import {BrowserRouter as Router, Route, Switch , Redirect} from "react-router-dom"
import Home from "./components/Home/Home.js"
import Web from "./components/webPage/webPage"
import {io} from "socket.io-client"

function App() {
  return (
    <> 

        
      <Router>
        <Switch>
          
          <Route path = "/home"            
                render={() =>
                  sessionStorage.getItem('username') ? (
                
                      <Web username = {window.sessionStorage.getItem("username")} socket = {io("http://localhost:5000" , {transports : ["websocket"]})}/>
                    ) : (
                            <Redirect to="/" />
                    )}
             />
          <Route path = "/"  render={() =>
                    sessionStorage.getItem('username') ? (
                      <Redirect to = "/home" />
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
