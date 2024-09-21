import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    Flex,
    HStack,
    Image,
    SimpleGrid,
    Tag,
    Text,
    VStack
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";
import Img1 from '../../assets/Kaiser _ Great demos win business.jpeg'
import {NavLink} from "react-router-dom";

const MotionBox = motion(Box);

export const Cases = () => {
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
                >
                    <Text mb={'60px'} color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                        Примеры наших сайтов
                    </Text>
                    <SimpleGrid columns={2} spacing={10}>
                        <Card maxW='lg'>
                            <CardBody>
                                <VStack spacing={2} alignItems={'start'}>
                                    <Image
                                        src={Img1}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Text fontSize={'30px'} color={'brand.subHeader'}>Сайт проекта Kaiser</Text>
                                    <HStack spacing={4}>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            e-comerce
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            site
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            sturt-up
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card maxW='lg'>
                            <CardBody>
                                <VStack spacing={2} alignItems={'start'}>
                                    <Image
                                        src={Img1}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Text fontSize={'30px'} color={'brand.subHeader'}>Сайт проекта Kaiser</Text>
                                    <HStack spacing={4}>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            e-comerce
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            site
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            sturt-up
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card maxW='lg'>
                            <CardBody>
                                <VStack spacing={2} alignItems={'start'}>
                                    <Image
                                        src={Img1}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Text fontSize={'30px'} color={'brand.subHeader'}>Сайт проекта Kaiser</Text>
                                    <HStack spacing={4}>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            e-comerce
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            site
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            sturt-up
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card maxW='lg'>
                            <CardBody>
                                <VStack spacing={2} alignItems={'start'}>
                                    <Image
                                        src={Img1}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Text fontSize={'30px'} color={'brand.subHeader'}>Сайт проекта Kaiser</Text>
                                    <HStack spacing={4}>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            e-comerce
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            site
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            sturt-up
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                    <Flex mt={'40px'} justifyContent={'center'}>
                        <Text zIndex='1' as={NavLink} to='/catalog' color={'brand.main'} fontSize={'18px'}
                              fontWeight={'600'}
                              borderBottom={'1px solid grey'}
                              transition={"all 0.4s ease-in-out"} //добавляем плавную анимацию
                              _hover={{
                                  color: "#ffffff",
                                  bg: "brand.main"  //добавляем параметры при наведении
                              }}>
                            Посмотреть все проекты
                        </Text>
                    </Flex>

                </Box>

            </Container>
        </MotionBox>
    );
};

