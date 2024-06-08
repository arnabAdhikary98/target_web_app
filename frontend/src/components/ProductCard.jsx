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
    Icon
} from '@chakra-ui/react'

export default function ProductCard({title, image, description, price}){

    return (
        <Card maxW='280px' borderWidth='0' borderRadius='lg' overflow='hidden' boxShadow='md'>
            <CardHeader>
                <Box h='200px' position='relative'>
                    <Image 
                        src={image}
                        alt={title}
                        h='100%'
                        w='100%'
                        objectFit='cover'
                        position='absolute'
                        top='0'
                        left='0'
                    />
                </Box>
                <Heading mt='3' size='sm' textAlign='center'>
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Stack spacing='3'>
                    <Box>
                        <Text fontSize='sm'>{description}</Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Price
                        </Heading>
                        <Text fontSize='sm' fontWeight='bold'>
                            ${price}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter display='flex' flexDirection="column" justifyContent='space-between' alignItems='center' p='5'>
                <Button variant='solid' colorScheme='blue' size='sm' w="95%">
                    View Item
                </Button>
                <br />
                <Flex justify="space-evenly" w="100%">
                    <Button variant='outline' colorScheme='orange' size='sm' w='45%'>
                        Add to Cart
                    </Button>
                    <Button variant='solid' colorScheme='orange' size='sm' w='45%'>
                        Buy Now
                    </Button>
                </Flex>
            </CardFooter>
        </Card>
    )
}