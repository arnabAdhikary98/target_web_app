import { Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Categories from "../pages/Categories"
import Deals from "../pages/Deals"
import NewAndFeatured from "../pages/NewAndFeatured"
import PickupAndDelivery from "../pages/PickupAndDelivery"
import MensClothing from "../pages/MensClothing"
import WomensClothing from "../pages/WomensClothing"
import KidSection from "../pages/KidsSection"
import HomeDecor from "../pages/HomeDecor"
import Electronics from "../pages/Electronics"
import HealthStore from "../pages/HealthStore"
import Furniture from "../pages/Furniture"
import Grocery from "../pages/Grocery"
import ProductView from "../pages/ProductView"

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
            <Route path="/mens_clothing" element={<MensClothing />} />
            <Route path="/womens_clothing" element={<WomensClothing />} />
            <Route path="/kids_section" element={<KidSection />} />
            <Route path="//home_decor" element={<HomeDecor />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/health_store" element={<HealthStore />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/:category/view/:id" element={<ProductView />} />
        </Routes>
        </>
    )
}