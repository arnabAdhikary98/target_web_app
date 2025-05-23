import './App.css'
import './styles/layout.css'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <AllRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
