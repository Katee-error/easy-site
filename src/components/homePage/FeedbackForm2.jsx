import { React, useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage, // error text check
  Input,
  Button,
  Divider,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import InputMask from "react-input-mask";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const FeedbackForm2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });

  // SENDING FORM

  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const formInitialDetails = {
    fullName: "",
    email: "",
    phone: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("https://example.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      if (!response.ok) {
        // Обработка HTTP ошибок
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        let result = await response.json();

        if (result.code === 200) {
          setStatus({ success: true, message: "Message sent successfully" });
          toast.success("Form submitted!");
        } else {
          setStatus({
            success: false,
            message: "Something went wrong, please try again later",
          });
          toast.error("Error submitting form!");
        }
      } else {
        setStatus({
          success: false,
          message: "Unexpected response from server",
        });
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ success: false, message: "Error submitting form" });
      toast.error("Error submitting form");
    }

    setFormDetails({
      fullName: "",
      email: "",
      phone: "",
    });
  };
  // Valid form
  const isFormValid =
    formDetails.fullName && formDetails.email && formDetails.phone;

  return (
    <MotionBox
      py={"100px"}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      textAlign={"center"}
    >
      <Container maxW="container.xl">
        <Box p={"40px 20px"} bg={"brand.lightGrey"} borderRadius={"10px"}>
          <Heading
            mb={"60px"}
            lineHeight={"1.1"}
            color={"brand.header"}
            fontWeight={400}
            fontSize={{ base: "30px", md: "48px" }}
          >
            Ваш сайт продвигается, но результаты вас не устраивают?
          </Heading>

          <form onSubmit={handleSubmit}>
            <HStack
              justifyContent={"space-around"}
              gap={"50px"}
              alignItems={"center"}
            >
              <VStack align={"start"} spacing="25px">
                <FormControl isRequired>
                  <FormLabel htmlFor="fullName" fontSize={"xs"}>
                    ФИО
                  </FormLabel>
                  <Input
                    borderColor={"gray.400"}
                    minW={"600px"}
                    type="text"
                    onChange={handleChange}
                    id="fullName"
                    name="fullName"
                    fontSize={"xs"}
                    value={formDetails.fullName}
                    placeholder={"Введите ФИО"}
                    _placeholder={{ fontSize: "xs" }}
                    _focus={{ borderColor: "brand.main" }}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="" fontSize={"xs"}>
                    Телефон
                  </FormLabel>
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    value={formDetails.phone}
                    onChange={handleChange}
                  >
                    {(inputProps) => (
                      <Input
                        {...inputProps}
                        borderColor={"gray.400"}
                        minW={{ base: "200px", md: "350px" }}
                        type="tel"
                        id="tel"
                        name="phone"
                        fontSize={"xs"}
                        placeholder="+7 (___) ___-__-__"
                        _placeholder={{ fontSize: "xs" }}
                        _focus={{ borderColor: "brand.main" }}
                      />
                    )}
                  </InputMask>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email" fontSize={"xs"}>
                    Email
                  </FormLabel>
                  <Input
                    borderColor={"gray.400"}
                    minW={"600px"}
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formDetails.email}
                    fontSize={"xs"}
                    placeholder={"Введите ваш email"}
                    _placeholder={{ fontSize: "xs" }}
                    _focus={{ borderColor: "brand.main" }}
                  />
                </FormControl>
              </VStack>
              <MotionButton
                borderRadius="100px"
                fontSize="18px"
                fontWeight={600}
                bg="brand.main"
                _hover={{ bgColor: "brand.main" }}
                whileHover={{ scale: 1.2 }}
                color="white"
                h={"180px"}
                w={"180px"}
              >
                Обсудить проект
              </MotionButton>
            </HStack>
          </form>
        </Box>
      </Container>
    </MotionBox>
  );
};
