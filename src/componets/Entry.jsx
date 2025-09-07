import Marker from '../assets/marker.png';

export default function Entry() {
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img className='main-image' src="https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg?w=300" alt="mount fuji"/>
      </div>  
        <div className='info-container'>
            <img className='marker' src={Marker} alt="map marker icon"/>
            <span className='country'>JAPAN</span>
            <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" rel="noreferrer">View on Google Maps</a>
            <h2 className='entry-title'>Mount Fuji</h2>
            <p className='trip-dates'>12 Jan, 2021 - 24 Jan, 2021</p>
            <p className='entry-text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>    
        </div>
    </article>
  );
}