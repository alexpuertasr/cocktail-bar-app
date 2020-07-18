import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCurrentIngredient,
  getDrinksError,
  getDrinksIsLoading,
} from "../selectors";

import Topbar from "./Topbar";
import Catalog from "./Catalog";

import OrderButton from "./UI/OrderButton";

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 8vw;
  overflow-y: auto;
  flex-basis: 0;
`;

const StyledOrderButton = styled(OrderButton)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 12px;
`;

function DrinksMatcher() {
  const currentIngredient = useSelector(getCurrentIngredient);
  const isLoading = useSelector(getDrinksIsLoading);
  const error = useSelector(getDrinksError);

  return (
    <>
      <Topbar />
      {isLoading && <Content>Loading...</Content>}
      {error && <Content>{`${error}`}</Content>}
      {currentIngredient && !isLoading && !error && <Catalog />}
      {!currentIngredient && (
        <Content>
          Select your favourite ingredient and we will find the perfect drink
          for you
        </Content>
      )}
      <Link to="/order">
        <StyledOrderButton />
      </Link>
    </>
  );
}

export default DrinksMatcher;
