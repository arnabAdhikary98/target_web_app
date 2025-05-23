import { 
    Container, 
    SimpleGrid, 
    Box, 
    Heading, 
    Text, 
    Image, 
    Badge, 
    Flex, 
    Stack, 
    Button, 
    useColorModeValue,
    HStack,
    useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { API_CONFIG } from "../config";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Import local image assets
import { 
    heroImages, 
    dealImages, 
    getProductImage 
} from "../assets/images";

// USD to INR conversion (approximately 83 as of 2023)
const USD_TO_INR = 83;

export default function Deals() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [deals, setDeals] = useState([]);
    const [error, setError] = useState(false);
    const { addToCart } = useContext(CartContext);
    const toast = useToast();
    const bgColor = useColorModeValue("white", "gray.800");
    const badgeBg = useColorModeValue("red.500", "red.300");

    async function fetchDeals() {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:8080/deals");
            
            // Process deals data with local images and price conversion
            const processedDeals = res.data.map((deal, index) => {
                // Format price and originalPrice to INR
                let formattedPrice = deal.price;
                let formattedOriginalPrice = deal.originalPrice;
                
                // Convert price to INR if needed
                if (typeof formattedPrice === 'number' && formattedPrice < 1000) {
                    formattedPrice = Math.round(formattedPrice * USD_TO_INR);
                }
                
                // Convert original price to INR if needed
                if (typeof formattedOriginalPrice === 'number' && formattedOriginalPrice < 1000) {
                    formattedOriginalPrice = Math.round(formattedOriginalPrice * USD_TO_INR);
                }
                
                return {
                    ...deal,
                    localImage: getProductImage('deals', deal.id),
                    price: formattedPrice,
                    originalPrice: formattedOriginalPrice
                };
            });
            
            setDeals(processedDeals);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching deals:", error);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDeals();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    const handleAddToCart = (deal) => {
        addToCart({
            id: deal.id,
            title: deal.title,
            image: deal.localImage || deal.image,
            description: deal.description,
            price: deal.price,
            category: deal.category
        });

        toast({
            title: "Added to cart",
            description: `${deal.title} has been added to your cart.`,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom-right"
        });
    };

    return (
        <Box>
            {/* Hero Banner */}
            <Box 
                position="relative" 
                height={{ base: "200px", md: "300px" }}
                backgroundImage={`url(${heroImages.dealsBanner})`}
                backgroundSize="cover"
                backgroundPosition="center"
                mb={8}
            >
                <Box 
                    position="absolute" 
                    top="0" 
                    left="0" 
                    width="100%" 
                    height="100%" 
                    bg="blackAlpha.600"
                />
                <Container maxW="container.xl" height="100%" position="relative">
                    <Flex 
                        height="100%" 
                        direction="column"
                        justify="center" 
                        align="center"
                        textAlign="center"
                        color="white"
                    >
                        <Heading as="h1" size="xl" mb={2}>
                            Today's Hot Deals
                        </Heading>
                        <Text fontSize="lg" maxW="600px">
                            Limited time offers on top products
                        </Text>
                    </Flex>
                </Container>
            </Box>

            <Container maxW="container.xl" py={6}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                    {deals.map((deal) => (
                        <Box 
                            key={deal.id} 
                            bg={bgColor} 
                            borderWidth="1px" 
                            rounded="lg" 
                            shadow="lg" 
                            position="relative" 
                            transition="transform 0.3s"
                            _hover={{ transform: "translateY(-5px)" }}
                        >
                            <Badge 
                                position="absolute" 
                                top={2} 
                                right={2} 
                                bg={badgeBg} 
                                color="white" 
                                fontSize="0.9em" 
                                p="5px 10px" 
                                borderRadius="md"
                            >
                                Save {deal.discount}
                            </Badge>

                            <Image 
                                src={deal.localImage || deal.image} 
                                alt={deal.title} 
                                roundedTop="lg" 
                                height="200px" 
                                width="100%" 
                                objectFit="cover"
                            />

                            <Box p={6}>
                                <Heading as="h3" size="md" height="60px" overflow="hidden">
                                    {deal.title}
                                </Heading>
                                
                                <Text fontSize="sm" mt={2} height="60px" overflow="hidden">
                                    {deal.description}
                                </Text>
                                
                                <Stack direction="row" align="center" mt={4}>
                                    <Text fontWeight="bold" fontSize="xl" color="red.500">
                                        ₹{deal.price}
                                    </Text>
                                    <Text textDecoration="line-through" color="gray.500">
                                        ₹{deal.originalPrice}
                                    </Text>
                                </Stack>

                                <Flex mt={4} justify="space-between">
                                    <Button 
                                        colorScheme="blue" 
                                        size="sm" 
                                        onClick={() => navigate(`/${deal.category}/view/${deal.id}`)}
                                        width="48%"
                                    >
                                        View Details
                                    </Button>
                                    <Button 
                                        colorScheme="orange" 
                                        size="sm"
                                        width="48%"
                                        onClick={() => handleAddToCart(deal)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}