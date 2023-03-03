import './App.css'
import Card from "./card"
import data from './data'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  const cards = data.reverse().map(item => {
    return (
        <Card 
      imageUrl={item.imageUrl}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      date={item.date}
      description={item.description}
    />
    
    )
  })
  
  return (
    <div className='m-auto'>
        <Header />
        {cards}
        <Footer />
    </div>
  )
}