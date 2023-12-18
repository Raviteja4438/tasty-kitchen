import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterestSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-box">
    <div className="footer-app-logo-box">
      <img
        src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1700652444/Frame_275_zj5wjs.png"
        alt="website-footer-logo"
        className="footer-app-logo"
      />
      <h2 className="footer-app-title">Tasty Kitchens</h2>
    </div>
    <p className="footer-caption-text">
      The only thing we are serious about is food. <br />
      Contact us on.
    </p>
    <div className="social-media-icons-box">
      <FaInstagram
        className="social-media-icon"
        testid="instagram-social-icon"
      />
      <FaTwitter className="social-media-icon" testid="twitter-social-icon" />
      <FaFacebookSquare
        className="social-media-icon"
        testid="facebook-social-icon"
      />
      <FaPinterestSquare
        className="social-media-icon"
        testid="pintrest-social-icon"
      />
    </div>
  </div>
)

export default Footer
