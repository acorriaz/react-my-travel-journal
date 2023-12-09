import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import PlacesData from './data.jsx'

function App() {
  const places = PlacesData.map(place => {
    return (
      <Hero
        key={place.id}
        item={place}
      />)
  })

  return (
    <>
      <Navbar />
      <div className="card-container">
        {places}
      </div>
    </>
  )
}

export default App
