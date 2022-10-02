import { Box, Flex, Text, Heading, Img } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeScreen from "../screens/HomeScreen";
import { useState } from "react";
import "../styles/pages/home.css";
import MoonVisualization from "../screens/MoonVisualization";

const Home = () => {
  const [CurrentScreen, setCurrentScreen] = useState(HomeScreen);

  const homeScreenHandler = () => {
    setCurrentScreen(HomeScreen);
  };

  const moonVisualizationHandler = () => {
    setCurrentScreen(<MoonVisualization />);
  };
  return (
    <Flex h={"100vh"} flexDir={"column"}>
      {/* "Home", "Moon Visualization", "Know More", "Developers" */}
      <Navbar
        itemList={[
          { title: "home", handler: homeScreenHandler },
          { title: "Moon Visualization", handler: moonVisualizationHandler },
        ]}
      />
      {CurrentScreen}
    </Flex>
  );
};

export default Home;
