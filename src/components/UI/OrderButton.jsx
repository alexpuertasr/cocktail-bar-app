import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";

import Button from "./Button";

const StyledButton = styled(Button)`
  width: 80px;
  height: 80px;
`;

function OrderButton({ ...rest }) {
  return (
    <StyledButton type="warning" isRound {...rest}>
      <IconContext.Provider value={{ color: "white", size: 30 }}>
        <FiShoppingCart />
      </IconContext.Provider>
    </StyledButton>
  );
}

export default OrderButton;
