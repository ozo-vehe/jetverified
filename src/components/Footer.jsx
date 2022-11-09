import { Link } from 'react-router-dom'
import footerLogo from '../assets/flogo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="Footer Logo" />
      </div>

      <div className="footer-contact">
        <div className="email-number">
          <p>info@jetverify.com</p>
          <p>+234 801 234 5678</p>
        </div>

        <div className="footer-nav">
          <Link to={"home"}>Home</Link>
          <Link to={"about"}>About</Link>
          <Link to={"contact-us"}>Contact Us</Link>      
        </div>
      </div>
      <p>© 2022 JETVerify Inc.</p>
    </div>
  );
}

export default Footer