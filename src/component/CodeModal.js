import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import CodeEditor from "@uiw/react-textarea-code-editor";
import { useFormik } from "formik";

const CodeModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      language: "",
      author: "",
    },
    onSubmit: (values) => {
      console.log(values, code);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: values.title,
          language: values.language.toLowerCase(),
          author: values.author,
          code,
        }),
      };
      fetch(`${process.env.PUBLIC_URL}api/snip`, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
      formik.resetForm();
      setCode("");
    },
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        size="xl"
        onClose={onClose}
        colorScheme="blackAlpha"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader size="2xl">Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </FormControl>

              <FormControl id="language" isRequired>
                <FormLabel>Language</FormLabel>
                <Input
                  placeholder="Language"
                  onChange={formik.handleChange}
                  value={formik.values.language}
                />
              </FormControl>

              <FormControl id="author" isRequired>
                <FormLabel>Made By:</FormLabel>
                <Input
                  placeholder="Author"
                  onChange={formik.handleChange}
                  value={formik.values.author}
                />
              </FormControl>
              <FormControl id="code" isRequired>
                <FormLabel>Code</FormLabel>
                <CodeEditor
                  value={code}
                  language="js"
                  placeholder="Please enter yout code here."
                  onChange={(e) => setCode(e.target.value)}
                  padding={15}
                  style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                  }}
                />
              </FormControl>
              <Button
                colorScheme="purple"
                mt={6}
                onClick={onClose}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CodeModal;
