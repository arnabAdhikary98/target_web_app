import { Heading, Input, Button, VStack, Container } from "@chakra-ui/react"
import { useContext, useState } from "react"
import axios from "axios"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login, authDetails: { isLoggedIn } } = useContext(AuthContext)

    async function handleClick(){
        try {
            let res = await axios({
                method: "post",
                url: "http://localhost:3000/userLoginData",
                data: {
                    email,
                    password,
                }
            })
            login(res?.data?.token)
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoggedIn){
        return <Navigate to="/" />
    } 

    return (
        <Container maxW="md" mt="20" p={8} boxShadow="lg" borderRadius="md" bg="white">
            <VStack spacing={7}>
                <Heading as="h1" size="xl" textAlign="center">User Login</Heading>

                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outline"
                    focusBorderColor="blue.500"
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outline"
                    focusBorderColor="blue.500"
                />

                <Button
                    variant="solid"
                    colorScheme='blue'
                    onClick={handleClick}
                    w="100%"
                >
                    Login
                </Button>
            </VStack>
        </Container>
    )
}