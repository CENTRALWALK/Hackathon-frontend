import { Flex, Box, Heading, Text, Img } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../styles/screens/homescreen.css";

interface moonProps {
  moonHandler: () => void;
}

const HomeScreen = ({ moonHandler }: moonProps) => {
  const navigator = useNavigate();
  return (
    <Flex
      grow={1}
      justifyContent={"space-around"}
      align={"center"}
      backgroundColor={"#F0F0F0"}
    >
      <Box w={900} textAlign={"start"} p={"3em"}>
        <Text className="home-title" fontSize={"4xl"}>
          Moonquake Map
        </Text>
        <Text
          className="home-text"
          fontSize={"2xl"}
          fontFamily="Fauna One, serif"
        >
          Such challenge emerges from Apollo's astronauts seismic instruments
          left behind in missions that collects geophysics data in landing sites
          on the Moon's surfice. Those instruments were projected to monitor
          each landing site ambient for at leat one year after the astronauts
          return to earth, while the instruments detect moonquakes and meteorite
          impacts and send these data back to earth, for analisys. The two
          different PSE packages are: EASEP (Early Apollo Surface Experiments
          Package), configured by Apollo 11 astronauts, and ALSEP (Apollo Lunar
          Surface Unidades do Pacote de Experimentos). Therefore, our solution
          is to develop an app that plots seismic data detecteb by EASEP and
          ALSEP in an interactive 3d lunar globe. Scroll over the moon to find
          out more
        </Text>
      </Box>
      <Box
        w={550}
        borderRadius={400}
        className={"moon-img"}
        onClick={() => {
          moonHandler();
        }}
      >
        <Img src="/assets/img/full-moon.png" />
      </Box>
    </Flex>
  );
};

export default HomeScreen;
