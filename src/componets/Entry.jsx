import Marker from '../assets/marker.png'; 

export default function Entry(props) { 
  console.log(props);
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img className='main-image' src={props.img.src} alt={props.img.alt}/>
      </div>  
        <div className='info-container'>
            <img className='marker' src={Marker} alt="map marker icon"/>
            <span className='country'>{props.location.toUpperCase()}</span> 
            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a> 
            <h2 className='entry-title'>{props.title}</h2>
            <p className='trip-dates'>{props.dates} </p>
            <p className='entry-text'>{props.description}</p> 
        </div>
    </article>
  );
}