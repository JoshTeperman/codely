import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import GraphQlProvider from './containers/graphql/Provider';
import Challenges from './containers/Challenges';
import CreateChallenge from './containers/CreateChallenge';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <GraphQlProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/challengesnew" component={CreateChallenge} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </GraphQlProvider>
  )
}

export default App;
