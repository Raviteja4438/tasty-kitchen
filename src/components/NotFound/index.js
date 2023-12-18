import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const NotFoundImage =
    'https://res.cloudinary.com/dlngyh6jo/image/upload/v1700722740/erroring_1_ylzdwj.png'

  return (
    <div className="not-found-container">
      <img src={NotFoundImage} className="not-found-img" alt="not found" />
      <h1 className="not-found-text">Page Not Found</h1>
      <p className="not-found-caption">
        We are sorry, the page you requested could not be found. <br />
        Please go back to the home page.
      </p>
      <Link to="/">
        <button type="button" className="home-page-btn">
          Home Page
        </button>
      </Link>
    </div>
  )
}

export default NotFound
