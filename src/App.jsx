import "./style.scss";
import "./_app.scss";
import Main from "./main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Main />
          <Route path="*">
            <h2>PAGINA NO ENCONTRADA</h2>
            <h3>Error 404</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
