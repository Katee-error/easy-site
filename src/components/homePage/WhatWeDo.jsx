import {Box, Button, Container, Text, VStack} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";

const MotionBox = motion(Box);

export const WhatWeDo = () => {
    const {ref, inView} = useInView({
        triggerOnce: true, // Анимация запускается только один раз
        threshold: 0.4, // Процент видимой области, после которого запускается анимация
    });

    const MotionButton = motion(Button);

    return (
        <MotionBox
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
            transition={{duration: 0.6, ease: "easeOut"}}
        >
            <Container maxW={"container.xl"}>
                <Box
                    mx="auto"
                    my={'100px'}
                >
                    <VStack spacing={6}>
                        <Box textAlign={'center'}>
                            <Text lineHeight={'1.1'} color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                                Делаем сайты
                            </Text>
                            <Text lineHeight={'1.1'} color={'brand.main'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                                по настоящему эффективными
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Text color={'brand.subHeader'} maxW={'780px'} fontWeight={500} fontSize={{base: "14px", md: "20px"}}>
                                Мы работаем в сфере создания и продвижения сайтов с 2008 года. За это время у нас сотни
                                реализованных проектов и благодарности от клиентов, которые смогли вместе с нами вывести
                                свой бизнес на новый уровень
                            </Text>
                        </Box>
                        <MotionButton
                            borderRadius="100px"
                            fontSize="18px"
                            fontWeight={600}
                            bg="brand.main"
                            _hover={{bgColor: "brand.main"}}
                            whileHover={{scale: 1.2}}
                            color="white"
                            h={'180px'}
                            w={'180px'}
                        >
                            Наша компания
                        </MotionButton>
                    </VStack>
                </Box>

            </Container>
        </MotionBox>
    );
};

