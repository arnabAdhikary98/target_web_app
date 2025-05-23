import { 
    Box,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,     
    Flex,
    Stack,
    Heading,
    Text,
    Button,
    Image,
    useToast,
    useBreakpointValue,
    Badge,
    HStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import { getProductImage } from '../assets/images';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

export default function ProductCard({ id, title, image, description, price, category }) {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const toast = useToast();

    // Responsive sizes
    const cardWidth = useBreakpointValue({ base: '100%', sm: '220px', md: '240px', lg: '280px' });
    const imageHeight = useBreakpointValue({ base: '180px', md: '200px' });
    const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });
    const headingSize = useBreakpointValue({ base: 'xs', md: 'sm' });

    // Get the local image if available
    const imageSource = useMemo(() => {
        // Try to get image from our local assets first
        const localImage = getProductImage(category, id);
        // If local image is not found, use the provided image URL
        return localImage || image;
    }, [category, id, image]);

    const handleAddToCart = () => {
        addToCart({ 
            id, 
            title, 
            image: imageSource, // Use our mapped image
            description, 
            price, // Use price directly
            category 
        });
        
        toast({
            title: "Added to cart",
            description: `${title} has been added to your cart.`,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom-right"
        });
    };

    return (
        <Card 
            w={cardWidth} 
            borderWidth='0' 
            borderRadius='xl' 
            overflow='hidden' 
            boxShadow='lg' 
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{ 
                transform: "translateY(-8px)",
                boxShadow: "xl",
            }}
            h="100%"
            display="flex"
            flexDirection="column"
            className="scale-in hover-lift"
            position="relative"
            bg="white"
        >
            <Box 
                position="absolute"
                top={2}
                right={2}
                zIndex={2}
            >
                <Badge 
                    colorScheme='brand'
                    fontSize="xs"
                    px={2}
                    py={1}
                    borderRadius="full"
                    textTransform="uppercase"
                    letterSpacing="wider"
                >
                    {category}
                </Badge>
            </Box>

            <Box 
                h={imageHeight} 
                position='relative' 
                overflow="hidden"
            >
                <Image 
                    src={imageSource}
                    alt={title}
                    h='100%'
                    w='100%'
                    objectFit='cover'
                    transition="transform 0.5s"
                    _hover={{ transform: "scale(1.05)" }}
                />
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="blackAlpha.600"
                    p={2}
                    transform="translateY(100%)"
                    transition="transform 0.3s"
                    _groupHover={{ transform: "translateY(0)" }}
                >
                    <HStack spacing={2} justify="center">
                        <Button
                            size="sm"
                            leftIcon={<FaEye />}
                            onClick={() => navigate(`/${category}/view/${id}`)}
                            colorScheme="whiteAlpha"
                        >
                            Quick View
                        </Button>
                    </HStack>
                </Box>
            </Box>

            <CardBody py={4} px={4}>
                <Stack spacing={3}>
                    <Heading 
                        size={headingSize} 
                        noOfLines={2}
                        _hover={{ color: "brand.500" }}
                        cursor="pointer"
                        onClick={() => navigate(`/${category}/view/${id}`)}
                    >
                        {title}
                    </Heading>
                    
                    <Text 
                        fontSize={{ base: 'xs', md: 'sm' }} 
                        noOfLines={2}
                        color="gray.600"
                    >
                        {description}
                    </Text>
                    
                    <Text 
                        fontSize={{ base: 'lg', md: 'xl' }} 
                        fontWeight='bold'
                        color="brand.500"
                    >
                        ₹{price}
                    </Text>
                </Stack>
            </CardBody>

            <CardFooter 
                pt={0} 
                pb={4} 
                px={4} 
                mt="auto"
            >
                <Button
                    w="100%"
                    colorScheme="brand"
                    size={buttonSize}
                    leftIcon={<FaShoppingCart />}
                    onClick={handleAddToCart}
                    className="hover-lift"
                    _hover={{
                        transform: "translateY(-2px)"
                    }}
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
