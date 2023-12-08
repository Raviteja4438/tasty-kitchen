import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="empty-cart-container">
    <img
      src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1701428001/cooking_1_sw035n.png"
      className="empty-cart-image"
      alt="empty cart"
    />
    <h1 className="empty-cart-heading">No Order Yet!</h1>
    <p className="empty-cart-description">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-now-button">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
