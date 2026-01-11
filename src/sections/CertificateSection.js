import CertificateDisplayCard from "../components/CertificateDisplayCard";
import "./CertificateSection.css"
import "../App.css"
import { certificates } from "../data/certificates";

const CertificateSection = () => {
    const generateCertificateDisplays = certificates.map((certificate, index) => {
        return (
            <div key={certificate.name + index}>
                <CertificateDisplayCard name={certificate.name} image={certificate.image} />
            </div>
        );
    })
    return (
        <div className="certificate-section-container">
            <div className="certificate-content-container">
                <div className="section-title">
                    <h1 style={{ margin: 0 }}>Certificates</h1>
                </div>
                <div className="certificate-display-container">
                    {generateCertificateDisplays}
                </div>
            </div>
        </div>
    );
}
export default CertificateSection;