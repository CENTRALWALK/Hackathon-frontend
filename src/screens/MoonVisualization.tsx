import {
  Flex,
  Box,
  Heading,
  Text,
  Img,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Iframe from "react-iframe";
import "../styles/screens/moonVisualization.css";

const MoonVisualization = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      grow={1}
      justifyContent={"space-around"}
      align={"center"}
      backgroundColor={"#F0F0F0"}
      flexDir={"column"}
    >
      <Iframe
        url="/assets/3dmoon/3dmoon.html"
        // position="absolute"
        width="100%"
        id="myId"
        height="100%"
        onLoad={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Heeey! Just a quick tip</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            To help you understand what is happening: The purple ball represents
            the epicenter and the red squares are places that likely felt the
            quake and how strong it was, represented by how opaque it is.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default MoonVisualization;
