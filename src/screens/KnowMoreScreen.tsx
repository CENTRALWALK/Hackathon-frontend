import { Flex, Box, Heading, Text, Img } from "@chakra-ui/react";
import "../styles/screens/developers.css";

const KnowMoreScreen = () => {
  return (
    <Flex
      grow={1}
      justifyContent={"space-around"}
      align={"center"}
      backgroundColor={"#F0F0F0"}
    >
      <Box w={900} textAlign={"center"} p={"3em"}>
        <Text className="home-title" fontSize={"4xl"}>
          Know more about the project
        </Text>
      </Box>
    </Flex>
  );
};

export default KnowMoreScreen;
