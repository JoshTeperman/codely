import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import GraphQlProvider from './containers/graphql/Provider';
import Challenges from './containers/Challenges';
import CreateChallenge from './containers/CreateChallenge';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import About from './components/About';

const App = (props) => {
  return (
    <GraphQlProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/challenges/new" render={props => <CreateChallenge {...props} />} />
          <Route exact path="/challenges" render={props => <Challenges {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </GraphQlProvider>
  )
}

export default App;
