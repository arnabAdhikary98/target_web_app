import {
    Box,
    Container,
    Flex,
    Skeleton,
    SkeletonText,
    SimpleGrid,
    useBreakpointValue
} from '@chakra-ui/react';

export default function LoadingIndicator() {
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
    
    return (
        <Container maxW="container.xl" py={8}>
            <SimpleGrid columns={columns} spacing={6}>
                {[...Array(8)].map((_, i) => (
                    <Box
                        key={i}
                        borderRadius="xl"
                        overflow="hidden"
                        bg="white"
                        className="scale-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <Skeleton
                            height="200px"
                            className="shimmer-effect"
                            startColor="gray.100"
                            endColor="gray.300"
                        />
                        <Box p={4}>
                            <Skeleton
                                height="20px"
                                width="80%"
                                mb={4}
                                className="shimmer-effect"
                                startColor="gray.100"
                                endColor="gray.300"
                            />
                            <SkeletonText
                                noOfLines={2}
                                spacing={4}
                                className="shimmer-effect"
                                startColor="gray.100"
                                endColor="gray.300"
                            />
                            <Skeleton
                                height="16px"
                                width="40%"
                                mt={4}
                                className="shimmer-effect"
                                startColor="gray.100"
                                endColor="gray.300"
                            />
                            <Skeleton
                                height="36px"
                                mt={4}
                                className="shimmer-effect"
                                startColor="gray.100"
                                endColor="gray.300"
                            />
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
}