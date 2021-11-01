import './App.css';

import MyList from './pages/MyList/MyList';
import SearchInput from './pages/SearchInput/SearchInput';
import Film from './pages/Film/Film';
import Menu from './components/Menu/Menu';
import { ComentsContextProvider } from './context/comentsContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Menu />
          <Switch>
            <ComentsContextProvider>
              <Route exact path="/">
                <SearchInput />
              </Route>
              <Route path="/myList">
                <MyList />
              </Route>
              <Route path="/film/:filmId">
                <Film />
              </Route>
            </ComentsContextProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
