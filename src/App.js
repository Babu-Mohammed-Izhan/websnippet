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

  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  const data = [
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
    {
      title: "Console Log",
      language: "javascript",
      code: `console.log('Hello');`,
      author: "izhan",
    },
  ];
  return (
    <ChakraProvider>
      <Box bgColor="purple.600">
        <Navigation
          handleOpenModal={() => openEnterModal()}
          handleSearch={handleSearch}
        />
        <Box bgColor="purple.600" minH="100vh" p="10px 20px 20px 20px">
          <Box marginLeft="15px" marginRight="15px">
            <SimpleGrid columns={[1, null, 2, 3]} spacing="20px">
              {data &&
                data.map((code, idx) => {
                  return (
                    <Codecard
                      key={idx}
                      title={code.title}
                      language={code.language}
                      code={code.code}
                      author={code.author}
                    />
                  );
                })}
            </SimpleGrid>
          </Box>
        </Box>
        <CodeModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
