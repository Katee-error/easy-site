import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import CodeIcon from "../../assets/icons/code.svg";

const MotionBox = motion(Box);

export const OurWork = () => {
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
        <Box
          bg={"brand.main"}
          borderRadius={"10px"}
          color={"white"}
          p={"20px"}
          my={"50px"}
        >
          <Text
            mb={"60px"}
            color={"#white"}
            fontWeight={400}
            fontSize={{ base: "30px", md: "48px" }}
          >
            Для чего это надо и что это даст?
          </Text>

          <SimpleGrid columns={3} spacing={4}>
            <Card
              maxW="lg"
              bg={"transparent"}
              border={"none"}
              color={"white"}
              boxShadow={"none"}
            >
              <CardBody>
                <Stack mt="6" spacing="3">
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
                  <Text lineHeight={"1.1"} fontSize="30px" fontWeight={"500"} mb={'10px'}>
                    Стратегия SEO продвижения
                  </Text>
                  <Text fontSize="18px">
                    Мы разрабатываем и постоянно корректируем стратегию
                    продвижения вашего сайта для достижения максимальных
                    результатов.{" "}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              maxW="lg"
              bg={"transparent"}
              border={"none"}
              color={"white"}
              boxShadow={"none"}
            >
              <CardBody>
                <Stack mt="6" spacing="3">
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
                  <Text lineHeight={"1.1"} fontSize="30px" fontWeight={"500"}  mb={'10px'}>
                    Стратегия SEO продвижения
                  </Text>
                  <Text fontSize="18px">
                    Мы разрабатываем и постоянно корректируем стратегию
                    продвижения вашего сайта для достижения максимальных
                    результатов.{" "}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              maxW="lg"
              bg={"transparent"}
              border={"none"}
              color={"white"}
              boxShadow={"none"}
            >
              <CardBody>
                <Stack mt="6" spacing="3">
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
                  <Text lineHeight={"1.1"} fontSize="30px" fontWeight={"500"}  mb={'10px'}>
                    Стратегия SEO продвижения
                  </Text>
                  <Text fontSize="18px">
                    Мы разрабатываем и постоянно корректируем стратегию
                    продвижения вашего сайта для достижения максимальных
                    результатов.{" "}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </MotionBox>
  );
};
