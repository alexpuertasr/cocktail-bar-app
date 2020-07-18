import React, { useEffect } from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring/renderprops";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../actions";

import DrinksMatcher from "./DrinksMatcher";
import OrderPanel from "./OrderPanel";

const Fill = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const dispatch = useDispatch();

  // Fetch the ingredients only at the first load
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <Router>
      <Route
        render={({ location, ...rest }) => (
          <Fill>
            <Transition
              native
              items={location}
              keys={location.pathname.split("/")[1]}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {(loc, state) => (style) => (
                <Switch location={state === "update" ? location : loc}>
                  <Route path="/" exact>
                    <AnimatedDiv style={{ ...style }}>
                      <DrinksMatcher />
                    </AnimatedDiv>
                  </Route>
                  <Route path="/order">
                    <AnimatedDiv style={{ ...style }}>
                      <OrderPanel />
                    </AnimatedDiv>
                  </Route>
                </Switch>
              )}
            </Transition>
          </Fill>
        )}
      />
    </Router>
  );
}

export default App;
