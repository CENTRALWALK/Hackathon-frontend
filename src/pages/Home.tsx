import { Box, Flex, Text, Heading, Img } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeScreen from "../screens/HomeScreen";
import { useState } from "react";
import "../styles/pages/home.css";
import KnowMore from "../screens/KnowMoreScreen";
import Developers from "../screens/DevelopersScreen";

const Home = () => {
  const [CurrentScreen, setCurrentScreen] = useState(HomeScreen);

  const homeScreenHandler = () => {
    setCurrentScreen(HomeScreen);
  };

  const knowMoreScreenHandler = () => {
    setCurrentScreen(KnowMore);
  };

  const developersScreenHandler = () => {
    setCurrentScreen(Developers);
  };

  const moonVisualizationHandler = () => {
    setCurrentScreen(<>Not Implemented</>);
  };
  return (
    <Flex h={"100vh"} flexDir={"column"}>
      {/* "Home", "Moon Visualization", "Know More", "Developers" */}
      <Navbar
        itemList={[
          { title: "home", handler: homeScreenHandler },
          { title: "Moon Visualization", handler: moonVisualizationHandler },
          { title: "Know More", handler: knowMoreScreenHandler },
          { title: "Developers", handler: developersScreenHandler },
        ]}
      />
      {CurrentScreen}
    </Flex>
  );
};

export default Home;
