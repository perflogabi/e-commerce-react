import './App.css';
import Header from './common/header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Pages from './pages/Pages';

export default function App() {
  return (
    <>
      
      <Router>
        <Header/>
        <Switch>
            <Route path="/" exact>
              <Pages />
            </Route>
        </Switch>
      </Router>

    </>
    
  );
}