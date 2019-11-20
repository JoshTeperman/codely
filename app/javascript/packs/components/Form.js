import React from 'react';
import PropTypes from 'prop-types';

const Form = ({children, ...rest}) => (
  <form {...rest}>
    {children}
  </form>
);

Form.proptypes = {
  children: PropTypes.oneOfType([
    Proptypes.arrayOf(PropTypes.node),
    PropTypes.PropTypes.node,
  ]).isRequired,
}

export default Form;