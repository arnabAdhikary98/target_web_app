// Import Target logo from imageService
import { 
  generateHeroBanner,
  generateCategoryIcon,
  generateProductImage,
  generateDealImage,
  generateNewArrivalImage,
  generatePickupDeliveryImage,
  getImageByName,
  getSectionImage,
  logo as targetLogo
} from './imageService';

// Import real category images
import mensFashionImg from '../mensFashion.jpeg';
import womensFashionImg from '../womensFashion.jpeg';
import electronicsImg from '../electronics.jpeg';
import homeDecorImg from '../homeDecor.jpeg';
import kidsFashionImg from '../kidsFashion.jpeg';
import furnitureImg from '../furniture.jpeg';
import summerSaleImg from '../summerSaleIsLive.gif';

// Hero Images - using real images when possible
export const heroImages = {
  heroBanner: summerSaleImg,
  dealsBanner: generateHeroBanner('HOT DEALS'),
  newArrivalsBanner: generateHeroBanner('NEW ARRIVALS')
};

// Category Images
export const categoryImages = {
  mensClothing: mensFashionImg,
  womensClothing: womensFashionImg,
  kidsClothing: kidsFashionImg,
  electronics: electronicsImg,
  homeDecor: homeDecorImg,
  furniture: furnitureImg,
  grocery: generateCategoryIcon('Grocery'),
  health: generateCategoryIcon('Health')
};

// Deals Images
export const dealImages = {
  deal1: generateDealImage('Deal 1'),
  deal2: generateDealImage('Deal 2'),
  deal3: generateDealImage('Deal 3'),
  deal4: generateDealImage('Deal 4'),
  deal5: generateDealImage('Deal 5'),
  deal6: generateDealImage('Deal 6'),
  deal7: generateDealImage('Deal 7'),
  deal8: generateDealImage('Deal 8')
};

// New & Featured Images
export const newFeaturedImages = {
  new1: generateNewArrivalImage('New 1'),
  new2: generateNewArrivalImage('New 2'),
  new3: generateNewArrivalImage('New 3'),
  new4: generateNewArrivalImage('New 4'),
  new5: generateNewArrivalImage('New 5'),
  new6: generateNewArrivalImage('New 6'),
  new7: generateNewArrivalImage('New 7'),
  new8: generateNewArrivalImage('New 8')
};

// Pickup & Delivery Images
export const pickupDeliveryImages = {
  pickup1: generatePickupDeliveryImage('Pickup 1'),
  pickup2: generatePickupDeliveryImage('Pickup 2'),
  pickup3: generatePickupDeliveryImage('Pickup 3'),
  pickup4: generatePickupDeliveryImage('Pickup 4'),
  pickup5: generatePickupDeliveryImage('Pickup 5'),
  pickup6: generatePickupDeliveryImage('Pickup 6'),
  pickup7: generatePickupDeliveryImage('Pickup 7'),
  pickup8: generatePickupDeliveryImage('Pickup 8')
};

// Product Images by Category
export const productImages = {
  mensClothing: {
    product1: generateProductImage('Mens 1'),
    product2: generateProductImage('Mens 2'),
    product3: generateProductImage('Mens 3'),
    product4: generateProductImage('Mens 4'),
    product5: generateProductImage('Mens 5'),
    product6: generateProductImage('Mens 6'),
    product7: generateProductImage('Mens 7'),
    product8: generateProductImage('Mens 8')
  },
  womensClothing: {
    product1: generateProductImage('Womens 1'),
    product2: generateProductImage('Womens 2'),
    product3: generateProductImage('Womens 3'),
    product4: generateProductImage('Womens 4'),
    product5: generateProductImage('Womens 5'),
    product6: generateProductImage('Womens 6'),
    product7: generateProductImage('Womens 7'),
    product8: generateProductImage('Womens 8')
  },
  electronics: {
    product1: generateProductImage('Electronics 1'),
    product2: generateProductImage('Electronics 2'),
    product3: generateProductImage('Electronics 3'),
    product4: generateProductImage('Electronics 4'),
    product5: generateProductImage('Electronics 5'),
    product6: generateProductImage('Electronics 6'),
    product7: generateProductImage('Electronics 7'),
    product8: generateProductImage('Electronics 8')
  }
};

// Map of camelCase image names to use for different product IDs and categories
const productToImageMap = {
  // Electronics products by ID - matched to images from screenshots
  electronics: {
    1: 'smartWatch',
    2: 'ultraSlimLaptop',
    3: 'wirelessEarbuds',
    4: 'smartHomeHub',
    5: 'robotVacuumCleaner',
    6: 'wirelessNoiseCancellingHeadphones',
    7: 'smart4kTv',
    8: 'gamingConsole',
    9: 'wirelessChargingStation', 
    10: 'smartIndoorGarden',
    11: 'portableBluetoothSpeaker',
    12: 'fitnessTracker'
  },
  
  // Men's clothing products by ID - matched to images from screenshots
  mens_clothing: {
    1: 'classicWhiteTshirt',
    2: 'blackLeatherJacket', 
    3: 'blueDenimJeans',
    4: 'greyHoodie'
  },
  
  // Kitchen/appliance products - matched to images from screenshots
  kitchen_appliances: {
    1: 'airFryer',
    2: 'cookwareSet',
    3: 'blenderSet',
    4: 'coffeeMaker'
  },
  
  // Grocery products - matched to images from screenshots
  grocery: {
    1: 'readyToHeatMeals',
    2: 'gourmetCheeseWinePairing',
    3: 'householdEssentialsKit',
    4: 'freshBakeryBox',
    5: 'premiumMeatSelection',
    6: 'pantryEssentialsBundle',
    7: 'freshProduceBox',
    8: 'mealKitFamilyDinner'
  },
  
  // Deals products - matched to images from screenshots
  deals: {
    1: 'smart4kTv',
    2: 'wirelessNoiseCancellingHeadphones',
    3: 'robotVacuumCleaner',
    4: 'airFryer',
    5: 'fitnessTracker',
    6: 'coffeeMaker',
    7: 'blenderSet',
    8: 'cookwareSet'
  },
  
  // New featured products - matched to actual images from screenshots
  new_featured: {
    1: 'smartHomeHub',
    2: 'wirelessEarbuds',
    3: 'ultraSlimLaptop',
    4: 'smartWatch',
    5: 'gamingConsole',
    6: 'portableBluetoothSpeaker',
    7: 'smartIndoorGarden',
    8: 'wirelessChargingStation'
  },
  
  // Pickup & delivery products - matched to images from screenshots
  pickup_delivery: {
    1: 'freshProduceBox',
    2: 'mealKitFamilyDinner',
    3: 'pantryEssentialsBundle',
    4: 'premiumMeatSelection',
    5: 'freshBakeryBox',
    6: 'householdEssentialsKit',
    7: 'gourmetCheeseWinePairing',
    8: 'readyToHeatMeals'
  }
};

/**
 * Helper function to get a local image for a product based on category and ID
 * @param {string} category - Product category
 * @param {number} id - Product ID 
 * @returns {string} - URL of the local image
 */
export const getProductImage = (category, id) => {
  // Try to get the exact image name from our mapping
  const categoryMap = productToImageMap[category];
  
  if (categoryMap && categoryMap[id]) {
    // Get image by the exact camelCase name
    return getImageByName(categoryMap[id]);
  }
  
  // Use section image if available
  const sectionImage = getSectionImage(category);
  if (sectionImage) {
    return sectionImage;
  }
  
  // If no direct section mapping, try to match based on ID and category
  if (category === 'electronics' || category === 'electronics_appliances') {
    // Cycle through electronics images if no specific ID match
    const electronicsImages = Object.values(productToImageMap.electronics);
    return getImageByName(electronicsImages[(id - 1) % electronicsImages.length]);
  } 
  else if (category === 'mens_clothing') {
    // Cycle through mens_clothing images if no specific ID match
    const mensImages = Object.values(productToImageMap.mens_clothing);
    return getImageByName(mensImages[(id - 1) % mensImages.length]);
  }
  else if (category === 'womens_clothing' || category === 'womens_fashion') {
    return womensFashionImg;
  }
  else if (category === 'kids_section' || category === 'kids_fashion') {
    return kidsFashionImg;
  }
  else if (category === 'home_decor') {
    return homeDecorImg;
  }
  else if (category === 'furniture') {
    return furnitureImg;
  }
  else if (category === 'grocery') {
    // Cycle through grocery images if no specific ID match
    const groceryImages = Object.values(productToImageMap.grocery);
    return getImageByName(groceryImages[(id - 1) % groceryImages.length]);
  }
  else if (category === 'deals') {
    // Cycle through deals images if no specific ID match
    const dealsImages = Object.values(productToImageMap.deals);
    return getImageByName(dealsImages[(id - 1) % dealsImages.length]);
  }
  else if (category === 'new_featured') {
    // Cycle through new_featured images if no specific ID match
    const newFeaturedImages = Object.values(productToImageMap.new_featured);
    return getImageByName(newFeaturedImages[(id - 1) % newFeaturedImages.length]);
  }
  else if (category === 'pickup_delivery') {
    // Get pickup/delivery images from our grocery set
    const pickupImages = Object.values(productToImageMap.pickup_delivery);
    return getImageByName(pickupImages[(id - 1) % pickupImages.length]);
  }
  
  // Default case - use product image generation
  return generateProductImage('Product', category);
};

/**
 * Helper function to get a category image
 * @param {string} category - Category name
 * @returns {string} - URL of the category image
 */
export const getCategoryImage = (category) => {
  // Try to get a direct section image first
  const sectionImage = getSectionImage(category);
  if (sectionImage) {
    return sectionImage;
  }
  
  // Fall back to the category mapping
  switch(category) {
    case 'mens_clothing':
      return categoryImages.mensClothing;
    case 'womens_clothing':
    case 'womens_fashion':
      return categoryImages.womensClothing;
    case 'kids_section':
    case 'kids_fashion':
      return categoryImages.kidsClothing;
    case 'electronics':
      return categoryImages.electronics;
    case 'home_decor':
      return categoryImages.homeDecor;
    case 'furniture':
      return categoryImages.furniture;
    case 'grocery':
    case 'grocery_store':
      return categoryImages.grocery;
    case 'health_store':
    case 'health':
      return categoryImages.health;
    default:
      return categoryImages.mensClothing;
  }
}; 