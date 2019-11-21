import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import GraphQlProvider from './containers/graphql/Provider';
import Challenges from './containers/Challenges';
import CreateChallenge from './containers/CreateChallenge';

const App = () => {
  return (
    <GraphQlProvider>
      <BrowserRouter>
        <Switch>
          <Route exact to="/" component={Challenges} />
          <Route to="/challenges/new" component={CreateChallenge}/>
          <Route component={NotFound} />
        </Switch>        
      </BrowserRouter>
    </GraphQlProvider>
  )
}

export default App;
