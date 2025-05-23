/**
 * Image Service - Maps real images to various sections and product types
 */

// Import real images for different categories
import mensFashionImg from '../mensFashion.jpeg';
import womensFashionImg from '../womensFashion.jpeg';
import electronicsImg from '../electronics.jpeg';
import homeDecorImg from '../homeDecor.jpeg';
import kidsFashionImg from '../kidsFashion.jpeg';
import furnitureImg from '../furniture.jpeg';
import targetLogo from '../Target.png';
import summerSaleImg from '../summerSaleIsLive.gif';

// Import product images
// Electronics
import smartWatch from '../smartWatch.jpg';
import ultraSlimLaptop from '../ultraSlimLaptop.jpg';
import wirelessEarbuds from '../wirelessEarbuds.jpg';
import smartHomeHub from '../smartHomeHub.jpg';
import robotVacuumCleaner from '../robotVacuumCleaner.jpg';
import wirelessNoiseCancellingHeadphones from '../wirelessNoiseCancellingHeadphones.jpg';
import smart4kTv from '../smart4kTv.png';
import wirelessChargingStation from '../wirelessChargingStation.jpg';
import smartIndoorGarden from '../smartIndoorGarden.jpeg';
import portableBluetoothSpeaker from '../portableBluetoothSpeaker.jpeg';
import gamingConsole from '../gamingConsole.jpg';
import fitnessTracker from '../fitnessTracker.jpg';

// Kitchen appliances
import airFryer from '../airFryer.jpg';
import cookwareSet from '../cookwareSet.jpg';
import blenderSet from '../blenderSet.jpeg';
import coffeeMaker from '../coffeeMaker.jpeg';

// Clothing
import greyHoodie from '../greyHoodie.jpeg';
import blackLeatherJacket from '../blackLeatherJacket.jpg';
import blueDenimJeans from '../blueDenimJeans.jpeg';
import classicWhiteTshirt from '../classicWhiteTshirt.jpg';

// Grocery
import readyToHeatMeals from '../readyToHeatMeals.jpeg';
import gourmetCheeseWinePairing from '../gourmetCheese&WinePairing.jpeg';
import householdEssentialsKit from '../householdEssentialsKit.jpeg';
import freshBakeryBox from '../freshBakeryBox.jpg';
import premiumMeatSelection from '../premiumMeatSelection.jpeg';
import pantryEssentialsBundle from '../pantryEssentialsBundle.jpeg';
import freshProduceBox from '../freshProduceBox.jpeg';
import mealKitFamilyDinner from '../mealKitFamilyDinner.jpeg';

/**
 * Generate a placeholder image using placehold.co service
 * @param {number} width - Image width in pixels
 * @param {number} height - Image height in pixels
 * @param {string} bgColor - Background color hex code (without #)
 * @param {string} textColor - Text color hex code (without #)
 * @param {string} text - Text to display on the placeholder
 * @returns {string} - Placeholder image URL
 */
const generatePlaceholder = (width = 400, height = 300, bgColor = 'cc0000', textColor = 'ffffff', text = 'Product') => {
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
};

// Direct mapping between section names and their appropriate images
const sectionImageMap = {
  // Main sections
  'mens_clothing': mensFashionImg,
  'mens_fashion': mensFashionImg,
  'MensClothing': mensFashionImg,
  'womens_clothing': womensFashionImg,
  'womens_fashion': womensFashionImg,
  'WomensClothing': womensFashionImg,
  'kids_section': kidsFashionImg,
  'kids_fashion': kidsFashionImg,
  'KidsSection': kidsFashionImg,
  'electronics': electronicsImg,
  'Electronics': electronicsImg,
  'electronics_appliances': electronicsImg,
  'home_decor': homeDecorImg,
  'HomeDecor': homeDecorImg,
  'furniture': furnitureImg,
  'Furniture': furnitureImg,
  'summer_sale': summerSaleImg,
  'summerSale': summerSaleImg
};

// Exact mapping of product IDs to their images by category
const productImageMap = {
  mens_clothing: {
    1: classicWhiteTshirt,
    2: blueDenimJeans,
    3: blackLeatherJacket,
    4: greyHoodie
  }
};

// General image name mapping
const imageNameMap = {
  // Electronics
  'smartWatch': smartWatch,
  'ultraSlimLaptop': ultraSlimLaptop,
  'wirelessEarbuds': wirelessEarbuds,
  'smartHomeHub': smartHomeHub,
  'robotVacuumCleaner': robotVacuumCleaner,
  'wirelessNoiseCancellingHeadphones': wirelessNoiseCancellingHeadphones,
  'smart4kTv': smart4kTv,
  'wirelessChargingStation': wirelessChargingStation,
  'smartIndoorGarden': smartIndoorGarden,
  'portableBluetoothSpeaker': portableBluetoothSpeaker,
  'gamingConsole': gamingConsole,
  'fitnessTracker': fitnessTracker,
  
  // Kitchen appliances
  'airFryer': airFryer,
  'cookwareSet': cookwareSet,
  'blenderSet': blenderSet,
  'coffeeMaker': coffeeMaker,
  
  // Clothing
  'greyHoodie': greyHoodie,
  'blackLeatherJacket': blackLeatherJacket,
  'blueDenimJeans': blueDenimJeans,
  'classicWhiteTshirt': classicWhiteTshirt,
  
  // Grocery
  'readyToHeatMeals': readyToHeatMeals,
  'gourmetCheeseWinePairing': gourmetCheeseWinePairing,
  'householdEssentialsKit': householdEssentialsKit,
  'freshBakeryBox': freshBakeryBox,
  'premiumMeatSelection': premiumMeatSelection,
  'pantryEssentialsBundle': pantryEssentialsBundle,
  'freshProduceBox': freshProduceBox,
  'mealKitFamilyDinner': mealKitFamilyDinner
};

// Map product titles to their corresponding image names
const productTitleImageMap = {
  // Electronics
  'Smart Watch': 'smartWatch',
  'Ultra-Slim Laptop': 'ultraSlimLaptop',
  'Wireless Earbuds': 'wirelessEarbuds',
  'Smart Home Hub': 'smartHomeHub',
  'Robot Vacuum Cleaner': 'robotVacuumCleaner',
  'Wireless Noise-Cancelling Headphones': 'wirelessNoiseCancellingHeadphones',
  'Smart 4K TV': 'smart4kTv',
  'Wireless Charging Station': 'wirelessChargingStation',
  'Smart Indoor Garden': 'smartIndoorGarden',
  'Portable Bluetooth Speaker': 'portableBluetoothSpeaker',
  'Gaming Console': 'gamingConsole',
  'Fitness Tracker': 'fitnessTracker',

  // Kitchen appliances
  'Air Fryer': 'airFryer',
  'Cookware Set': 'cookwareSet',
  'Blender Set': 'blenderSet',
  'Coffee Maker': 'coffeeMaker',

  // Clothing
  'Grey Hoodie': 'greyHoodie',
  'Black Leather Jacket': 'blackLeatherJacket',
  'Blue Denim Jeans': 'blueDenimJeans',
  'Classic White T-Shirt': 'classicWhiteTshirt',

  // Grocery
  'Ready-to-Heat Meals': 'readyToHeatMeals',
  'Gourmet Cheese & Wine Pairing': 'gourmetCheeseWinePairing',
  'Household Essentials Kit': 'householdEssentialsKit',
  'Fresh Bakery Box': 'freshBakeryBox',
  'Premium Meat Selection': 'premiumMeatSelection',
  'Pantry Essentials Bundle': 'pantryEssentialsBundle',
  'Fresh Produce Box': 'freshProduceBox',
  'Meal Kit - Family Dinner': 'mealKitFamilyDinner'
};

/**
 * Find best matching product image based on title and section
 * @param {string} title - Product title
 * @param {string} section - Product section/category
 * @returns {string} - Image source
 */
const findMatchingProductImage = (title, section) => {
  if (!title && !section) return null;
  
  // First check if there's a direct match in the product title mapping
  if (title && productTitleImageMap[title]) {
    return imageNameMap[productTitleImageMap[title]];
  }
  
  // Check if section directly maps to an image
  if (section && sectionImageMap[section]) {
    return sectionImageMap[section];
  }
  
  // Try exact image name match by camelCase
  if (title && title.replace(/\s/g, '') in imageNameMap) {
    return imageNameMap[title.replace(/\s/g, '')];
  }
  
  // Try exact match from image map
  if (title && imageNameMap[title]) {
    return imageNameMap[title];
  }
  
  // Try smart matching of product name to image name
  if (title) {
    // First try matching against our product title map
    for (const [key, value] of Object.entries(productTitleImageMap)) {
      if (title.toLowerCase().includes(key.toLowerCase()) || 
          key.toLowerCase().includes(title.toLowerCase())) {
        return imageNameMap[value];
      }
    }
    
    // If no match found, try word-by-word matching
    const titleWords = title.toLowerCase().split(/[\s-]+/);
    let bestMatch = null;
    let maxMatchingWords = 0;
    
    for (const [key, value] of Object.entries(imageNameMap)) {
      // Convert camelCase to space-separated words for matching
      const keyWords = key.replace(/([A-Z])/g, ' $1').trim().toLowerCase().split(/\s+/);
      
      // Count matching words
      const matchingWords = keyWords.filter(word => titleWords.some(titleWord => 
        titleWord.includes(word) || word.includes(titleWord)
      )).length;
      
      if (matchingWords > maxMatchingWords) {
        maxMatchingWords = matchingWords;
        bestMatch = value;
      }
    }
    
    if (bestMatch && maxMatchingWords > 0) {
      return bestMatch;
    }
  }
  
  // Match based on specific product types
  if (title) {
    const lowerTitle = title.toLowerCase();
    
    // Electronics products
    if (lowerTitle.includes('tv') || lowerTitle.includes('television')) {
      return smart4kTv;
    } else if (lowerTitle.includes('watch') || lowerTitle.includes('smartwatch')) {
      return smartWatch;
    } else if (lowerTitle.includes('laptop') || lowerTitle.includes('notebook')) {
      return ultraSlimLaptop;
    } else if (lowerTitle.includes('headphone') || lowerTitle.includes('noise')) {
      return wirelessNoiseCancellingHeadphones;
    } else if (lowerTitle.includes('vacuum') || lowerTitle.includes('robot')) {
      return robotVacuumCleaner;
    } else if (lowerTitle.includes('earbud') || lowerTitle.includes('wireless audio')) {
      return wirelessEarbuds;
    } else if (lowerTitle.includes('speaker') || lowerTitle.includes('bluetooth')) {
      return portableBluetoothSpeaker;
    } else if (lowerTitle.includes('charger') || lowerTitle.includes('charging')) {
      return wirelessChargingStation;
    } else if (lowerTitle.includes('console') || lowerTitle.includes('gaming')) {
      return gamingConsole;
    } else if (lowerTitle.includes('fitness') || lowerTitle.includes('tracker')) {
      return fitnessTracker;
    } else if (lowerTitle.includes('smart home') || lowerTitle.includes('hub')) {
      return smartHomeHub;
    } else if (lowerTitle.includes('garden') || lowerTitle.includes('indoor plant')) {
      return smartIndoorGarden;
    }
    
    // Kitchen/Home products
    else if (lowerTitle.includes('fryer') || lowerTitle.includes('air fryer')) {
      return airFryer;
    } else if (lowerTitle.includes('cookware') || lowerTitle.includes('pots and pans')) {
      return cookwareSet;
    } else if (lowerTitle.includes('blender') || lowerTitle.includes('mixer')) {
      return blenderSet;
    } else if (lowerTitle.includes('coffee') || lowerTitle.includes('espresso')) {
      return coffeeMaker;
    }
    
    // Clothing products
    else if (lowerTitle.includes('hoodie') || lowerTitle.includes('sweatshirt')) {
      return greyHoodie;
    } else if (lowerTitle.includes('jacket') || lowerTitle.includes('leather')) {
      return blackLeatherJacket;
    } else if (lowerTitle.includes('jeans') || lowerTitle.includes('denim')) {
      return blueDenimJeans;
    } else if (lowerTitle.includes('t-shirt') || lowerTitle.includes('tee')) {
      return classicWhiteTshirt;
    }
    
    // Grocery products
    else if (lowerTitle.includes('produce') || lowerTitle.includes('fruit') || lowerTitle.includes('vegetable')) {
      return freshProduceBox;
    } else if (lowerTitle.includes('meat') || lowerTitle.includes('beef') || lowerTitle.includes('protein')) {
      return premiumMeatSelection;
    } else if (lowerTitle.includes('bakery') || lowerTitle.includes('bread') || lowerTitle.includes('pastry')) {
      return freshBakeryBox;
    } else if (lowerTitle.includes('pantry') || lowerTitle.includes('essentials') || lowerTitle.includes('staples')) {
      return pantryEssentialsBundle;
    } else if (lowerTitle.includes('meal') || lowerTitle.includes('dinner') || lowerTitle.includes('ready')) {
      return readyToHeatMeals;
    } else if (lowerTitle.includes('cheese') || lowerTitle.includes('wine')) {
      return gourmetCheeseWinePairing;
    } else if (lowerTitle.includes('household') || lowerTitle.includes('cleaning')) {
      return householdEssentialsKit;
    }
  }
  
  // Match based on section/category if no word match found
  if (section) {
    const lowerSection = section.toLowerCase();
    if (lowerSection.includes('electronics')) {
      return electronicsImg;
    } else if (lowerSection.includes('men')) {
      return mensFashionImg;
    } else if (lowerSection.includes('women')) {
      return womensFashionImg;
    } else if (lowerSection.includes('kids')) {
      return kidsFashionImg;
    } else if (lowerSection.includes('home') || lowerSection.includes('decor')) {
      return homeDecorImg;
    } else if (lowerSection.includes('furniture')) {
      return furnitureImg;
    } else if (lowerSection.includes('grocery') || lowerSection.includes('food')) {
      return freshProduceBox;
    }
  }
  
  // Default to placeholder
  return generatePlaceholder(400, 300, 'cc0000', 'ffffff', title || section || 'Product');
};

/**
 * Generate a product image
 * @param {string} text - Product name
 * @param {string} section - Product section/category (optional)
 * @returns {string} - Image source
 */
export const generateProductImage = (text, section = '') => {
  return findMatchingProductImage(text, section);
};

/**
 * Generate a deal image
 * @param {string} text - Deal name
 * @returns {string} - Image source
 */
export const generateDealImage = (text) => {
  return findMatchingProductImage(text, 'deals');
};

/**
 * Generate a new arrival image
 * @param {string} text - New arrival name
 * @returns {string} - Image source
 */
export const generateNewArrivalImage = (text) => {
  return findMatchingProductImage(text, 'new_featured');
};

/**
 * Generate a pickup/delivery image
 * For this section, we'll use specific grocery-related images
 * @param {string} text - Pickup/delivery name
 * @returns {string} - Image source
 */
export const generatePickupDeliveryImage = (text) => {
  const index = parseInt(text.replace(/\D/g, '')) || 1;
  
  // Map pickup delivery numbers to specific grocery images
  switch(index % 8) {
    case 1: return freshProduceBox;
    case 2: return mealKitFamilyDinner;
    case 3: return pantryEssentialsBundle;
    case 4: return premiumMeatSelection;
    case 5: return freshBakeryBox;
    case 6: return householdEssentialsKit;
    case 7: return gourmetCheeseWinePairing;
    case 0: return readyToHeatMeals;
    default: return freshProduceBox;
  }
};

/**
 * Generate a category-specific icon
 * @param {string} category - Category name
 * @returns {string} - Image source
 */
export const generateCategoryIcon = (category) => {
  if (!category) return null;
  
  const normalizedCategory = category.toLowerCase().replace(/[_\s]/g, '');
  
  // First try exact match in section image map
  for (const [key, value] of Object.entries(sectionImageMap)) {
    if (key.toLowerCase().replace(/[_\s]/g, '') === normalizedCategory) {
      return value;
    }
  }
  
  // If no exact match, try to find a matching section
  if (normalizedCategory.includes('men')) {
    return mensFashionImg;
  } else if (normalizedCategory.includes('women')) {
    return womensFashionImg;
  } else if (normalizedCategory.includes('kid')) {
    return kidsFashionImg;
  } else if (normalizedCategory.includes('electronic')) {
    return electronicsImg;
  } else if (normalizedCategory.includes('home') || normalizedCategory.includes('decor')) {
    return homeDecorImg;
  } else if (normalizedCategory.includes('furniture')) {
    return furnitureImg;
  }
  
  // Default to placeholder if no match found
  return generatePlaceholder(400, 300, 'cc0000', 'ffffff', category);
};

/**
 * Get image by name directly from imageNameMap
 * @param {string} name - Image name
 * @returns {string} - Image source or null if not found
 */
export const getImageByName = (name) => {
  if (!name) return null;
  return imageNameMap[name] || null;
};

/**
 * Get section image directly from sectionImageMap
 * @param {string} section - Section name
 * @returns {string} - Image source or null if not found
 */
export const getSectionImage = (section) => {
  if (!section) return null;
  return sectionImageMap[section] || null;
};

// Export hero images and category images for easy access
export const heroImages = {
  heroBanner: summerSaleImg,
  dealsBanner: summerSaleImg,
  newArrivalsBanner: summerSaleImg
};

export const categoryImages = {
  mensClothing: mensFashionImg,
  womensClothing: womensFashionImg,
  electronics: electronicsImg,
  homeDecor: homeDecorImg,
  kidsClothing: kidsFashionImg,
  furniture: furnitureImg
};

/**
 * Generate a hero banner image based on the section
 * @param {string} section - Section name (optional)
 * @returns {string} - Image source
 */
export const generateHeroBanner = (section = '') => {
  const lowerSection = section.toLowerCase();
  
  if (lowerSection.includes('deal')) {
    return heroImages.dealsBanner;
  } else if (lowerSection.includes('new') || lowerSection.includes('featured')) {
    return heroImages.newArrivalsBanner;
  }
  
  // Default to main hero banner
  return heroImages.heroBanner;
};

/**
 * Get product image by category and id
 * @param {string} category - Product category
 * @param {number} id - Product ID
 * @returns {string} - Image source
 */
export function getProductImage(category, id) {
  if (productIdMap[category] && productIdMap[category][id]) {
    return productIdMap[category][id];
  }
  return null;
}

// Export the Target logo
export const logo = targetLogo;