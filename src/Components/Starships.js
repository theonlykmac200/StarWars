
const Starships = ({name,model,manufacturer,passengers,crew}) => {


    return (
       <>
       <div className="cards">
        <p className="details">
            <h2>{name}</h2>
            <h3>{model}</h3>
            <h3>{manufacturer}</h3>
        </p>
        
                <h5 className="capacity">Passengers: {passengers}</h5>
                <h5 className="capacity">Crew: {crew}</h5>
        
       </div>
       
       
       
       </>
       
        
    )
}

export default Starships