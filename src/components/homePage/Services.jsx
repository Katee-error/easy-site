import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Highlight,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import CodeIcon from "../../assets/icons/code.svg";

const MotionBox = motion(Box);

export const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });

  const MotionButton = motion(Button);

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      py={"100px"}
    >
      <Container maxW={"container.xl"}>
        <Text
          mb={"60px"}
          color={"brand.header"}
          fontWeight={400}
          fontSize={{ base: "30px", md: "48px" }}
        >
          Услуги нашего бутика
        </Text>

        <SimpleGrid columns={2} spacing={10}>
          <Card maxW="xl">
            <CardBody>
              <Stack mt="6" spacing="3">
                <HStack justifyContent={"space-between"} alignItems={'center'}>
                  <Text
                    fontSize="30px"
                    fontWeight={"500"}
                    color={"brand.header"}
                  >
                    Разработка сайтов
                  </Text>
                  <Flex
                    h={"50px"}
                    w={"50px"}
                    borderRadius={"100%"}
                    bg={"#f1f5f9"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image h={"25px"} src={CodeIcon} />
                  </Flex>
                </HStack>
                <Text fontSize="20px" color={"brand.subHeader"} m={'30px 0 10px'} >
                  <Highlight
                    query={["увеличивающие", "продажи"]}
                    styles={{ color: "brand.main" }}
                  >
                    Создаём современные сайты, увеличивающие продажи
                  </Highlight>
                </Text>

                <HStack spacing={4} flexWrap={"wrap"} color={"#0000F5"}>
                  <Box
                    size={"sm"}
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
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                  <Box
                    size={"sm"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                  <Box
                    size={"sm"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="xl">
            <CardBody>
              <Stack mt="6" spacing="3">
                <HStack justifyContent={"space-between"} alignItems={'center'}>
                  <Text
                    fontSize="30px"
                    fontWeight={"500"}
                    color={"brand.header"}
                  >
                   Пошив одежды
                  </Text>
                  <Flex
                    h={"50px"}
                    w={"50px"}
                    borderRadius={"100%"}
                    bg={"#f1f5f9"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image h={"25px"} src={CodeIcon} />
                  </Flex>
                </HStack>
                <Text fontSize="20px" color={"brand.subHeader"} m={'30px 0 10px'} >
                  <Highlight
                    query={["увеличивающие", "продажи"]}
                    styles={{ color: "pink" }}
                  >
                    Создаём современные трусики, с бабочкой на попе
                  </Highlight>
                </Text>

                <HStack spacing={4} flexWrap={"wrap"} color={"#0000F5"}>
                  <Box
                    size={"sm"}
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
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                  <Box
                    size={"sm"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                  <Box
                    size={"sm"}
                    p={"5px 15px"}
                    border=" 2px solid #0000F5"
                    borderRadius={"10px"}
                    _hover={{ bg: "brand.main", color: "white" }}
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                  >
                    bussiness
                  </Box>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
         
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};
