import { 
    Container,
    SimpleGrid,
    Box,
    Heading,
    Text,
    Image,
    Button,
    Flex,
    Grid,
    GridItem,
    VStack,
    HStack,
    Icon,
    Badge,
    useColorModeValue,
    Divider,
    useBreakpointValue,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { API_CONFIG } from "../config"
import LoadingIndicator from "../components/LoadingIndicator"
import ErrorIndicator from "../components/ErrorIndicator"
import ProductCard from "../components/ProductCard"
import { FaArrowRight, FaTruck, FaTag, FaCreditCard, FaUndo } from "react-icons/fa"
import { CartContext } from "../context/CartContext"

// Import local image assets
import { 
    heroImages, 
    categoryImages, 
    getProductImage, 
    getCategoryImage 
} from "../assets/images"

// USD to INR conversion rate (approximately 83 as of 2023)
const USD_TO_INR = 83;

export default function Home(){
    const navigate = useNavigate()
    const { addToCart } = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [deals, setDeals] = useState([])
    const [newArrivals, setNewArrivals] = useState([])
    const [error, setError] = useState(false)

    const bgColor = useColorModeValue("white", "gray.800")
    const accentColor = useColorModeValue("brand.500", "brand.300")
    const sectionBg = useColorModeValue("gray.50", "gray.700")
    
    // Responsive font sizes
    const headingSize = useBreakpointValue({ base: "xl", md: "2xl" })
    const subheadingSize = useBreakpointValue({ base: "md", md: "lg" })
    const bodyFontSize = useBreakpointValue({ base: "sm", md: "md" })
    const buttonSize = useBreakpointValue({ base: "md", md: "lg" })

    const categories = [
        { name: "Men's Clothing", image: categoryImages.mensClothing, path: "/mens_clothing" },
        { name: "Women's Fashion", image: categoryImages.womensClothing, path: "/womens_clothing" },
        { name: "Electronics", image: categoryImages.electronics, path: "/electronics" },
        { name: "Home Decor", image: categoryImages.homeDecor, path: "/home_decor" },
        { name: "Kids' Fashion", image: categoryImages.kidsClothing, path: "/kids_section" },
        { name: "Furniture", image: categoryImages.furniture, path: "/furniture" }
    ]

    async function fetchData() {
        setLoading(true)
        try {            // Import API config
            const { baseURL } = API_CONFIG;
            
            // Fetch featured products (using men's clothing as sample)
            const featuredRes = await axios.get(`${baseURL}/mens_clothing`)
            
            // Fetch deals
            const dealsRes = await axios.get(`${baseURL}/deals`)
            
            // Fetch new arrivals
            const newArrivalsRes = await axios.get(`${baseURL}/new_featured`)
            
            // Process featured products to use local images and convert prices
            const processedFeatured = featuredRes.data.slice(0, 4).map(product => {
                // Convert price to INR if needed
                let formattedPrice = product.price;
                if (typeof formattedPrice === 'number' && formattedPrice < 1000) {
                    formattedPrice = Math.round(formattedPrice * USD_TO_INR);
                }
                
                return {
                    ...product,
                    localImage: getProductImage('mens_clothing', product.id),
                    price: formattedPrice
                };
            })
            
            // Process deals to use local images and convert prices
            const processedDeals = dealsRes.data.slice(0, 3).map(deal => {
                // Convert price and originalPrice to INR if needed
                let formattedPrice = deal.price;
                let formattedOriginalPrice = deal.originalPrice;
                
                if (typeof formattedPrice === 'number' && formattedPrice < 1000) {
                    formattedPrice = Math.round(formattedPrice * USD_TO_INR);
                }
                
                if (typeof formattedOriginalPrice === 'number' && formattedOriginalPrice < 1000) {
                    formattedOriginalPrice = Math.round(formattedOriginalPrice * USD_TO_INR);
                }
                
                return {
                    ...deal,
                    localImage: getProductImage('deals', deal.id),
                    price: formattedPrice,
                    originalPrice: formattedOriginalPrice
                };
            })
            
            // Process new arrivals to use local images and convert prices
            const processedNewArrivals = newArrivalsRes.data.slice(0, 4).map(product => {
                // Convert price to INR if needed
                let formattedPrice = product.price;
                if (typeof formattedPrice === 'number' && formattedPrice < 1000) {
                    formattedPrice = Math.round(formattedPrice * USD_TO_INR);
                }
                
                return {
                    ...product,
                    localImage: getProductImage('new_featured', product.id),
                    price: formattedPrice
                };
            })
            
            setFeaturedProducts(processedFeatured)
            setDeals(processedDeals)
            setNewArrivals(processedNewArrivals)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error)
            setError(true)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    if (loading){
        return (<LoadingIndicator />)
    }

    if (error){
        return (<ErrorIndicator />)
    }

    const handleAddToCart = (product) => {
        addToCart({
            ...product,
            image: product.localImage || product.image
        })
    }

    return(
        <Box>
            {/* Hero Section */}
            <Box 
                position="relative" 
                height={{ base: "300px", md: "500px" }}
                backgroundImage={`url(${heroImages.heroBanner})`}
                backgroundSize="cover"
                backgroundPosition="center"
                mb={{ base: 6, md: 10 }}
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
                    <VStack 
                        height="100%" 
                        justify="center" 
                        align={{ base: "center", md: "flex-start" }}
                        spacing={{ base: 2, md: 4 }}
                        textAlign={{ base: "center", md: "left" }}
                        px={{ base: 4, md: 0 }}
                        color="white"
                    >
                        <Heading as="h1" size={headingSize}>
                            Summer Sale Is Live
                        </Heading>
                        <Text fontSize={bodyFontSize} maxW="600px">
                            Discover amazing deals on all your favorite products with up to 40% off
                        </Text>
                        <Button 
                            size={buttonSize} 
                            colorScheme="brand" 
                            rightIcon={<FaArrowRight />}
                            onClick={() => navigate("/deals")}
                            mt={{ base: 2, md: 4 }}
                        >
                            Shop Now
                        </Button>
                    </VStack>
                </Container>
            </Box>

            <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
                {/* Features Section */}
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 5, md: 10 }} mb={{ base: 10, md: 16 }}>
                    <VStack align="center">
                        <Icon as={FaTruck} w={{ base: 6, md: 10 }} h={{ base: 6, md: 10 }} color={accentColor} />
                        <Text fontWeight="bold" fontSize={bodyFontSize}>Free Shipping</Text>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" textAlign="center">
                            On orders over ₹4000
                        </Text>
                    </VStack>
                    <VStack align="center">
                        <Icon as={FaTag} w={{ base: 6, md: 10 }} h={{ base: 6, md: 10 }} color={accentColor} />
                        <Text fontWeight="bold" fontSize={bodyFontSize}>Weekly Deals</Text>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" textAlign="center">
                            Save up to 40% off
                        </Text>
                    </VStack>
                    <VStack align="center">
                        <Icon as={FaCreditCard} w={{ base: 6, md: 10 }} h={{ base: 6, md: 10 }} color={accentColor} />
                        <Text fontWeight="bold" fontSize={bodyFontSize}>Secure Payment</Text>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" textAlign="center">
                            100% secure checkout
                        </Text>
                    </VStack>
                    <VStack align="center">
                        <Icon as={FaUndo} w={{ base: 6, md: 10 }} h={{ base: 6, md: 10 }} color={accentColor} />
                        <Text fontWeight="bold" fontSize={bodyFontSize}>Easy Returns</Text>
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" textAlign="center">
                            30 day return policy
                        </Text>
                    </VStack>
                </SimpleGrid>

                {/* Categories Section */}
                <Box mb={{ base: 10, md: 16 }}>
                    <Heading as="h2" size={subheadingSize} mb={{ base: 4, md: 8 }} textAlign="center">
                        Shop by Category
                    </Heading>
                    <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={{ base: 3, md: 6 }}>
                        {categories.map((category, index) => (
                            <VStack 
                                key={index} 
                                spacing={{ base: 2, md: 3 }} 
                                cursor="pointer" 
                                onClick={() => navigate(category.path)}
                                transition="transform 0.3s"
                                _hover={{ transform: "translateY(-5px)" }}
                            >
                                <Box 
                                    borderRadius="full" 
                                    overflow="hidden" 
                                    boxSize={{ base: "80px", sm: "100px", md: "120px" }}
                                    boxShadow="md"
                                >
                                    <Image 
                                        src={category.image} 
                                        alt={category.name} 
                                        objectFit="cover" 
                                        width="100%" 
                                        height="100%"
                                    />
                                </Box>
                                <Text fontWeight="medium" textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
                                    {category.name}
                                </Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Deals Section */}
                <Box mb={{ base: 10, md: 16 }} bg={sectionBg} p={{ base: 4, md: 8 }} borderRadius="lg">
                    <Flex justify="space-between" align="center" mb={{ base: 4, md: 6 }} flexWrap="wrap" gap={2}>
                        <Heading as="h2" size={subheadingSize}>
                            Today's Hot Deals
                        </Heading>
                        <Button 
                            rightIcon={<FaArrowRight />} 
                            colorScheme="brand" 
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                            onClick={() => navigate("/deals")}
                        >
                            View All
                        </Button>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 6 }}>
                        {deals.map((deal) => (
                            <Box 
                                key={deal.id} 
                                bg={bgColor} 
                                borderWidth="1px" 
                                rounded="lg" 
                                shadow="md" 
                                position="relative"
                                transition="transform 0.3s"
                                _hover={{ transform: "translateY(-5px)" }}
                                overflow="hidden"
                                height="100%"
                            >
                                <Badge 
                                    position="absolute" 
                                    top={2} 
                                    right={2} 
                                    bg="red.500" 
                                    color="white" 
                                    px={2} 
                                    py={1} 
                                    borderRadius="md"
                                    fontSize={{ base: "xs", md: "sm" }}
                                >
                                    Save {deal.discount}
                                </Badge>
                                <Image 
                                    src={deal.localImage || deal.image} 
                                    alt={deal.title} 
                                    height={{ base: "180px", md: "200px" }} 
                                    width="100%" 
                                    objectFit="cover"
                                />
                                <Box p={{ base: 3, md: 4 }}>
                                    <Heading as="h3" size={{ base: "sm", md: "md" }} noOfLines={1}>
                                        {deal.title}
                                    </Heading>
                                    <HStack mt={2}>
                                        <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }} color="red.500">
                                            ₹{deal.price}
                                        </Text>
                                        <Text textDecoration="line-through" color="gray.500" fontSize={{ base: "sm", md: "md" }}>
                                            ₹{deal.originalPrice}
                                        </Text>
                                    </HStack>
                                    <Button 
                                        mt={4} 
                                        colorScheme="brand" 
                                        width="100%"
                                        size={{ base: "sm", md: "md" }}
                                        onClick={() => navigate(`/${deal.category}/view/${deal.id}`)}
                                    >
                                        View Deal
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* New Arrivals Section */}
                <Box mb={{ base: 10, md: 16 }}>
                    <Flex justify="space-between" align="center" mb={{ base: 4, md: 6 }} flexWrap="wrap" gap={2}>
                        <Heading as="h2" size={subheadingSize}>
                            New Arrivals
                        </Heading>
                        <Button 
                            rightIcon={<FaArrowRight />} 
                            colorScheme="brand" 
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                            onClick={() => navigate("/new_and_featured")}
                        >
                            View All
                        </Button>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
                        {newArrivals.map((product) => (
                            <Box 
                                key={product.id}
                                borderWidth="1px" 
                                borderRadius="lg" 
                                overflow="hidden"
                                boxShadow="md"
                                transition="transform 0.3s"
                                _hover={{ transform: "translateY(-5px)" }}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                            >
                                <Box position="relative">
                                    <Image
                                        src={product.localImage || product.image}
                                        alt={product.title}
                                        height={{ base: "160px", md: "200px" }}
                                        width="100%"
                                        objectFit="cover"
                                    />
                                    {product.tags && (
                                        <Box position="absolute" top={2} right={2}>
                                            {product.tags.map((tag, idx) => (
                                                <Badge 
                                                    key={idx}
                                                    colorScheme="green"
                                                    ml={idx > 0 ? 2 : 0}
                                                    fontSize={{ base: "xs", md: "sm" }}
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                                <Box p={{ base: 3, md: 4 }} flex="1" display="flex" flexDirection="column">
                                    <Heading as="h3" size={{ base: "sm", md: "md" }} noOfLines={1}>
                                        {product.title}
                                    </Heading>
                                    <Text fontSize={{ base: "xs", md: "sm" }} mt={2} noOfLines={2}>
                                        {product.description}
                                    </Text>
                                    <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mt={2}>
                                        ₹{product.price}
                                    </Text>
                                    <Flex mt="auto" pt={4} justify="space-between">
                                        <Button 
                                            colorScheme="blue" 
                                            size={{ base: "xs", md: "sm" }}
                                            width="48%"
                                            onClick={() => navigate(`/${product.category}/view/${product.id}`)}
                                        >
                                            View
                                        </Button>
                                        <Button 
                                            colorScheme="orange" 
                                            size={{ base: "xs", md: "sm" }}
                                            width="48%"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Flex>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Featured Products */}
                <Box mb={{ base: 10, md: 16 }}>
                    <Heading as="h2" size={subheadingSize} mb={{ base: 4, md: 6 }}>
                        Featured Products
                    </Heading>
                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
                        {featuredProducts.map((product) => (
                            <Box 
                                key={product.id}
                                borderWidth="1px" 
                                borderRadius="lg" 
                                overflow="hidden"
                                boxShadow="md"
                                transition="transform 0.3s"
                                _hover={{ transform: "translateY(-5px)" }}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                            >
                                <Image
                                    src={product.localImage || product.image}
                                    alt={product.title}
                                    height={{ base: "160px", md: "200px" }}
                                    width="100%"
                                    objectFit="cover"
                                />
                                <Box p={{ base: 3, md: 4 }} flex="1" display="flex" flexDirection="column">
                                    <Heading as="h3" size={{ base: "sm", md: "md" }} noOfLines={1}>
                                        {product.title}
                                    </Heading>
                                    <Text fontSize={{ base: "xs", md: "sm" }} mt={2} noOfLines={2}>
                                        {product.description}
                                    </Text>
                                    <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mt={2}>
                                        ₹{product.price}
                                    </Text>
                                    <Flex mt="auto" pt={4} justify="space-between">
                                        <Button 
                                            colorScheme="blue" 
                                            size={{ base: "xs", md: "sm" }}
                                            width="48%"
                                            onClick={() => navigate(`/${product.category}/view/${product.id}`)}
                                        >
                                            View
                                        </Button>
                                        <Button 
                                            colorScheme="orange" 
                                            size={{ base: "xs", md: "sm" }}
                                            width="48%"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Flex>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Newsletter Subscription */}
                <Box bg={sectionBg} p={{ base: 4, md: 8 }} borderRadius="lg" textAlign="center" mb={{ base: 8, md: 16 }}>
                    <Heading as="h3" size={subheadingSize} mb={{ base: 2, md: 4 }}>
                        Subscribe to Our Newsletter
                    </Heading>
                    <Text mb={{ base: 4, md: 6 }} fontSize={bodyFontSize}>
                        Get the latest updates on new products and upcoming sales
                    </Text>
                    <Flex 
                        maxW="500px" 
                        mx="auto" 
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 4, md: 0 }}
                    >
                        <InputGroup size={{ base: "md", md: "lg" }}>
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                borderRadius={{ base: "md", md: "md 0 0 md" }}
                                focusBorderColor={accentColor}
                            />
                            <InputRightElement width={{ base: "auto", md: "auto" }} display={{ base: "none", md: "flex" }}>
                                <Button 
                                    colorScheme="brand" 
                                    size={buttonSize} 
                                    borderLeftRadius={0}
                                    px={6}
                                >
                                    Subscribe
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button 
                            colorScheme="brand" 
                            size={buttonSize} 
                            width={{ base: "100%", md: "auto" }}
                            display={{ base: "flex", md: "none" }}
                        >
                            Subscribe Now
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}