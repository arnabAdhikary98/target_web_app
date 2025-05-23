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
    HStack,
    VStack,
    Divider,
    useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { CartContext } from "../context/CartContext";

// Import local image assets
import { 
    heroImages, 
    newFeaturedImages, 
    getProductImage 
} from "../assets/images";

export default function NewAndFeatured() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { addToCart } = useContext(CartContext);
    const toast = useToast();
    const bgColor = useColorModeValue("white", "gray.800");
    const headerBg = useColorModeValue("gray.100", "gray.700");

    async function fetchProducts() {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:8080/new_featured");
            
            // Add local images to products
            const productsWithImages = res.data.map(product => ({
                ...product,
                localImage: getProductImage('new_featured', product.id)
            }));
            
            setProducts(productsWithImages);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching new & featured products:", error);
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

    const handleAddToCart = (product) => {
        addToCart({
            ...product,
            image: product.localImage || product.image
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

    return (
        <Box className="main-content">
            {/* Hero Banner */}
            <Box 
                position="relative" 
                height={{ base: "400px", md: "500px" }}
                backgroundImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/summerSaleIsLive.gif')"
                backgroundSize="cover"
                backgroundPosition="center"
                mb={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="scale-in"
            >
                <Container maxW="container.xl" height="100%" position="relative">
                    <Flex 
                        height="100%" 
                        direction="column"
                        justify="center" 
                        align="center"
                        textAlign="center"
                        color="white"
                    >
                        <Heading 
                            as="h1" 
                            size="2xl" 
                            mb={4}
                            className="scale-in"
                        >
                            New & Featured Products
                        </Heading>
                        <Text 
                            fontSize="xl" 
                            maxW="600px"
                            className="scale-in"
                        >
                            Discover our latest arrivals and featured items
                        </Text>
                    </Flex>
                </Container>
            </Box>

            <Container maxW="container.xl" py={8}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={16}>
                    {products.slice(0, 2).map((product) => (
                        <Box 
                            key={product.id} 
                            bg={bgColor} 
                            borderWidth="1px" 
                            rounded="lg" 
                            shadow="lg" 
                            overflow="hidden"
                            transition="transform 0.3s"
                            _hover={{ transform: "translateY(-5px)" }}
                        >
                            <Flex direction={{ base: "column", sm: "row" }}>
                                <Image 
                                    src={product.localImage || product.image} 
                                    alt={product.title} 
                                    height={{ base: "200px", sm: "240px" }} 
                                    width={{ base: "100%", sm: "50%" }} 
                                    objectFit="cover"
                                />
                                <Box p={6} width={{ base: "100%", sm: "50%" }}>
                                    <HStack mb={3}>
                                        {product.tags.map((tag, index) => (
                                            <Badge 
                                                key={index} 
                                                colorScheme={tag.includes("New") ? "green" : "purple"} 
                                                variant="solid" 
                                                px={2} 
                                                py={1}
                                                borderRadius="md"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </HStack>
                                    
                                    <Heading as="h3" size="lg" mb={3}>
                                        {product.title}
                                    </Heading>
                                    
                                    <Text fontSize="md" mb={4}>
                                        {product.description}
                                    </Text>
                                    
                                    <Text fontWeight="bold" fontSize="xl" mb={4}>
                                        ₹{product.price}
                                    </Text>
                                    
                                    <Flex justify="space-between">
                                        <Button 
                                            colorScheme="blue" 
                                            onClick={() => navigate(`/${product.category}/view/${product.id}`)}
                                            width="48%"
                                        >
                                            View Details
                                        </Button>
                                        <Button 
                                            colorScheme="orange" 
                                            width="48%"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>

                <Divider mb={12} />
                
                <Heading as="h2" size="xl" mb={8} textAlign="center">
                    More New Arrivals
                </Heading>

                <SimpleGrid 
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
                    spacing={8}
                    className="scale-in"
                >
                    {products.slice(2).map((product) => (
                        <Box 
                            key={product.id} 
                            bg={bgColor} 
                            borderWidth="1px" 
                            rounded="lg" 
                            shadow="md" 
                            position="relative"
                            transition="transform 0.3s"
                            _hover={{ transform: "translateY(-5px)" }}
                        >
                            <Box position="absolute" top={2} right={2} zIndex={1}>
                                {product.tags.map((tag, index) => (
                                    <Badge 
                                        key={index} 
                                        colorScheme={tag.includes("New") ? "green" : "purple"} 
                                        ml={index > 0 ? 1 : 0}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </Box>

                            <Image 
                                src={product.localImage || product.image} 
                                alt={product.title} 
                                roundedTop="lg" 
                                height="180px" 
                                width="100%" 
                                objectFit="cover"
                            />

                            <VStack p={4} align="start" spacing={2}>
                                <Heading as="h3" size="md" noOfLines={2}>
                                    {product.title}
                                </Heading>
                                
                                <Text fontSize="sm" noOfLines={2}>
                                    {product.description}
                                </Text>
                                
                                <Text fontWeight="bold" fontSize="lg">
                                    ₹{product.price}
                                </Text>
                                
                                <Flex width="100%" justify="space-between" mt={2}>
                                    <Button 
                                        colorScheme="blue" 
                                        size="sm" 
                                        onClick={() => navigate(`/${product.category}/view/${product.id}`)}
                                        width="48%"
                                    >
                                        View
                                    </Button>
                                    <Button 
                                        colorScheme="orange" 
                                        size="sm"
                                        width="48%"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Flex>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}