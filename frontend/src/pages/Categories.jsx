import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

let Categories = () =>{
    const navigate = useNavigate()

    return(
        <SimpleGrid spacing={6} p={5} columns={{base: 1, sm: 2, md: 3, lg: 4}} pt="100px">
            <Card
            p={2} 
            bgImage="url('https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            >
                <CardHeader>
                    <Heading size='md'> Men's Clothing</Heading>
                </CardHeader>
                <CardBody>
                    <Text >Upgrade your look with the latest in men's fashion, from sleek suits to casual essentials.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/mens_clothing")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://www.azafashions.com/blog/wp-content/uploads/2024/01/9-Fashion-Trends-In-2024.jpg')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Women's Clothing </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Turn heads with trendy dresses, chic tops, and stylish accessories.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/womens_clothing")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://cdna.artstation.com/p/assets/images/images/014/962/182/large/shubham-meena-01.jpg?1546496062')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Kids Section </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Adorable, comfy outfits and accessories for active kids.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/kids_section")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://png.pngtree.com/background/20230527/original/pngtree-living-room-is-painted-with-geometric-black-lines-picture-image_2769795.jpg')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Home Decor </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Transform your home with stylish furniture and unique decor.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/home_decor")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://st3.depositphotos.com/1006463/35273/i/450/depositphotos_352731028-stock-photo-render-home-appliances-collection-set.jpg')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Electronics </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Discover cutting-edge gadgets and essential tech accessories.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/electronics")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://media.istockphoto.com/id/1068336552/photo/where-your-wellness-is-put-first.jpg?s=612x612&w=0&k=20&c=-SljAOOi_1sitTpbkyaqwRgtOesSfRmhrz6DCjsijjA=')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Health Store </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Stay healthy with premium supplements and fitness gear.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/health_store")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://goodhomes.wwmindia.com/content/2020/oct/0028--venturafadd1603192445.jpg')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Furniture </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Discover stylish furniture that transforms your space with comfort and elegance..</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/furniture")}>View here</Button>
                </CardFooter>
            </Card>
            <Card
            p={2}
            bgImage="url('https://w0.peakpx.com/wallpaper/484/117/HD-wallpaper-supermarket-and-background-grocery-store.jpg')" 
            color="white"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover">
                <CardHeader>
                    <Heading size='md'> Grocery </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Explore fresh produce and gourmet treats for delicious meals and everyday essentials.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='red' onClick={()=> navigate("/grocery")}>View here</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}

export default Categories