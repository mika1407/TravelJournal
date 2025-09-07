import Header from './componets/Header'
import Entry from './componets/Entry'


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry img={{
                src: "https://scrimba.com/links/travel-journal-japan-image-url", 
                alt: "Mount Fuji"
                }}
                title="Mount Fuji"
                location="Japan"
                googleMapsUrl="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </main>
    </>
  )
}

export default App
