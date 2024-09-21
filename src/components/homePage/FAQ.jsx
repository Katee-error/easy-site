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
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";

const MotionBox = motion(Box);


export const FAQ = () => {
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
            <Container maxW={"container.lg"}>
                <Box
                    mx="auto"
                    my={'100px'}
                    p={'20px'}
                    borderRadius={'20px'}
                >
                    <Text mb={'40px'} lineHeight={'1.1'} color={'brand.header'} fontWeight={500} fontSize={{base: "30px", md: "48px"}}>
                        Часто задаваемые вопросы по продвижению сайтов
                    </Text>
                    <Accordion color={'brand.subHeader'} >
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Почему стоит заказать продвижение сайта в Сайт-Протект?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Сколько времени необходимо на вывод сайта в ТОП?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Как долго сайт будет находиться в ТОПах Яндекс и Google?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Кто участвует в работе над проектом?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Что нужно для раскрутки сайта, который только создан?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Почему после SEO оптимизации мой сайт не находится на первом месте по выдаче?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={'30px'}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Кому подходит поисковая оптимизация ресурса в поисковых системах?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Box>

            </Container>
        </MotionBox>
    );
};

