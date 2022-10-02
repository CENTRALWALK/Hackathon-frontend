import { Flex, Box, Heading, Text, Img } from "@chakra-ui/react";
import Iframe from "react-iframe";
import "../styles/screens/moonVisualization.css";

const MoonVisualization = () => {
  return (
    <Flex
      grow={1}
      justifyContent={"space-around"}
      align={"center"}
      backgroundColor={"#F0F0F0"}
    >
      <Iframe
        url="/assets/3dmoon/3dmoon.html"
        position="absolute"
        width="100%"
        id="myId"
        height="80%"
      />
    </Flex>
  );
};

export default MoonVisualization;
