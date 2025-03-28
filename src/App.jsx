import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
    </main>  
  )
}

export default App