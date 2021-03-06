import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import GraphQlProvider from './containers/graphql/Provider';
import Challenges from './containers/Challenges';
import NewChallengeForm from './containers/NewChallengeForm';
import NoMatch from './components/NoMatch';
import About from './components/About';

const App = () => {
  return (
    <GraphQlProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/challenges/new" component={NewChallengeForm} />
          <Route exact path="/challenges" component={Challenges} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Challenges} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </GraphQlProvider>
  )
}

export default App;
