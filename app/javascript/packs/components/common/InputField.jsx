import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input as MUIInput } from '@material-ui/core';

const StyledInput = styled(MUIInput)`
`;

const InputField = ({
  placeholder,
  required,
  multiline,
  defaultValue,
  fullWidth,
  autoFocus,
  ...rest
}) => (
  <StyledInput
    placeholder={placeholder}
    required={required}
    multiline={multiline}
    defaultValue={defaultValue}
    fullWidth={fullWidth}
    autoFocus={autoFocus}
    {...rest}
  />
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required:  PropTypes.bool,
  multiline: PropTypes.bool,
  defaultValue: PropTypes.string,
  fullWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
}

InputField.defaultProps = {
  required: false,
  multiline: false,
  defaultValue: "",
  fullWidth: true,
  autoFocus: false,
}

export default InputField;
