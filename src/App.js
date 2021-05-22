import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { StyledContainer } from "./styled/StyledContainer";

function App() {
  return (
    <StyledContainer>
      <Navbar/>
    </StyledContainer>  
  );
}

export default App;
