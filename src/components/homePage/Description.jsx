import {Box, Button, Container, extendTheme, Flex, keyframes, Link, Text} from "@chakra-ui/react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";

const MotionBox = motion(Box);

export const Description = () => {

    const {ref, inView} = useInView({
        triggerOnce: true, // Анимация запускается только один раз
        threshold: 0.4, // Процент видимой области, после которого запускается анимация
    });

    const MotionButton = motion(Button);

    const buttonVariants = {
        animate: {
            scale: [1, 1.5, 1],
            borderRadius: ["100px", "50px", "20px", "100px"],
            background: [
                "linear-gradient(132deg, #FC415A, #591BC5, #212335)",
                "linear-gradient(132deg, #FFDEE9, #B5FFFC)",
                "linear-gradient(132deg, #FC415A, #591BC5, #212335)",
            ],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
            },
        },
    };

    const controls = useAnimation();
    useEffect(() => {
        controls.start("animate");
    }, [controls]);


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
                    height="600px"
                    mx="auto"
                    my={'100px'}
                    bg="linear-gradient(132deg, #FC415A, #FFDEE9, #B5FFFC)"
                    backgroundSize="400% 400%"
                    animation="Gradient 15s ease infinite"
                    position="relative"
                    overflow="hidden"
                    p={'40px'}
                    borderRadius={'20px'}
                >
                    <Box  className="cube"/>
                    <Box className="cube"/>
                    <Box className="cube"/>
                    <Box className="cube"/>
                    <Box className="cube"/>
                    <Box className="cube"/>
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
                                Идеальные сайты<br/>для вашего бизнеса kjuxdfghjklkjhgfdsdfghjkl
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

                                fontSize="18px"
                                fontWeight={600}
                                color="white"
                                height="180px"
                                width="180px"
                                variants={buttonVariants}
                                initial={{ background: "linear-gradient(132deg, #FC415A, #591BC5, #212335)" }}
                                animate={controls}
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

