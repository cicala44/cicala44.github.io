import "./ServiceSection.css";
import "../App.css"
import { services } from "../data/services";
import ServiceDisplayCard from "../components/ServiceDisplayCard";

const ServiceSection = () => {
    const serviceOptions = services.map((service, index) => {
        return(
            <div key={service.name + index}>
                <ServiceDisplayCard name={service.name} features={service.features}/>
            </div>
        )
    });

    return (
        <div className="service-section-container">
            <div className="service-content-container">
                <div className="section-title">
                    <h1 style={{ margin: 0 }}>Services</h1>
                </div>
                <div className="service-options-container">
                    {serviceOptions}
                </div>
            </div>
        </div>
    );
}
export default ServiceSection