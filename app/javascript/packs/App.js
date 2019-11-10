import React from 'react';
import GraphQlProvider from './containers/graphql/Provider';
import Challenges from './containers/Challenges';

const App = () => {
  return (
    <GraphQlProvider>
      <Challenges />
    </GraphQlProvider>
  )
}

export default App;
