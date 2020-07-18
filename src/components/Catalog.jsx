import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getDrinksIds } from "../selectors";

import CatalogItem from "./CatalogItem";

const Grid = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  overflow-y: auto;
  flex-basis: 0;
`;

const Cell = styled.div`
  display: flex;
  width: 100%;
  height: 340px;

  @media (min-width: 680px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 1064px) {
    flex: 0 0 32%;
    max-width: 32%;
  }
`;

function App() {
  const allIds = useSelector(getDrinksIds);

  return (
    <Grid>
      {allIds.map((id) => (
        <Cell key={id}>
          <CatalogItem id={id} />
        </Cell>
      ))}
    </Grid>
  );
}

export default App;
