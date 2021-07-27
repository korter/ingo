import React, { useEffect } from "react";
//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStles";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
