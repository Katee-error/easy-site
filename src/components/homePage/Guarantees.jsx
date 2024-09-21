import {
    Box,
    Button, ButtonGroup,
    Card,
    CardBody, CardFooter,
    Container, Divider, Heading,
    ListItem,
    SimpleGrid, Stack,
    TabList,
    Text, Image,
    UnorderedList, VStack, Icon, HStack, Flex, Tag
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";
import CodeIcon from '../../assets/icons/code.svg'

const MotionBox = motion(Box);


export const Guarantees = () => {
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
                    <Text mb={'60px'} color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                        Гарантии
                    </Text>


                    <SimpleGrid columns={2} spacing={10}>
                        <Card p={'0'} maxW='xl' bg={'brand.lightGrey'} border={'none'} boxShadow={'none'} borderRadius={'10px'}>
                            <CardBody pt={'0'} pb={'40px'}>
                                <Stack mt='6' spacing='3'>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontSize='30px' fontWeight={600} color={'brand.header'}>Разработка сайтов</Text>
                                        <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#f1f5f9'} alignItems={'center'} justifyContent={'center'}>
                                            <Image h={'36px'} src={CodeIcon}/>
                                        </Flex>
                                    </HStack>
                                    <Text fontSize='18px' color={'brand.subHeader'} fontWeight={500}>
                                        Руководитель продвижения и персональный менеджер всегда на связи, чтобы обеспечить вам постоянную поддержку и быстрое решение любых вопросов.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card p={'0'} maxW='xl' bg={'brand.lightGrey'} border={'none'} boxShadow={'none'} borderRadius={'10px'}>
                            <CardBody pt={'0'} pb={'40px'}>
                                <Stack mt='6' spacing='3'>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontSize='30px' fontWeight={600} color={'brand.header'}>Разработка сайтов</Text>
                                        <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#f1f5f9'} alignItems={'center'} justifyContent={'center'}>
                                            <Image h={'36px'} src={CodeIcon}/>
                                        </Flex>
                                    </HStack>
                                    <Text fontSize='18px' color={'brand.subHeader'} fontWeight={500}>
                                        Руководитель продвижения и персональный менеджер всегда на связи, чтобы обеспечить вам постоянную поддержку и быстрое решение любых вопросов.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card p={'0'} maxW='xl' bg={'brand.lightGrey'} border={'none'} boxShadow={'none'} borderRadius={'10px'}>
                            <CardBody pt={'0'} pb={'40px'}>
                                <Stack mt='6' spacing='3'>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontSize='30px' fontWeight={600} color={'brand.header'}>Разработка сайтов</Text>
                                        <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#f1f5f9'} alignItems={'center'} justifyContent={'center'}>
                                            <Image h={'36px'} src={CodeIcon}/>
                                        </Flex>
                                    </HStack>
                                    <Text fontSize='18px' color={'brand.subHeader'} fontWeight={500}>
                                        Руководитель продвижения и персональный менеджер всегда на связи, чтобы обеспечить вам постоянную поддержку и быстрое решение любых вопросов.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card p={'0'} maxW='xl' bg={'brand.lightGrey'} border={'none'} boxShadow={'none'} borderRadius={'10px'}>
                            <CardBody pt={'0'} pb={'40px'}>
                                <Stack mt='6' spacing='3'>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontSize='30px' fontWeight={600} color={'brand.header'}>Разработка сайтов</Text>
                                        <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#f1f5f9'} alignItems={'center'} justifyContent={'center'}>
                                            <Image h={'36px'} src={CodeIcon}/>
                                        </Flex>
                                    </HStack>
                                    <Text fontSize='18px' color={'brand.subHeader'} fontWeight={500}>
                                        Руководитель продвижения и персональный менеджер всегда на связи, чтобы обеспечить вам постоянную поддержку и быстрое решение любых вопросов.
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

