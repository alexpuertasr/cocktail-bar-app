import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetValues } from "../actions";

import Button from "./UI/Button";

const PurchasePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 84px;
`;

const StyledButton = styled(Button)`
  width: 78px;
  height: 34px;
`;

function Purchase() {
  const dispatch = useDispatch();

  const handleClose = () => {
    // TODO: Send the order to the backend
    dispatch(resetValues());
  };

  return (
    <PurchasePanel>
      The order was deliver to us, you will recive your drinks soon
      <Link to="/">
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </Link>
    </PurchasePanel>
  );
}

export default Purchase;
