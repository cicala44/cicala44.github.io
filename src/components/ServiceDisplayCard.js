import "./ServiceDisplayCard.css"

const ServiceDisplayCard = ({name, features}) => {
    const options = features.map((feature) => {
        return(
            <li key={feature + name}>{feature}</li>
        )
    });

    return (
        <div className="service-display-card-container">
            <div className="service-display-card-content-container">
                <div className="service-display-card-name">
                    {name}
                </div>
                <div className="service-display-card-options">
                    <ul style={{margin: 0}}>
                        {options}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ServiceDisplayCard;