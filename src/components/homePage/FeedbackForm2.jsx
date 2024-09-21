import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel, Grid, GridItem,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon, SimpleGrid,
    Text,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";

const MotionBox = motion(Box);


export const FeedbackForm2 = () => {
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
                    p={'20px'}
                    bg={'brand.lightGrey'}
                    borderRadius={'10px'}

                >
                    <Text mb={'60px'} lineHeight={'1.1'} color={'brand.header'} fontWeight={400}
                          fontSize={{base: "30px", md: "48px"}}>
                        Ваш сайт продвигается, но результаты вас не устраивают?
                    </Text>

                    <Grid
                        h='400px'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={1} colSpan={2}>
                            <SimpleGrid columns={2}>
                                <FormControl isRequired>
                                    <FormLabel>First name</FormLabel>
                                    <Input placeholder='First name'/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email'/>
                                    <FormHelperText>We'll never share your email.</FormHelperText>
                                </FormControl>
                                <InputGroup>
                                    <InputLeftAddon>+234</InputLeftAddon>
                                    <Input type='tel' placeholder='phone number'/>
                                </InputGroup>
                                <InputGroup size='sm'>
                                    <InputLeftAddon>https://</InputLeftAddon>
                                    <Input placeholder='mysite'/>
                                    <InputRightAddon>.com</InputRightAddon>
                                </InputGroup>

                            </SimpleGrid>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
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
                                Обсудить проект
                            </MotionButton>
                        </GridItem>


                    </Grid>










                </Box>

            </Container>
        </MotionBox>
    );
};

