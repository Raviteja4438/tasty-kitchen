import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import './index.css'

const FooterAppLogo =
  'https://res.cloudinary.com/dlngyh6jo/image/upload/v1700652444/Frame_275_zj5wjs.png'

const Footer = () => (
  <div className="footer-box">
    <div className="footer-app-logo-box">
      <img
        src={FooterAppLogo}
        alt="website-footer-logo"
        className="footer-app-logo"
      />
      <h2 className="footer-app-title">Tasty Kitchens</h2>
    </div>
    <p className="footer-caption-text">
      The only thing we are serious about is food. <br /> Contact us on
    </p>
    <div className="social-media-icons-box">
      <FaPinterestSquare
        data-testid="pintrest-social-icon"
        className="social-media-icon"
      />
      <FaInstagram
        data-testid="instagram-social-icon"
        className="social-media-icon"
      />
      <FaTwitter
        data-testid="twitter-social-icon"
        className="social-media-icon"
      />
      <FaFacebookSquare
        data-testid="facebook-social-icon"
        className="social-media-icon"
      />
    </div>
  </div>
)

export default Footer
