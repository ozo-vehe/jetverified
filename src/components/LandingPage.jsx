import { Link } from 'react-router-dom'
import image from '../assets/Image.png'
import organization from '../assets/organization.png'
import individual from '../assets/individual.png'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="header-text">
          <h1>Easy, secure identity verification for everyone!</h1>
          <p>JetVerify ensures seamless integration of identity verification into onboading processes across the continent.</p>
          <Link to={"/signup"}>Get Started</Link>
        </div>

        <div className="header-image">
          <img src={image} alt="Landing Page Image" />
        </div>
      </div>

      <div className="body-section">
        <div className="info">
          <h1>Trusted by organisations <br></br>around the continent</h1>
        </div>

        <div className="about">
          <div className="individuals">
            <div className="individuals-text">
              <h2>For Individuals</h2>
              <p>Securely store your identity documents on JETVerify and retrieve them at your convenience whenever you need to verify your identity on any suported platform.</p>
            </div>
            <div className="individuals-img">
              <img src={individual} alt="Individual Image" />
            </div>
          </div>

          <div className="organizations">
            <div className="organizations-img">
              <img src={organization} alt="Organization Image" />
            </div>
            
            <div className="organizations-text">
              <h2>For Organizations</h2>
              <p>JETVerify integrates the Verify.africa API to provide secure identity verification and storage for you clients and customers.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage