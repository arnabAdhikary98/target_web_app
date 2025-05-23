import {
    Container,
    SimpleGrid,
    Box,
    Heading,
    Text,
    Image,
    Badge,
    Flex,
    Button,
    useColorModeValue,
    VStack,
    HStack,
    Icon,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { FaTruck, FaStore, FaShoppingBag } from "react-icons/fa";
import { getProductImage } from "../assets/images";
import { API_CONFIG } from "../config";

// USD to INR conversion (approximately 83 as of 2023)
const USD_TO_INR = 83;

export default function PickupAndDelivery() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const bgColor = useColorModeValue("white", "gray.800");
    const accentColor = useColorModeValue("red.500", "red.300");
    const deliveryBadgeBg = useColorModeValue("green.100", "green.800");
    const deliveryBadgeColor = useColorModeValue("green.800", "green.100");    async function fetchProducts() {
        try {
            setLoading(true);
            const res = await axios.get(`${API_CONFIG.baseURL}/pickup_delivery`);
            
            // Process products to add local images and convert prices
            const processedProducts = res.data.map((product, index) => {
                // Format price
                let formattedPrice = product.price;
                
                // Convert price to INR if needed
                if (typeof formattedPrice === 'number' && formattedPrice < 1000) {
                    formattedPrice = Math.round(formattedPrice * USD_TO_INR);
                }
                
                return {
                    ...product,
                    // Add local image using our image system - use product ID or index+1 if ID not available
                    localImage: getProductImage('pickup_delivery', product.id || index + 1),
                    // Use formatted price
                    price: formattedPrice
                };
            });
            
            setProducts(processedProducts);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching pickup & delivery products:", error);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    // Filter products based on delivery options
    const sameDay = products.filter(p => p.delivery?.toLowerCase().includes("same-day"));
    const nextDay = products.filter(p => p.delivery?.toLowerCase().includes("next-day") || 
                                         p.delivery?.toLowerCase().includes("morning") || 
                                         p.delivery?.toLowerCase().includes("express"));
    const scheduled = products.filter(p => p.delivery?.toLowerCase().includes("scheduled"));    
    return (
        <Box className="main-content">
            {/* Hero Banner */}
            <Box 
                bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/readyToHeatMeals.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height={{ base: "300px", md: "400px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={10}
                className="scale-in"
            >
                <VStack spacing={4} textAlign="center" color="white">
                    <Heading as="h1" size="2xl" className="scale-in">
                        Pickup & Delivery Options
                    </Heading>
                    <Text fontSize="xl" maxW="600px" className="scale-in">
                        Fresh groceries and essentials delivered to your door
                    </Text>
                </VStack>
            </Box>

            <Container maxW="container.xl" py={8}>
                {/* Service Icons */}
                <SimpleGrid 
                    columns={{ base: 1, md: 3 }} 
                    spacing={{ base: 8, md: 16 }} 
                    mb={12}
                    className="scale-in"
                >
                    <VStack 
                        spacing={4}
                        p={8}
                        bg={bgColor}
                        borderRadius="xl"
                        boxShadow="lg"
                        transition="transform 0.3s"
                        _hover={{ transform: 'translateY(-5px)' }}
                        className="hover-lift"
                    >
                        <Icon as={FaTruck} w={12} h={12} color={accentColor} />
                        <Text fontWeight="bold" fontSize="xl">Fast Delivery</Text>
                        <Text color="gray.500" textAlign="center">Same-day and next-day delivery available</Text>
                    </VStack>
                    <VStack 
                        spacing={4}
                        p={8}
                        bg={bgColor}
                        borderRadius="xl"
                        boxShadow="lg"
                        transition="transform 0.3s"
                        _hover={{ transform: 'translateY(-5px)' }}
                        className="hover-lift"
                    >
                        <Icon as={FaStore} w={12} h={12} color={accentColor} />
                        <Text fontWeight="bold" fontSize="xl">Store Pickup</Text>
                        <Text color="gray.500" textAlign="center">Ready in as little as 2 hours</Text>
                    </VStack>
                    <VStack 
                        spacing={4}
                        p={8}
                        bg={bgColor}
                        borderRadius="xl"
                        boxShadow="lg"
                        transition="transform 0.3s"
                        _hover={{ transform: 'translateY(-5px)' }}
                        className="hover-lift"
                    >
                        <Icon as={FaShoppingBag} w={12} h={12} color={accentColor} />
                        <Text fontWeight="bold" fontSize="xl">Quality Products</Text>
                        <Text color="gray.500" textAlign="center">Fresh and high-quality items guaranteed</Text>
                    </VStack>
                </SimpleGrid>

                {/* Product Tabs */}
                <Tabs 
                    isFitted 
                    variant="enclosed" 
                    colorScheme="red" 
                    onChange={(index) => setTabIndex(index)} 
                    mb={8}
                    className="scale-in"
                >
                    <TabList mb="1em">
                        <Tab _selected={{ color: accentColor, borderColor: accentColor }}>All Options</Tab>
                        <Tab _selected={{ color: accentColor, borderColor: accentColor }}>Same-Day</Tab>
                        <Tab _selected={{ color: accentColor, borderColor: accentColor }}>Next-Day & Express</Tab>
                        <Tab _selected={{ color: accentColor, borderColor: accentColor }}>Scheduled</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                                {products.map((product, index) => (
                                    <ProductCard 
                                        key={product.id || index} 
                                        product={product} 
                                        navigate={navigate} 
                                        bgColor={bgColor} 
                                        deliveryBadgeBg={deliveryBadgeBg} 
                                        deliveryBadgeColor={deliveryBadgeColor} 
                                    />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                                {sameDay.map((product, index) => (
                                    <ProductCard 
                                        key={product.id || index} 
                                        product={product} 
                                        navigate={navigate} 
                                        bgColor={bgColor} 
                                        deliveryBadgeBg={deliveryBadgeBg} 
                                        deliveryBadgeColor={deliveryBadgeColor} 
                                    />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                                {nextDay.map((product, index) => (
                                    <ProductCard 
                                        key={product.id || index} 
                                        product={product} 
                                        navigate={navigate} 
                                        bgColor={bgColor} 
                                        deliveryBadgeBg={deliveryBadgeBg} 
                                        deliveryBadgeColor={deliveryBadgeColor} 
                                    />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                                {scheduled.map((product, index) => (
                                    <ProductCard 
                                        key={product.id || index} 
                                        product={product} 
                                        navigate={navigate} 
                                        bgColor={bgColor} 
                                        deliveryBadgeBg={deliveryBadgeBg} 
                                        deliveryBadgeColor={deliveryBadgeColor} 
                                    />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Box>
    );
}

function ProductCard({ product, navigate, bgColor, deliveryBadgeBg, deliveryBadgeColor }) {
    // Use local image if available, otherwise fallback to API image
    const imageSource = product.localImage || product.image;
    
    // Ensure the delivery badge exists
    const deliveryBadge = product.delivery || "Standard Delivery";
    
    return (
        <Box 
            bg={bgColor} 
            borderWidth="1px" 
            rounded="lg" 
            shadow="md" 
            position="relative"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
        >
            <Image 
                src={imageSource} 
                alt={product.title} 
                roundedTop="lg" 
                height="200px" 
                width="100%" 
                objectFit="cover"
            />

            <Box p={4}>
                <Badge 
                    bg={deliveryBadgeBg} 
                    color={deliveryBadgeColor} 
                    mb={3} 
                    px={2} 
                    py={1} 
                    borderRadius="md"
                >
                    {deliveryBadge}
                </Badge>
                
                <Heading as="h3" size="md" mb={2} height="50px" overflow="hidden">
                    {product.title}
                </Heading>
                
                <Text fontSize="sm" mb={3} height="60px" overflow="hidden">
                    {product.description}
                </Text>
                
                <Text fontWeight="bold" fontSize="lg" mb={4}>
                    ₹{product.price}
                </Text>
                
                <Flex justify="space-between">
                    <Button 
                        colorScheme="blue" 
                        size="sm" 
                        onClick={() => navigate(`/${product.category}/view/${product.id}`)}
                        width="48%"
                    >
                        View Details
                    </Button>
                    <Button 
                        colorScheme="orange" 
                        size="sm"
                        width="48%"
                    >
                        Add to Cart
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}