import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../graphql'

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default Provider;