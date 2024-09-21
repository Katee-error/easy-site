import { NavLink } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";

import logo from "../../assets/logo/mp-logo.png";

import wbIcon from "../../assets/icons/wb.svg";
import ozonIcon from "../../assets/icons/ozon.svg";
import instagramIcon from "../../assets/icons/brand-instagram.svg";
import Telegram from "../../assets/icons/Telegram.svg";

import Navbar from "./Navbar.jsx";
import { FiSearch } from "react-icons/fi";
import React from "react";

const Header = () => {
  return (
    <Box
      as="nav"
      position="relative"
      top={0}
      left={0}
      width="100%"
      backgroundColor="white"
      py="10px"
      zIndex={5}
      borderBottom={"1px solid rgba(11, 15, 14, 0.15)"}
    >
      <Box>
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          gap={"50px"}
          alignItems={"center"}
          mx={"12px"}
          minH={"90px"}
          display={{ base: "none", md: "flex" }}
        >
          <Link as={NavLink} to="/">
            <Image src={logo} alt="logo" h={"50px"} objectFit={"contain"} />
          </Link>

          <Navbar />

          <Button
            p={{ base: "10px 20px", md: "25px 30px" }}
            borderRadius="100px"
            fontSize="16px"
            fontWeight={600}
            bg="brand.main"
            _hover={{ bgColor: "hover.button" }}
            color="white"
          >
            Связаться с нами
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
