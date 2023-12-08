import {Link} from 'react-router-dom'

import './index.css'

const OrderPlacedView = () => (
  <div className="order-placed-container">
    <img
      src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1701426522/check-circle.1_1_sakofs.png"
      className="order-placed-image"
      alt="order-placed"
    />
    <h1 className="order-placed-heading">Payment Successful</h1>
    <p className="order-placed-description">
      Thank you for ordering <br />
      Your payment is successfully completed.
    </p>
    <Link to="/" className="link-item">
      <button type="button" className="order-placed-button">
        Go To Home Page
      </button>
    </Link>
  </div>
)

export default OrderPlacedView
