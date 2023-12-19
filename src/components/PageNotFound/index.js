import {Link} from 'react-router-dom'
import './index.css'

const PageNotFound = () => {
  const NotFoundImage =
    'https://res.cloudinary.com/dlngyh6jo/image/upload/v1700722740/erroring_1_ylzdwj.png'

  return (
    <div className="not-found-container">
      <img src={NotFoundImage} alt="not found" className="not-found-img" />
      <h1 className="not-found-text">Page Not Found</h1>
      <p className="not-found-caption">
        We are sorry, the page you requested could not be found.
        <br />
        Please go back to the home page
      </p>
      <Link to="/">
        <button className="home-page-btn" type="button">
          Home Page
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound
