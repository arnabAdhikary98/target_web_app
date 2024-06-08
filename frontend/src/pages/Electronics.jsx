import { 
    Container,
    SimpleGrid,
    HStack
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import LoadingIndicator from "../components/LoadingIndicator"
import ErrorIndicator from "../components/ErrorIndicator"
import ProductCard from "../components/ProductCard"


export default function Electronics(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    async function fetchAndUpdateData(){
        try {
            let res = await axios({
                method : "get",
                url: `http://localhost:3000/electronics_appliances`,
            })

            let data = res?.data
            setLoading(false)
            setProducts(data)
            
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }


    useEffect(()=>{
        fetchAndUpdateData()
    },[])

    if (loading){
        return (<LoadingIndicator />)
    }

    if (error){
        return (<ErrorIndicator />)
    }

    return(
        <Container maxW="container.xl" pt="50px">
                <HStack  spacing={4} my={4}>
                    <SimpleGrid spacing={6} p={5} columns={{base: 1, sm: 2, md: 3, lg: 4}} >
                    {products?.map((product)=>(
                        <ProductCard {...product} key={product.id} />
                    ))}
                    </SimpleGrid>
                </HStack>
        </Container>
    )
}