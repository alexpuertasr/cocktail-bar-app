import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../selectors/";
import {
  increaseDrinkQuantity,
  decreaseDrinkQuantity,
  removeDrink,
} from "../actions";

import Purchase from "./Purchase";

import Button from "./UI/Button";
import CloseButton from "./UI/CloseButton";
import Modal from "./UI/Modal";
import Row from "./UI/Row";

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  margin: 12px;
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: auto;
  flex-basis: 0;
`;

const EmptyMessage = styled.div`
  font-size: 22px;
  text-align: center;
  color: #7d7d7d;
`;

const Footer = styled.footer`
  height: 78px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px;
`;

const FooterButtons = styled(Button)`
  height: 42px;
  border-radius: 2px;
  font-size: 24px;
`;

function OrderPanel() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const order = useSelector(getOrder);
  const isOrderEmpty = order.length === 0;

  const onIncrease = (id) => () => {
    dispatch(increaseDrinkQuantity(id));
  };

  const onDecrease = (id, quantity) => () => {
    if (quantity === 1) {
      dispatch(removeDrink(id));
    } else {
      dispatch(decreaseDrinkQuantity(id));
    }
  };

  const handleOnClick = () => {
    setShow(true);
  };

  return (
    <>
      <Modal show={show}>
        <Purchase />
      </Modal>
      <Link to="/">
        <StyledCloseButton />
      </Link>
      <Title>ORDER</Title>
      <Content>
        {!isOrderEmpty ? (
          order.map(({ id, name, quantity }) => (
            <Row
              key={id}
              id={id}
              name={name}
              quantity={quantity}
              onIncrease={onIncrease(id)}
              onDecrease={onDecrease(id, quantity)}
            />
          ))
        ) : (
          <EmptyMessage>Any drink is added to the order</EmptyMessage>
        )}
      </Content>
      <Footer>
        <FooterButtons isDisabled={isOrderEmpty} onClick={handleOnClick}>
          Purchase
        </FooterButtons>
      </Footer>
    </>
  );
}

export default OrderPanel;
