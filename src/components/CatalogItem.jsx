import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { makeGetDrinkOrdered, makeGetDrinkById } from "../selectors";
import {
  putDrink,
  removeDrink,
  increaseDrinkQuantity,
  decreaseDrinkQuantity,
} from "./../actions";

import DrinkCard from "./UI/DrinkCard";

const Cell = styled.div`
  display: flex;
  width: 100%;
  margin: 24px;
`;

function CatalogItem({ id }) {
  const { name, img } = useSelector(makeGetDrinkById(id));
  const { quantity } = useSelector(makeGetDrinkOrdered(id)) || {};
  const dispatch = useDispatch();

  const handleOnIncrease = () => {
    if (quantity) {
      dispatch(increaseDrinkQuantity(id));
    } else {
      dispatch(putDrink({ id, name }));
    }
  };

  const handleOnDecrease = () => {
    if (quantity !== 1) {
      // Check if quantity is in the order list before to decrease
      if (quantity) dispatch(decreaseDrinkQuantity(id));
    } else {
      dispatch(removeDrink(id));
    }
  };

  return (
    <Cell>
      <DrinkCard
        name={name}
        quantity={quantity}
        backgroundImageLink={img}
        onIncrease={handleOnIncrease}
        onDecrease={handleOnDecrease}
      />
    </Cell>
  );
}

export default CatalogItem;
