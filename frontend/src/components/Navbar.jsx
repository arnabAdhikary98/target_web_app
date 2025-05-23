import { Link as ReactRouterLink, useNavigate } from "react-router-dom"
import { 
    Flex, 
    Link as ChakraLink, 
    Button, 
    Input, 
    InputGroup, 
    InputRightElement,
    Box,
    Icon,
    Text,
    Badge,
    HStack,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Image,
    Divider,
    useColorModeValue,
    IconButton,
    Collapse,
    useBreakpointValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer,
    Container
} from "@chakra-ui/react"
import { SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const links = [
    {
        to: "/",
        label: "TARGET"
    },
    {
        to: "/categories",
        label: "Categories"
    },
    {
        to: "/deals",
        label: "Deals"
    },
    {
        to: "/new_and_featured",
        label: "New & Featured"
    },
    {
        to: "/pickup_and_delivery",
        label: "Pickup & Delivery"
    }
]

export default function Navbar(){
    const { authDetails, logout } = useContext(AuthContext);
    const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();
    const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();
    const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
    const btnRef = useRef();
    
    const brandColor = useColorModeValue("brand.500", "brand.300");
    const bgColor = useColorModeValue("white", "gray.800");
    
    // Responsive display
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isTablet = useBreakpointValue({ base: false, sm: true, lg: false });
    const displaySearchBar = useBreakpointValue({ base: false, md: true });
    const displayFullNav = useBreakpointValue({ base: false, lg: true });
    const navHeight = useBreakpointValue({ base: "60px", md: "70px", lg: "80px" });
    const logoSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
    const iconSize = useBreakpointValue({ base: "18px", md: "22px" });
    const mobileMenuTop = useBreakpointValue({ base: "60px", md: "70px" });

    const handleAuthClick = () => {
        if (authDetails.isLoggedIn) {
            logout();
        } else {
            navigate("/login");
        }
    }

    return(
        <Box>
            <Flex
                position="fixed"
                top="0"
                left="0"
                right="0"
                zIndex="999"
                w="100%"
                h={navHeight}
                py={{ base: 2, md: 3 }}
                px={{ base: 2, md: 4, lg: 6 }}
                background={bgColor}
                justify="space-between"
                align="center"
                boxShadow='md'
                borderBottom="1px"
                borderColor="gray.200"
                direction="row"
                wrap="nowrap"
            >
                <Container maxW="container.xl" px={0}>
                    <Flex w="100%" align="center">
                        {/* Mobile Menu Button */}
                        {!displayFullNav && (
                            <IconButton
                                display={{ base: 'flex', lg: 'none' }}
                                onClick={onMenuToggle}
                                icon={isMenuOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                                variant="ghost"
                                aria-label="Toggle Navigation"
                                mr={2}
                                size={isMobile ? "sm" : "md"}
                            />
                        )}
                        
                        {/* Logo */}
                        <ChakraLink
                            as={ReactRouterLink}
                            to="/"
                            fontWeight="800"
                            fontSize={logoSize}
                            color={brandColor}
                            _hover={{
                                textDecoration: "none",
                                color: brandColor
                            }}
                            mr={4}
                            flex={{ base: "1", md: "none" }}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            TARGET
                        </ChakraLink>
                        
                        {/* Desktop Navigation Links */}
                        {displayFullNav && (
                            <HStack spacing={{ base: 4, xl: 8 }} display={{ base: "none", lg: "flex" }}>
                                {links.slice(1).map((link) => (
                                    <ChakraLink
                                        as={ReactRouterLink} 
                                        key={link.to} 
                                        to={link.to}
                                        fontWeight="600"
                                        fontSize="md"
                                        color="gray.700"
                                        _hover={{
                                            textDecoration: "none",
                                            color: brandColor
                                        }}
                                    >
                                        {link.label}
                                    </ChakraLink>
                                ))}
                            </HStack>
                        )}
                        
                        <Spacer />
                        
                        {/* Search Bar */}
                        {displaySearchBar && (
                            <InputGroup maxW={{ md: "300px", lg: "400px", xl: "500px" }} mx={4} flex={{ md: "1" }}>
                                <Input 
                                    type='text' 
                                    placeholder='What can we help you find?' 
                                    borderRadius="full"
                                    focusBorderColor={brandColor}
                                    size={isMobile ? "sm" : "md"}
                                />
                                <InputRightElement>
                                    <SearchIcon color={brandColor} />
                                </InputRightElement>
                            </InputGroup>
                        )}
                        
                        {/* Mobile Search Icon */}
                        {!displaySearchBar && (
                            <IconButton
                                aria-label="Search"
                                icon={<SearchIcon />}
                                variant="ghost"
                                colorScheme="brand"
                                size={isMobile ? "sm" : "md"}
                            />
                        )}
                        
                        {/* Login & Cart */}
                        <HStack spacing={{ base: 2, md: 4 }}>
                            <Button 
                                variant="outline" 
                                colorScheme="brand" 
                                onClick={handleAuthClick}
                                borderRadius="full"
                                size={{ base: "xs", sm: "sm", md: "md" }}
                                display={{ base: "none", sm: "flex" }}
                            >
                                {authDetails.isLoggedIn ? "LOGOUT" : "LOGIN"}
                            </Button>
                            
                            <Box position="relative" ref={btnRef} onClick={onCartOpen} cursor="pointer">
                                <Icon as={FaShoppingCart} boxSize={iconSize} color={brandColor} />
                                {cartCount > 0 && (
                                    <Badge 
                                        position="absolute" 
                                        top="-8px" 
                                        right="-8px" 
                                        borderRadius="full" 
                                        bg={brandColor} 
                                        color="white"
                                        fontSize="0.8em"
                                        minW="18px"
                                        height="18px"
                                        textAlign="center"
                                    >
                                        {cartCount}
                                    </Badge>
                                )}
                            </Box>
                        </HStack>
                    </Flex>
                </Container>
            </Flex>

            {/* Mobile Menu */}
            <Collapse in={isMenuOpen} animateOpacity>
                <Box
                    p={4}
                    mt={mobileMenuTop}
                    bg={bgColor}
                    display={{ lg: "none" }}
                    position="fixed"
                    w="100%"
                    zIndex="998"
                    boxShadow="md"
                >
                    <VStack spacing={4} align="stretch">
                        {links.slice(1).map((link) => (
                            <ChakraLink
                                as={ReactRouterLink} 
                                key={link.to} 
                                to={link.to}
                                fontWeight="600"
                                fontSize="md"
                                color="gray.700"
                                _hover={{
                                    textDecoration: "none",
                                    color: brandColor
                                }}
                                onClick={onMenuToggle}
                            >
                                {link.label}
                            </ChakraLink>
                        ))}
                        {!displaySearchBar && (
                            <InputGroup mt={2}>
                                <Input 
                                    type='text' 
                                    placeholder='What can we help you find?' 
                                    borderRadius="full"
                                    focusBorderColor={brandColor}
                                />
                                <InputRightElement>
                                    <SearchIcon color={brandColor} />
                                </InputRightElement>
                            </InputGroup>
                        )}
                        {!isTablet && (
                            <Button 
                                variant="outline" 
                                colorScheme="brand" 
                                onClick={handleAuthClick}
                                borderRadius="full"
                                w="100%"
                            >
                                {authDetails.isLoggedIn ? "LOGOUT" : "LOGIN"}
                            </Button>
                        )}
                    </VStack>
                </Box>
            </Collapse>

            {/* Cart Drawer */}
            <Drawer
                isOpen={isCartOpen}
                placement="right"
                onClose={onCartClose}
                finalFocusRef={btnRef}
                size={{ base: "full", sm: "md" }}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Your Cart ({cartCount} items)
                    </DrawerHeader>

                    <DrawerBody>
                        {cartItems.length === 0 ? (
                            <VStack spacing={4} mt={10}>
                                <Icon as={FaShoppingCart} boxSize={12} color="gray.300" />
                                <Text>Your cart is empty</Text>
                                <Button colorScheme="brand" onClick={() => {
                                    navigate('/');
                                    onCartClose();
                                }}>
                                    Continue Shopping
                                </Button>
                            </VStack>
                        ) : (
                            <VStack spacing={4} align="stretch">
                                {cartItems.map((item) => (
                                    <Box key={`${item.category}-${item.id}`} p={2} borderWidth="1px" borderRadius="md">
                                        <Flex>
                                            <Image 
                                                src={item.image} 
                                                alt={item.title} 
                                                boxSize={{ base: "70px", sm: "80px" }}
                                                objectFit="cover" 
                                                mr={4} 
                                                borderRadius="md"
                                            />
                                            <Box flex="1">
                                                <Text fontWeight="bold" fontSize={{ base: "sm", sm: "md" }} isTruncated>{item.title}</Text>
                                                <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.500">₹{item.price}</Text>
                                                <Flex align="center" justify="space-between" mt={2}>
                                                    <HStack>
                                                        <Button 
                                                            size="xs" 
                                                            colorScheme="gray" 
                                                            onClick={() => updateQuantity(item.id, item.category, item.quantity - 1)}
                                                        >
                                                            <Icon as={FaMinus} />
                                                        </Button>
                                                        <Text mx={2}>{item.quantity}</Text>
                                                        <Button 
                                                            size="xs" 
                                                            colorScheme="gray" 
                                                            onClick={() => updateQuantity(item.id, item.category, item.quantity + 1)}
                                                        >
                                                            <Icon as={FaPlus} />
                                                        </Button>
                                                    </HStack>
                                                    <Button 
                                                        size="sm" 
                                                        colorScheme="red" 
                                                        variant="ghost" 
                                                        onClick={() => removeFromCart(item.id, item.category)}
                                                    >
                                                        <Icon as={FaTrash} />
                                                    </Button>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                ))}
                                
                                <Divider my={4} />
                                
                                <Flex justify="space-between" fontWeight="bold">
                                    <Text>Subtotal</Text>
                                    <Text>₹{cartTotal}</Text>
                                </Flex>
                                
                                <Button colorScheme="brand" size={{ base: "md", sm: "lg" }} mt={4} w="100%">
                                    Checkout
                                </Button>
                            </VStack>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}