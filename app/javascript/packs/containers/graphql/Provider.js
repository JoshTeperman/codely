import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import client from '../../graphql'

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

Provider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Provider;