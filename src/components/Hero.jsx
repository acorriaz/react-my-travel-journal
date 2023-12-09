import pinImage from "../assets/svg/pin.svg"

export default function Hero(props) {
  return (
    <section>
      <img src={props.item.coverImg} alt={props.item.title} />
      <div className={"card-information"}>
        <div className={"card-information-location"}>
          <img src={pinImage} alt={"Location Logo"}/>
          <h2 className={"card-information--location"}>{props.item.location}</h2>
          <p className={"card-information--map"}>
            <a href={`https://www.google.com/maps/place/${props.item.title}`}>
            View on Google Maps
            </a>
          </p>
        </div>
        <h1 className={"card-information--hero_text"}>{props.item.title}</h1>
        <h3 className={"card-information--date"}>{props.item.date}</h3>
        <p className={"card-information--desc"}>{props.item.description}</p>
      </div>

    </section>
  )
}

