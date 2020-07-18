import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  background-image: url(${({ url }) => url});
  background-size: 100%;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`;

const Title = styled.h2`
  background-color: white;
  margin: 12px;
  padding: 8px;
  display: inline-table;
  border-radius: 8px;
`;

const Quantity = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 22px;
  background-color: #ffffff;
  padding: 14px;
  margin: 8px;
  border-radius: 8px;
`;

const QuantityPanel = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
`;

const QuantityControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 54px;
  background-color: white;
  font-size: 22px;
  user-select: none;
`;

const Plus = styled(QuantityControls)`
  margin: 8px 0px 8px 8px;
  border-radius: 8px 0 0 8px;
  border-right: solid 1px;
`;

const Minus = styled(QuantityControls)`
  margin: 8px 8px 8px 0px;
  border-radius: 0 8px 8px 0;
  border-left: solid 1px;
`;

function DrinkCard({
  name,
  quantity,
  backgroundImageLink,
  onIncrease,
  onDecrease,
  ...rest
}) {
  return (
    <Card url={backgroundImageLink} {...rest}>
      <Title>{name}</Title>
      <QuantityPanel>
        <Plus onClick={onIncrease}>+</Plus>
        <Minus onClick={onDecrease}>-</Minus>
      </QuantityPanel>
      {quantity && <Quantity>{quantity}</Quantity>}
    </Card>
  );
}

export default DrinkCard;
