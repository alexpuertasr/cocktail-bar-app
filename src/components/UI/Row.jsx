import React from "react";
import styled from "styled-components";

import Button from "./Button";

const Row = styled.div`
  display: flex;
  margin: 0 15%;
  margin-bottom: 4px;
  justify-content: space-between;
  font-size: 18px;
`;

const Cell = styled.div`
  display: flex;
`;

const Quantity = styled.div`
  padding: 0 16px;
`;

const StyledButton = styled(Button)`
  width: 26px;
  height: 26px;
  border-radius: 2px;
`;

function OrderPanel({ id, name, quantity, onIncrease, onDecrease }) {
  return (
    <Row key={id}>
      <div>{name}</div>
      <Cell>
        <StyledButton onClick={onIncrease}>+</StyledButton>
        <Quantity>{quantity}</Quantity>
        <StyledButton type="warning" onClick={onDecrease}>
          -
        </StyledButton>
      </Cell>
    </Row>
  );
}

export default OrderPanel;
