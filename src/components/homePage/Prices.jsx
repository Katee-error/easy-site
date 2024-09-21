import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    ListItem,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    UnorderedList,
    VStack
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";
import * as PropTypes from "prop-types";

const MotionBox = motion(Box);


TabList.propTypes = {children: PropTypes.node};
export const Prices = () => {
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
                    <Text mb={'40px'} color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                        Стоимость базовых услуг
                    </Text>

                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList mb={'20px'}>
                            <Tab fontSize={'20px'}>Разработка сайтов</Tab>
                            <Tab fontSize={'20px'}>сео продвижение</Tab>
                            <Tab fontSize={'20px'}>разработка ботов</Tab>
                            <Tab fontSize={'20px'}>тез поддержка</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SimpleGrid columns={2} spacing={10}>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                            <VStack alignItems={'start'} spacing={4}>
                                                <Text fontSize={'30px'} color={'brand.main'}>Start</Text>
                                                <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                    000/мес.</Text>
                                                <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                    системы яндекс и гугл</Text>
                                                <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                    тариф входит:</Text>
                                                <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                    <ListItem>50 видов работ</ListItem>
                                                    <ListItem>Гарантия выполненных работ</ListItem>
                                                    <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                    <ListItem>Обучение езде на электро-самокате</ListItem>
                                                </UnorderedList>
                                            </VStack>
                                            <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                            <VStack alignItems={'start'} spacing={4}>
                                                <Text fontSize={'30px'} color={'brand.main'}>Start</Text>
                                                <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                    000/мес.</Text>
                                                <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                    системы яндекс и гугл</Text>
                                                <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                    тариф входит:</Text>
                                                <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                    <ListItem>50 видов работ</ListItem>
                                                    <ListItem>Гарантия выполненных работ</ListItem>
                                                    <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                    <ListItem>Обучение езде на электро-самокате</ListItem>
                                                </UnorderedList>
                                            </VStack>
                                            <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={2} spacing={10}>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                                <VStack alignItems={'start'} spacing={4}>
                                                    <Text fontSize={'30px'} color={'brand.main'}>Stop</Text>
                                                    <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                        000/мес.</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                        системы яндекс и гугл</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                        тариф входит:</Text>
                                                    <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                        <ListItem>50 видов работ</ListItem>
                                                        <ListItem>Гарантия выполненных работ</ListItem>
                                                        <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                        <ListItem>Обучение езде на электро-самокате</ListItem>
                                                    </UnorderedList>
                                                </VStack>
                                                <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                    По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                                <VStack alignItems={'start'} spacing={4}>
                                                    <Text fontSize={'30px'} color={'brand.main'}>Start</Text>
                                                    <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                        000/мес.</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                        системы яндекс и гугл</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                        тариф входит:</Text>
                                                    <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                        <ListItem>50 видов работ</ListItem>
                                                        <ListItem>Гарантия выполненных работ</ListItem>
                                                        <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                        <ListItem>Обучение езде на электро-самокате</ListItem>
                                                    </UnorderedList>
                                                </VStack>
                                                <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                    По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={2} spacing={10}>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                                <VStack alignItems={'start'} spacing={4}>
                                                    <Text fontSize={'30px'} color={'brand.main'}>Пиздуй</Text>
                                                    <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                        000/мес.</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                        системы яндекс и гугл</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                        тариф входит:</Text>
                                                    <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                        <ListItem>50 видов работ</ListItem>
                                                        <ListItem>Гарантия выполненных работ</ListItem>
                                                        <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                        <ListItem>Обучение езде на электро-самокате</ListItem>
                                                    </UnorderedList>
                                                </VStack>
                                                <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                    По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                                <VStack alignItems={'start'} spacing={4}>
                                                    <Text fontSize={'30px'} color={'brand.main'}>Start</Text>
                                                    <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                        000/мес.</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                        системы яндекс и гугл</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                        тариф входит:</Text>
                                                    <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                        <ListItem>50 видов работ</ListItem>
                                                        <ListItem>Гарантия выполненных работ</ListItem>
                                                        <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                        <ListItem>Обучение езде на электро-самокате</ListItem>
                                                    </UnorderedList>
                                                </VStack>
                                                <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                    По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={2} spacing={10}>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                                <VStack alignItems={'start'} spacing={4}>
                                                    <Text fontSize={'30px'} color={'brand.main'}>Наталья</Text>
                                                    <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                        000/мес.</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                        системы яндекс и гугл</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                        тариф входит:</Text>
                                                    <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                        <ListItem>50 видов работ</ListItem>
                                                        <ListItem>Гарантия выполненных работ</ListItem>
                                                        <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                        <ListItem>Обучение езде на электро-самокате</ListItem>
                                                    </UnorderedList>
                                                </VStack>
                                                <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                    По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                    <Card maxW='lg'>
                                        <CardBody>
                                            <VStack justifyContent={'space-between'} alignItems={'start'}>
                                                <VStack alignItems={'start'} spacing={4}>
                                                    <Text fontSize={'30px'} color={'brand.main'}>Морская пехота</Text>
                                                    <Text fontSize={'32px'} color={'brand.header'} fontWeight={600}>от 25
                                                        000/мес.</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>Поисковые
                                                        системы яндекс и гугл</Text>
                                                    <Text fontSize={'18px'} color={'brand.darkGrey'} fontWeight={600}>В
                                                        тариф входит:</Text>
                                                    <UnorderedList color={'brand.darkGrey'} fontSize={'16px'} fontWeight={500}>
                                                        <ListItem>50 видов работ</ListItem>
                                                        <ListItem>Гарантия выполненных работ</ListItem>
                                                        <ListItem>Флет уайт на миндальном молоке</ListItem>
                                                        <ListItem>Обучение езде на электро-самокате</ListItem>
                                                    </UnorderedList>
                                                </VStack>
                                                <Text fontSize={'18px'} color={'brand.main'} fontWeight={400}>В
                                                    По нашей скидке 30% Вы получаете нихуя!</Text>
                                            </VStack>
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

