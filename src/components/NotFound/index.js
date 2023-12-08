import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1700722740/erroring_1_ylzdwj.png"
      className="not-found-image"
      alt="not found"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-description">
      We are sorry, the page you requested could not be found. Please go back to
      the home page.
    </p>
    <Link to="/">
      <button type="button" className="home-page-button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
