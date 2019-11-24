import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MUIButton from '@material-ui/core/Button';

const StyledButton = styled(MUIButton)`
`;

const Button = ({
  children,
}) => (
  <StyledButton>
    {children}
  </StyledButton>
);

Button.proptypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  children: {},
};

export default Button;
