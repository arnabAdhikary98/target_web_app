import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import { API_CONFIG } from "../config";
import ErrorIndicator from "../components/ErrorIndicator";
import { CartContext } from "../context/CartContext";
import { getProductImage } from "../assets/images";
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
    useColorModeValue,
    useBreakpointValue,
    Icon,
    HStack,
    Badge,
    useToast
} from '@chakra-ui/react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

export default function ProductView() {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const toast = useToast();

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    
    // Get a local image for this product based on category and ID
    const localImage = useMemo(() => {
        return getProductImage(category, Number(id));
    }, [category, id]);
    
    // Responsive values
    const headingSize = useBreakpointValue({ base: "md", md: "lg" });
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
    const cardBg = useColorModeValue("white", "gray.800");
    const accentColor = useColorModeValue("brand.500", "brand.300");

    async function fetchAndUpdateData(category, id) {
        setLoading(true);
        try {            let res = await axios({
                method: "get",
                url: `${API_CONFIG.baseURL}/${category}/${id}`,
            });

            let data = res?.data;
            
            // Add localImage to the product data
            data.localImage = localImage;
            
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
    }, [category, id, localImage]);
    
    const handleAddToCart = () => {
        addToCart({
            ...product,
            id: id,
            category: category,
            // Use local image if available
            image: product.localImage || product.image,
            // Use product price directly
            price: product.price
        });
        
        toast({
            title: "Added to cart",
            description: `${product.title} has been added to your cart.`,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom-right"
        });
    };
    
    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/checkout');
    };

    if (loading) {
        return (<LoadingIndicator />);
    }

    if (error) {
        return (<ErrorIndicator />);
    }

    const { title, image, description } = product;
    // Use local image if available, otherwise use the image from API
    const imageSource = product.localImage || image;

    return (
        <Flex 
            direction="column" 
            align="center" 
            justify="center" 
            minH="100vh" 
            p={{ base: 2, md: 4 }} 
            pt={{ base: "70px", md: "90px" }}
        >
            <Card 
                w="100%" 
                maxW="1200px"
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow="md"
                bg={cardBg}
            >
                <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} h={{ base: "auto", md: "auto" }}>
                    <GridItem>
                        <Box 
                            h={{ base: "250px", sm: "350px", md: "450px", lg: "500px" }} 
                            position="relative"
                            overflow="hidden"
                        >
                            <Image 
                                src={imageSource}
                                alt={title}
                                h="100%"
                                w="100%"
                                p={{ base: 1, md: 2 }}
                                objectFit="cover"
                                position="absolute"
                                top="0"
                                left="0"
                            />
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Flex direction="column" h="100%" p={{ base: 3, md: 6 }}>
                            <CardHeader pb={{ base: 2, md: 4 }}>
                                <Heading size={headingSize} textAlign={{ base: "center", md: "left" }}>
                                    {title}
                                </Heading>
                                <HStack mt={2} spacing={2}>
                                    <HStack>
                                        {[...Array(5)].map((_, i) => (
                                            <Icon 
                                                key={i} 
                                                as={FaStar} 
                                                color={i < 4 ? "yellow.400" : "gray.300"} 
                                                boxSize={{ base: 3, md: 4 }}
                                            />
                                        ))}
                                    </HStack>
                                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                                        (24 reviews)
                                    </Text>
                                </HStack>
                                <Badge colorScheme="green" mt={2} fontSize={{ base: "xs", md: "sm" }}>
                                    In Stock
                                </Badge>
                            </CardHeader>
                            <CardBody flex="1" py={{ base: 2, md: 4 }}>
                                <Stack divider={<StackDivider />} spacing={{ base: 3, md: 5 }}>
                                    <Box>
                                        <Heading size="sm" textTransform="uppercase">
                                            Description
                                        </Heading>
                                        <Text pt="2" fontSize={{ base: "sm", md: "md" }}>
                                            {description}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size="sm" textTransform="uppercase">
                                            Price
                                        </Heading>
                                        <Text 
                                            pt="2" 
                                            fontSize={{ base: "xl", md: "2xl" }} 
                                            fontWeight="bold"
                                            color={accentColor}
                                        >
                                            ₹{product.price}
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                            <CardFooter pt={{ base: 2, md: 4 }}>
                                <Flex 
                                    direction={{ base: "column", sm: "row" }} 
                                    w="100%" 
                                    justify="space-between"
                                    gap={{ base: 3, sm: 4 }}
                                >
                                    <Button 
                                        variant='outline' 
                                        colorScheme='orange' 
                                        size={buttonSize}
                                        leftIcon={<FaShoppingCart />}
                                        w={{ base: "100%", sm: "48%" }}
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button 
                                        variant='solid' 
                                        colorScheme='orange' 
                                        size={buttonSize}
                                        w={{ base: "100%", sm: "48%" }}
                                        onClick={handleBuyNow}
                                    >
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
