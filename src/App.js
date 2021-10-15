import React from "react";
import { Box, ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import Navigation from "./component/Navigation";
import Codecard from "./component/Codecard";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Navigation />
      <Box bgColor="gray.900" minH="100vh">
        <SimpleGrid columns={[2, null, 3, 5]} spacing="40px">
          <Box>
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
