import {Box, Button, Container, Flex, keyframes, Link, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";

const MotionBox = motion(Box);

export const Description = () => {
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
            <Container maxW={"container.xl"} className={'container-fluid background'}>
                <Box
                    flexDirection={{base: "column", sm: "row-reverse"}}
                    display="flex !important"
                    alignItems="center"
                    justifyContent="space-around"
                    height="400px"
                    mx="auto"
                    my={'100px'}

                >
                    <Flex
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems={'start'}
                        w={{base: "100%", md: "100%"}}
                        h={'100%'}
                    >
                        <Flex>
                            <Text color={'brand.header'} lineHeight={'1.2'} fontWeight={400}
                                  fontSize={{base: "30px", md: "54px"}}>
                                Идеальные сайты<br/>для вашего бизнеса
                            </Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
                            <Flex flexDirection={'column'}>
                                <Text
                                    color={'brand.header'}
                                    fontWeight={400}
                                    fontSize={{base: "12px", md: "66px"}}
                                >
                                    15+
                                </Text>
                                <Text
                                    color={'brand.subHeader'}
                                    fontWeight={500}
                                    fontSize={{base: "12px", md: "26px"}}
                                    mt={'-14px'}
                                >
                                    лет экспертизы
                                </Text>
                            </Flex>
                            <Box mr={'60px'}>
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
                            </Box>
                        </Flex>

                    </Flex>
                </Box>

            </Container>
        </MotionBox>
    );
};

