import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Img1 from "../../assets/Kaiser _ Great demos win business.jpeg";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

export const Cases = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });

  const MotionButton = motion(Button);

  return (
    <MotionBox
      py={"100px"}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW={"container.xl"}>
        <Text
          mb={"60px"}
          color={"brand.header"}
          fontWeight={400}
          fontSize={{ base: "30px", md: "48px" }}
        >
          Примеры наших сайтов
        </Text>

        <SimpleGrid minChildWidth={"500px"} spacing={"80px"}>
          <Card maxW="lg" p={"20px"}>
            <CardBody>
              <VStack spacing={2} alignItems={"start"}>
                <Image
                  src={Img1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  mb={"30px"}
                />
                <Text fontSize={"30px"} color={"brand.subHeader"} mb={"10px"}>
                  Сайт проекта Kaiser
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"15px"}
                >
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    e-comerce
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    site
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    sturt-up
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
          <Card maxW="lg" p={"20px"}>
            <CardBody>
              <VStack spacing={2} alignItems={"start"}>
                <Image
                  src={Img1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  mb={"30px"}
                />
                <Text fontSize={"30px"} color={"brand.subHeader"} mb={"10px"}>
                  Сайт проекта Kaiser
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"15px"}
                >
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    e-comerce
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    site
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    sturt-up
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
          <Card maxW="lg" p={"20px"}>
            <CardBody>
              <VStack spacing={2} alignItems={"start"}>
                <Image
                  src={Img1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  mb={"30px"}
                />
                <Text fontSize={"30px"} color={"brand.subHeader"} mb={"10px"}>
                  Сайт проекта Kaiser
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"15px"}
                >
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    e-comerce
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    site
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    sturt-up
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
          <Card maxW="lg" p={"20px"}>
            <CardBody>
              <VStack spacing={2} alignItems={"start"}>
                <Image
                  src={Img1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  mb={"30px"}
                />
                <Text fontSize={"30px"} color={"brand.subHeader"} mb={"10px"}>
                  Сайт проекта Kaiser
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"15px"}
                >
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    e-comerce
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    site
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    sturt-up
                  </Box>
                  <Box
                    size={"sm"}
                    color={"#0000F5"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
        <Box textAlign={"center"} mt={"70px"} _hover={{ color: "brand.main" }}>
          <Link>Смотреть все</Link>
        </Box>
      </Container>
    </MotionBox>
  );
};
