import { Link as ReactRouterLink, Navigate} from "react-router-dom"
import { Flex, Link as ChakraLink, Button, Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'

const links = [
    {
        to: "/",
        label: "Home"
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
    const navigate = useNavigate()

    let handleClick = () =>{
        navigate("/login")
    }

    return(
        <Flex
        w="100vw" 
        p="5"
        background="white"
        justify="space-around"
        align="center"
        fontWeight="600"
        boxShadow='md'
        rounded='md' 
        bg='white'
        >
        {links?.map((link)=>(
            <ChakraLink
            as={ReactRouterLink} 
            key={link.to} 
            to={link.to}
            >
                {link.label}
            </ChakraLink>
        ))}
        <InputGroup w="500px">
            <Input  type='text' placeholder='What can we help you find?' />
            <InputRightElement>
                <SearchIcon color='green.900' />
            </InputRightElement>
        </InputGroup>
        <Button variant="solid" colorScheme="blue" onClick={handleClick} >LOGIN</Button>
        </Flex>
    )
}