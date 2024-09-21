import React, { useState } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
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

      <Flex
        as={"nav"}
        color={"#0b0f0e"}
        gap={"60px"}
        fontWeight={700}
        fontSize={"16px"}
        alignItems={"center"}
        justifyContent={"center"}
        // bgColor={"white"}
        display={{ base: "none", md: "flex" }}
        // minH={"50px"}
      >
        <NavLink to="/home">
          <Link _hover={{ color: 'brand.main' }}>Главная</Link>
        </NavLink>
        <NavLink to="#" border={"none"}>
          <Link _hover={{ color: 'brand.main' }}>Готовые решения</Link>
        </NavLink>
        <NavLink to="#" border={"none"}>
          <Link _hover={{ color: 'brand.main' }}>Услуги</Link>
        </NavLink>
      </Flex>
  
  );
};

export default Navbar;
