import {
    Box,
    Button, CircularProgress, CircularProgressLabel,
    Container,
    SimpleGrid,
    Step, StepDescription, StepIcon,
    StepIndicator, StepNumber,
    Stepper, StepSeparator, StepStatus,
    StepTitle,
    Text,
    VStack
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React from "react";

const MotionBox = motion(Box);

export const SiteForYourBus = () => {
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
                    <Text mb={'80px'} color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "48px"}}>
                        Разработка сайтов для вашего бизнеса
                    </Text>
                    <SimpleGrid columns={2} spacing={10}>
                        <VStack alignItems={'start'} spacing={3}>
                            <CircularProgress size={'100px'} value={25} color='brand.main' thickness='5px'>
                                <CircularProgressLabel fontSize={'30px'} color={'brand.subHeader'}>01</CircularProgressLabel>
                            </CircularProgress>
                            <Text lineHeight={'1.2'}  color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "30px"}}>
                                Профессиональный подход к SEO-продвижению
                            </Text>
                            <Text  color={'brand.subHeader'} fontWeight={400} fontSize={{base: "30px", md: "18px"}}>
                                С 2008 года мы успешно выводим сайты в ТОП поисковых систем. За это время реализовано свыше 350 успешных проектов, охватывающих различные отрасли бизнеса.
                            </Text>
                        </VStack>
                        <VStack alignItems={'start'} spacing={3}>
                            <CircularProgress size={'100px'} value={50} color='brand.main' thickness='5px'>
                                <CircularProgressLabel fontSize={'30px'} color={'brand.subHeader'}>02</CircularProgressLabel>
                            </CircularProgress>
                            <Text lineHeight={'1.2'}  color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "30px"}}>
                                Профессиональный подход к SEO-продвижению
                            </Text>
                            <Text  color={'brand.subHeader'} fontWeight={400} fontSize={{base: "30px", md: "18px"}}>
                                С 2008 года мы успешно выводим сайты в ТОП поисковых систем. За это время реализовано свыше 350 успешных проектов, охватывающих различные отрасли бизнеса.
                            </Text>
                        </VStack>
                        <VStack alignItems={'start'} spacing={3}>
                            <CircularProgress size={'100px'} value={75} color='brand.main' thickness='5px'>
                                <CircularProgressLabel fontSize={'30px'} color={'brand.subHeader'}>03</CircularProgressLabel>
                            </CircularProgress>
                            <Text lineHeight={'1.2'}  color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "30px"}}>
                                Профессиональный подход к SEO-продвижению
                            </Text>
                            <Text  color={'brand.subHeader'} fontWeight={400} fontSize={{base: "30px", md: "18px"}}>
                                С 2008 года мы успешно выводим сайты в ТОП поисковых систем. За это время реализовано свыше 350 успешных проектов, охватывающих различные отрасли бизнеса.
                            </Text>
                        </VStack>
                        <VStack alignItems={'start'} spacing={3}>
                            <CircularProgress size={'100px'} value={100} color='brand.main' thickness='5px'>
                                <CircularProgressLabel fontSize={'30px'} color={'brand.subHeader'}>04</CircularProgressLabel>
                            </CircularProgress>
                            <Text lineHeight={'1.2'}  color={'brand.header'} fontWeight={400} fontSize={{base: "30px", md: "30px"}}>
                                Профессиональный подход к SEO-продвижению
                            </Text>
                            <Text  color={'brand.subHeader'} fontWeight={400} fontSize={{base: "30px", md: "18px"}}>
                                С 2008 года мы успешно выводим сайты в ТОП поисковых систем. За это время реализовано свыше 350 успешных проектов, охватывающих различные отрасли бизнеса.
                            </Text>
                        </VStack>
                    </SimpleGrid>
                </Box>

            </Container>
        </MotionBox>
    );
};

