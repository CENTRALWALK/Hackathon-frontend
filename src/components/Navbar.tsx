import { Flex, Text, Img } from "@chakra-ui/react";
import "../styles/components/navbar.css";

import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";

interface IActionElement {
  handler: () => void;
  title: string;
}

interface INavbar {
  itemList: IActionElement[];
}

const Navbar = ({ itemList }: INavbar) => {
  const navigator = useNavigate;
  return (
    <Flex w={"full"} height="4em" bg={"#F6F6F6"}>
      <Flex>
        <Flex width={62} mr={'0.5em'} ml={'0.5em'}>
          <Logo className="logo-img" height={64} fill={"#61357f"} />
        </Flex>
        {itemList.map((item) => {
          return (
            <Flex
              className="nav-button"
              justify={"center"}
              align={"center"}
              p={"2em"}
              onClick={item.handler}
            >
              <Text fontSize={"xl"}>{item.title}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
