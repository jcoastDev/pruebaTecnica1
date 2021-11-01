import './App.css';

import MyList from './pages/MyList/MyList';
import SearchInput from './pages/SearchInput/SearchInput';
import Film from './pages/Film/Film';
import Menu from './components/Menu/Menu';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/">
              <SearchInput />
            </Route>
            <Route path="/myList">
              <MyList />
            </Route>
            <Route path="/film/:id">
              <Film />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
