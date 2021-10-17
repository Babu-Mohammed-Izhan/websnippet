import React, { useEffect } from "react";
import {
  Box,
  ChakraProvider,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import Navigation from "./component/Navigation";
import Codecard from "./component/Codecard";
import CodeModal from "./component/CodeModal";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/snip`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openEnterModal = () => {
    onOpen();
  };

  const openSearchModal = () => {};

  return (
    <ChakraProvider>
      <Box bgColor="purple.800">
        <Navigation
          handleOpenModal={() => openEnterModal()}
          handleSearch={() => openSearchModal()}
        />
        <Box bgColor="purple.800" minH="100vh" padding="30px">
          <Box marginLeft="15px" marginRight="15px" marginTop="20px">
            <SimpleGrid columns={[1, null, 2, 3]} spacing="20px">
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
              <Codecard
                title="console"
                language="javascript"
                code="console.log('Hello');"
                author="izhan"
              />
            </SimpleGrid>
          </Box>
        </Box>
        <CodeModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
