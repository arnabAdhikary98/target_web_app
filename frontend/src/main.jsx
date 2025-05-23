import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext.jsx"
import { CartContextProvider } from "./context/CartContext.jsx"

// Extend the theme to customize colors, fonts, etc.
const theme = extendTheme({
  colors: {
    brand: {
      50: "#ffeaea",
      100: "#ffcccc",
      200: "#ff9999",
      300: "#ff6666",
      400: "#ff3333",
      500: "#CC0000", // Target red
      600: "#B30000",
      700: "#990000",
      800: "#800000",
      900: "#660000",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    }
  },
  fonts: {
    heading: "'Helvetica Neue', -apple-system, system-ui, sans-serif",
    body: "'Helvetica Neue', -apple-system, system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        transition: "all 0.2s",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorScheme === "brand" ? "brand.500" : undefined,
          _hover: {
            bg: props.colorScheme === "brand" ? "brand.600" : undefined,
            transform: "translateY(-1px)",
            boxShadow: "sm",
          }
        }),
        ghost: {
          _hover: {
            transform: "translateY(-1px)",
          }
        }
      }
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "xl",
          overflow: "hidden",
          transition: "all 0.2s",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: "lg",
          }
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
