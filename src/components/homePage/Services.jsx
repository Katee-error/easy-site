import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    Flex, Highlight,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Tag,
    Text
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";
import CodeIcon from '../../assets/icons/code.svg'

const MotionBox = motion(Box);


export const Services = () => {
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
                        Услуги нашего бутика
                    </Text>


                    <SimpleGrid columns={2} spacing={10}>
                        <Card maxW='xl'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontSize='30px' fontWeight={'500'} color={'brand.header'}>Разработка
                                            сайтов</Text>
                                        <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#f1f5f9'}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <Image h={'36px'} src={CodeIcon}/>
                                        </Flex>
                                    </HStack>
                                        <Text fontSize='20px' color={'brand.subHeader'}>
                                            <Highlight
                                            query={['увеличивающие', 'продажи']}
                                            styles={{ color: 'brand.main' }}
                                        >
                                                Создаём современные сайты, увеличивающие продажи
                                        </Highlight>
                                        </Text>

                                    <HStack spacing={4} flexWrap={'wrap'}>
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
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                    </HStack>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card maxW='xl'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontSize='30px' fontWeight={'500'} color={'brand.header'}>Пошив одежды</Text>
                                        <Flex h={'64px'} w={'64px'} borderRadius={'100%'} bg={'#f1f5f9'}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <Image h={'36px'} src={CodeIcon}/>
                                        </Flex>
                                    </HStack>
                                        <Text fontSize='20px' color={'brand.subHeader'}>
                                            <Highlight
                                            query={[ 'с бабочкой', 'попе']}
                                            styles={{ color: 'pink' }}
                                        >
                                                Создаём современные трусики, с бабочкой на попе
                                        </Highlight>
                                        </Text>

                                    <HStack spacing={4} flexWrap={'wrap'}>
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
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag><Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                        <Tag size={'md'} variant='solid' colorScheme='teal'>
                                            bussiness
                                        </Tag>
                                    </HStack>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>


                </Box>

            </Container>
        </MotionBox>
    );
};

