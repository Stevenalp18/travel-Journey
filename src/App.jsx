import './App.css'
import Card from "./card"
import data from './data'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  const cards = data.map(item => {
    return (
        <Card 
      imageUrl={item.imageUrl}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      date={item.date}
      personalNotes={item.personalNote}
    />
    
    )
  })
  
  return (
    <div>
        <Header />
        {cards}
        <Footer />
    </div>
  )
}