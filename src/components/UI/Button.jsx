import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ type }) =>
    type === "warning" ? "#f44336" : "#28a745"};
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  border-radius: ${({ isRound }) => (isRound ? "50%" : "0")};
  border: none;
  cursor: pointer;
  outline: none;
  color: #ffffff;

  :disabled {
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.26);
    cursor: auto;
  }
`;

function Button({ isDisabled, children, ...rest }) {
  return (
    <StyledButton disabled={isDisabled} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  isRound: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "basic",
  isRound: false,
  isDisabled: false,
};

export default Button;
