import Marker from '../assets/marker.png';

export default function Entry() {
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img className='main-image' src="https://scrimba.com/links/travel-journal-australia-image-url" alt="Sydney Opera House"/>
      </div>  
        <div className='info-container'>
            <img className='marker' src={Marker} alt="map marker icon"/>
            <span className='country'>Australia</span>
            <a href="https://maps.app.goo.gl/Zr17SCrsJeCEKMd36" target="_blank" rel="noreferrer">View on Google Maps</a>
            <h2 className='entry-title'>Sydney Opera House</h2>
            <p className='trip-dates'>27 May, 2021 - 8 Jun, 2021</p>
            <p className='entry-text'>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>    
        </div>
    </article>
  );
}