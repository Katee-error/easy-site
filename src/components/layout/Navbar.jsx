import React, { useState } from "react";
import {
  Box,
  Flex,

  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setIsOpen(index);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
  };

  return (
    <Box>
      <Flex
        as={"nav"}
        color={"#0b0f0e"}
        gap={"40px"}
        fontWeight={400}
        fontSize={"14px"}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"white"}
        display={{ base: "none", md: "flex" }}
        minH={'50px'}
      >
        <NavLink to="/home">
          <Link _hover={{ textDecoration: "underline" }}>
            Главная
          </Link>
        </NavLink>
        <NavLink to="#" border={"none"}>
          <Link _hover={{ textDecoration: "underline" }}>
            Готовые решения
          </Link>
        </NavLink>
        <NavLink to="#" border={"none"}>
          <Link _hover={{ textDecoration: "underline" }}>
            Услуги
          </Link>
        </NavLink>

      </Flex>
    </Box>
  );
};

export default Navbar;
