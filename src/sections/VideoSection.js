import Video from "../assets/videoAssets/EnduranceLegionIG.mp4"
import "./VideoSection.css"
import "../App.css"

const VideoSection = () => {
    return (
        <div className="video-section-container">
            <div className="video-content-container">
                <div className="section-title">
                    Preview
                </div>
                <div className="video-content">
                    <video className="video-wrapper" controls>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}
export default VideoSection;