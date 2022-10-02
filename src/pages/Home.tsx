import { Box, Flex, Text, Heading, Img } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeScreen from "../screens/HomeScreen";
import { useState } from "react";
import "../styles/pages/home.css";
import MoonVisualization from "../screens/MoonVisualization";

const Home = () => {
  const [setHome, setCurrentHome] = useState(1);

  const homeScreenHandler = () => {
    setCurrentHome(1);
  };

  const moonVisualizationHandler = () => {
    setCurrentHome(0);
  };
  return (
    <Flex h={"100vh"} flexDir={"column"}>
      {/* "Home", "Moon Visualization", "Know More", "Developers" */}
      <Navbar
        itemList={[
          { title: "Home", handler: homeScreenHandler },
          { title: "Moon Visualization", handler: moonVisualizationHandler },
        ]}
      />
      {setHome ? (
        <HomeScreen moonHandler={moonVisualizationHandler} />
      ) : (
        <MoonVisualization />
      )}
    </Flex>
  );
};

export default Home;
