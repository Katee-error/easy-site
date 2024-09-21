import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Text,
  Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const MotionBox = motion(Box);

const questions = [
  {
    id: 1,
    title: "Почему стоит заказать продвижение сайта в Сайт-Протект?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Сколько времени необходимо на вывод сайта в ТОП?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Как долго сайт будет находиться в ТОПах Яндекс и Google?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "Кто участвует в работе над проектом?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    title: "Что нужно для раскрутки сайта, который только создан?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    title:
      "Почему после SEO оптимизации мой сайт не находится на первом месте по выдаче?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    title:
      "Кому подходит поисковая оптимизация ресурса в поисковых системах?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const FAQ = () => {
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
      <Container maxW={"container.lg"}>
        <Box p={"20px"} borderRadius={"20px"}>
          <Text
            mb={"40px"}
            lineHeight={"1.1"}
            color={"brand.header"}
            fontWeight={500}
            fontSize={{ base: "30px", md: "48px" }}
          >
            Часто задаваемые вопросы по продвижению сайтов
          </Text>
          <Accordion allowToggle>
            {questions.map((question, i) => (
              <AccordionItem mb={"20px"} border={"transparent"} key={i}>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "brand.main",
                      color: "white",
                    }}
                    borderRadius={"10px"}
                    color={'brand.main'}
                    border={"#0000F5 solid 1px"}
                    p={'15px '}
               
                  >
                    <Box as="span" flex="1" textAlign="left">
                      <Flex gap={"10px"} alignItems={"center"}>
                        <Text fontSize={"18px"} fontWeight={500}>
                          {question.title}
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel py={"30px"}>
                  <Text mb={"20px"} px={"20px"}>
                    {question.desc}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>
    </MotionBox>
  );
};
