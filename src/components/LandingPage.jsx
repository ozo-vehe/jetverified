import { Link } from 'react-router-dom'
import image from '../assets/Image.png'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header-text">
        <h1>Easy, secure identity verification for everyone!</h1>
        <p>JetVerify ensures seamless integration of identity verification into onboading processes across the continent.</p>
        <Link to={"signup"}>Get Started</Link>
      </div>

      <div className="header-image">
        <img src={image} alt="Landing Page Image" />
      </div>
    </div>
  );
}

export default LandingPage