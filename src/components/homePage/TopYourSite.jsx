import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    Flex,
    Image,
    SimpleGrid,
    Stack, Tab, TabList,
    TabPanel, TabPanels, Tabs,
    Text,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";
import CodeIcon from "../../assets/icons/code.svg";

const MotionBox = motion(Box);


export const TopYourSite = () => {
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
                    bg={'brand.main'}
                    borderRadius={'10px'}
                    color={'white'}
                    p={'20px'}
                >
                    <Text mb={'40px'} color={'#white'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                        ПРОДВИНЕМ ВАШ САЙТ В ТОП-10
                    </Text>
                    <Text mb={'20px'} color={'#white'} fontWeight={400} fontSize={{base: "30px", md: "20px"}}>
                        Наши SEO-специалисты детально проанализируют ситуацию и разработают стратегию продвижения, которая обеспечит вашему сайту выход в ТОП Яндекс и Google.


                    </Text>

                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            <Tab color={'white'} >Что мы делаем</Tab>
                            <Tab color={'white'}>Что вы получите</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SimpleGrid columns={4} spacing={2}>
                                <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                    <CardBody>
                                        <Stack mt='6' spacing='3'>
                                            <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                  alignItems={'center'} justifyContent={'center'}>
                                                <Text color={'white'} fontSize={'24px'}>01</Text>
                                            </Flex>
                                            <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                            <Text fontSize='16px'>
                                                Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>

                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={4} spacing={2}>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg' bg={'transparent'} border={'none'} color={'white'} boxShadow={'none'}>
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#6366F1'}
                                                      alignItems={'center'} justifyContent={'center'}>
                                                    <Text color={'white'} fontSize={'24px'}>01</Text>
                                                </Flex>
                                                <Text fontSize='20px' fontWeight={'500'}>Анализ и стратегия</Text>
                                                <Text fontSize='16px'>
                                                    Проводим комплексный анализ рыночной ниши и конкурентов, выявляем точки роста и формируем долгосрочную стратегию раскрутки сайта. </Text>
                                            </Stack>
                                        </CardBody>
                                    </Card>

                                </SimpleGrid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Box>

            </Container>
        </MotionBox>
    );
};

