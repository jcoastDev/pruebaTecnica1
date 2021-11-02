import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ComentsContextProvider } from './context/comentsContext';
import Menu from './components/Menu/Menu';

const SearchInput = lazy(() => import('./pages/SearchInput/SearchInput'));
const Film = lazy(() => import('./pages/Film/Film'));
const MyList = lazy(() => import('./pages/MyList/MyList'));

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Menu />
          <Switch>
            <ComentsContextProvider>
              <Route exact path="/">
                <Suspense fallback={<div>Loading...</div>}>
                  <SearchInput />
                </Suspense>
              </Route>
              <Route path="/myList">
                <Suspense fallback={<div>Loading...</div>}>
                  <MyList />
                </Suspense>
              </Route>
              <Route path="/film/:filmId">
                <Suspense fallback={<div>Loading...</div>}>
                  <Film />
                </Suspense>
              </Route>
            </ComentsContextProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
