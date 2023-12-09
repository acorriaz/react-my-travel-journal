import pinImage from "../assets/svg/pin.svg"

export default function Hero(props) {
  return (
    <section>
      <div className="card">
        <img src={props.item.coverImg} alt={props.item.title}/>
        <div className="card-information">
          <div className="card-information-location">
            <div className="card-information-place">
              <img src={pinImage} alt="Location Logo"/>
              <h2 className="card-information--location">{props.item.location}</h2>
            </div>
            <p className="card-information--map">
              <a href={`https://www.google.com/maps/place/${props.item.title}`} target="_blank" rel="noreferrer">
                View on Google Maps
              </a>
            </p>
          </div>
          <h1 className={"card-information--hero_text"}>{props.item.title}</h1>
          <h3 className={"card-information--date"}>{props.item.date}</h3>
          <p className={"card-information--desc"}>{props.item.description}</p>
        </div>
      </div>
      {!(props.item.id === 3) && <hr/>}
    </section>
  )
}

