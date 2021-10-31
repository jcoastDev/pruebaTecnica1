import './App.css';

import Search from './pages/Search/Search';
import MyList from './pages/MyList/MyList';
import Menu from './components/Menu/Menu';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Menu />
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
