import { 
    Box,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,     
    StackDivider,
    Stack,
    Heading,
    Text,
    Button,
    Image,
    Icon
} from '@chakra-ui/react'

export default function TicketCard({title, image, description, price}){

    return(
        <Card >
            <CardHeader maxW='sm'>
                <Image h='400px' w='100%' src={image}  borderRadius='lg' />
                <Heading size='s'> { title } </Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Description
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    { description }
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Price
                    </Heading>
                    <Text pt='4' fontSize='sm'><span>&#36;</span> { price }</Text>
                </Box>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button variant='outline' colorScheme='orange'>
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}