import Marker from '../assets/marker.png'; 

// Ota vastaan 'item' propsi (nimenomaan 'item', ei 'data', kuten App.jsx:ssä välitit)
export default function Entry({ item }) { 
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img className='main-image' src={item.img.src} alt={item.img.alt}/>
      </div>  
        <div className='info-container'>
            <img className='marker' src={Marker} alt="map marker icon"/>
            <span className='country'>{item.country.toUpperCase()}</span> 
            <a href={item.googleMapsLink} target="_blank" rel="noreferrer">View on Google Maps</a> 
            <h2 className='entry-title'>{item.title}</h2> 
            <p className='trip-dates'>{item.dates}</p> 
            <p className='entry-text'>{item.text}</p>    
        </div>
    </article>
  );
}