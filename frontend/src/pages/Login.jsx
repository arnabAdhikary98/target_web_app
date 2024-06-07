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

    return(
        <Container maxW="md" mt="20">
            <VStack spacing={7}>
                <Heading as="h1" size="xl">User Login</Heading>

                <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button variant="outline" colorScheme='blue' onClick={handleClick} >Login</Button>
            </VStack>
        </Container>
    )
}