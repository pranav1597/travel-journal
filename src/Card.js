import React from 'react'



export default function Card(props){
    // console.log(props);
    return(
        <section className="card-section">
            <div className="card-info">
            
                <div className="card_profile--image">
                    <img src={props.item.imageUrl} className="profile-image" />
                </div>
                
                <div className="card_profile--info">
                
                    <div className="location-info">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="country-name">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} className="map-link">View on Google Maps</a>
                    </div>
                    
                    <h2 className="place-heading">{props.item.title}</h2>
                    <p className="date-info">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="location-details">{props.item.description}</p>
                </div>
                
            </div>
            <span className="line"></span>
        </section>
    )
}