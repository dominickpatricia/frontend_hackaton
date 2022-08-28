import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Main from './pages/main';
import Form from './pages/form';

function App() {
  return (

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
                    <Redirect to="/main" />
            </Route>

            <Route  path="/main" component={Main}/>
            <Route path="/register" component={Form} />
          </Switch>
        </BrowserRouter>

  );
}

export default App;
