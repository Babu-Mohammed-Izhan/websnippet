import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const CodeModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} size="xl" onClose={onClose} colorScheme="purple">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader size="2xl">Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

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
