import Search from './pages/Search/Search';
import './App.css';
import MyList from './pages/MyList/MyList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myList">My List</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/myList">
              <MyList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
