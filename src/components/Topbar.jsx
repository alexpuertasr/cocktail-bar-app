import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchDrinks, setCurrentIngredient } from "../actions";
import { getIngredients } from "../selectors";
import Select from "./UI/Select";

const Header = styled.header`
  width: 100%;
  padding: 22px;
  border-bottom: 3px solid #ebefef;
  background-color: white;
`;

function Topbar() {
  const dispatch = useDispatch();
  const ingredients = useSelector(getIngredients);

  const onChange = ({ value }) => {
    dispatch(setCurrentIngredient(value));
    dispatch(fetchDrinks(value));
  };

  return (
    <Header>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={ingredients}
        onChange={onChange}
        isSearchable
      />
    </Header>
  );
}

export default Topbar;
