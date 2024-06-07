import { Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Categories from "../pages/Categories"
import Deals from "../pages/Deals"
import NewAndFeatured from "../pages/NewAndFeatured"
import PickupAndDelivery from "../pages/PickupAndDelivery"

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/new_and_featured" element={<NewAndFeatured />} />
            <Route path="/pickup_and_delivery" element={<PickupAndDelivery />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </>
    )
}