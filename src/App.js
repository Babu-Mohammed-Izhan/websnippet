import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Navigation from "./component/Navigation";
import Codecard from "./component/Codecard";
import "./App.css";

function App() {
  return (
    <Container className="App" maxW="xl" centerContent colorScheme="blackAlpha">
      <Navigation />
      <Box>
        <Codecard />
      </Box>
    </Container>
  );
}

export default App;
