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


export default function Home(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [sortOrderValue, setSortOrderValue] = useState("")

    async function fetchAndUpdateData(sortOrderValue){
        try {
            let queryParams = {}

            if (sortOrderValue) {
                queryParams._sort = "priority"
                queryParams._order = sortOrderValue
            }

            let res = await axios({
                method : "get",
                url: `http://localhost:3000/mens_Clothing`,
                params : queryParams
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
        fetchAndUpdateData(sortOrderValue)
    },[sortOrderValue])

    if (loading){
        return (<LoadingIndicator />)
    }

    if (error){
        return (<ErrorIndicator />)
    }

    return(
        <Container maxW="container.xl">
                <HStack spacing={4} my={4} >
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10} >
                    {products?.map((product)=>(
                        <ProductCard {...product} key={product.id} />
                    ))}
                    </SimpleGrid>
                </HStack>
        </Container>
    )
}