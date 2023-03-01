import './App.css'
import Card from "./card"
import data from './data'

export default function App() {
  const cards = data.map(item => {
    return (
    <Card 
      imageUrl={item.imageUrl}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
    />
    )
  })
  
  return (
    <div>
        {cards}
    </div>
  )
}