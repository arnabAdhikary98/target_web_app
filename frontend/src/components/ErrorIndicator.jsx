import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    Button,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
import { FaExclamationTriangle, FaRedoAlt } from 'react-icons/fa';

export default function ErrorIndicator({ message, onRetry }) {
    const bgColor = useColorModeValue('white', 'gray.800');
    
    return (
        <Container maxW="container.xl" py={20}>
            <VStack
                spacing={6}
                bg={bgColor}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                className="scale-in"
                textAlign="center"
            >
                <Icon 
                    as={FaExclamationTriangle} 
                    w={16} 
                    h={16} 
                    color="brand.500"
                    className="fade-in"
                />
                
                <Heading size="lg" color="gray.700">
                    Oops! Something went wrong
                </Heading>
                
                <Text color="gray.600" fontSize="lg">
                    {message || "We couldn't load the content you requested. Please try again."}
                </Text>
                
                {onRetry && (
                    <Button
                        leftIcon={<FaRedoAlt />}
                        colorScheme="brand"
                        size="lg"
                        onClick={onRetry}
                        className="hover-lift"
                        mt={4}
                    >
                        Try Again
                    </Button>
                )}
            </VStack>
        </Container>
    );
}