import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { 
    Box,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Image,     
    StackDivider,
    Stack,
    Heading,
    Text,
    Grid,
    GridItem,
    Flex,
    Button,
} from '@chakra-ui/react';

export default function ProductView() {
    const { category, id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

    async function fetchAndUpdateData(category, id) {
        setLoading(true);
        try {
            let res = await axios({
                method: "get",
                url: `http://localhost:3000/${category}/${id}`,
            });

            let data = res?.data;
            setLoading(false);
            setProduct(data);

        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        if (category && id) {
            fetchAndUpdateData(category, id);
        }
    }, [category, id]);

    if (loading) {
        return (<LoadingIndicator />);
    }

    if (error) {
        return (<ErrorIndicator />);
    }

    const { title, image, description, price } = product;

    return (
        <Flex direction="column" align="center" justify="center" minH="100vh" p={4} pt="80px">
            <Card 
                w="100%" 
                maxW="1200px"
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow="md"
            >
                <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} h={{ base: "auto", md: "600px" }}>
                    <GridItem>
                        <Box h="100%" maxH={{ base: "300px", md: "100%" }} position="relative">
                            <Image 
                                src={image}
                                alt={title}
                                h="100%"
                                w="100%"
                                p="2"
                                objectFit="cover"
                                position="absolute"
                                top="0"
                                left="0"
                            />
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Flex direction="column" h="100%" p={4}>
                            <CardHeader>
                                <Heading size="lg" textAlign={{ base: "center", md: "left" }}>
                                    {title}
                                </Heading>
                            </CardHeader>
                            <CardBody flex="1">
                                <Stack divider={<StackDivider />} spacing="4">
                                    <Box>
                                        <Heading size="sm" textTransform="uppercase">
                                            Description
                                        </Heading>
                                        <Text pt="2" fontSize="md">
                                            {description}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size="sm" textTransform="uppercase">
                                            Price
                                        </Heading>
                                        <Text pt="2" fontSize="md" color="gray.500">
                                            ${price}
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <Box my={2}></Box>
                                <Flex justify="space-between" w="100%" marginBottom="4">
                                    <Button variant='outline' colorScheme='orange' size='sm' w='45%'>
                                        Add to Cart
                                    </Button>
                                    <Button variant='solid' colorScheme='orange' size='sm' w='45%'>
                                        Buy Now
                                    </Button>
                                </Flex>
                            </CardFooter>
                        </Flex>
                    </GridItem>
                </Grid>
            </Card>
        </Flex>
    );
}
