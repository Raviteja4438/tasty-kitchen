import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, imageUrl, name, cost, quantity} = cartItemDetails

      const onClickDecrement = () => {
        decreaseCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        increaseCartItemQuantity(id)
      }
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const totalPrice = cost * quantity

      return (
        <li className="cart-item">
          <div className="cart-item-container" data-testid="cartItem">
            <img className="cart-product-image" src={imageUrl} alt={name} />
            <div className="cart-details-content-container">
              <h1 className="cart-product-title">{name}</h1>

              <div className="cart-quantity-container">
                <button
                  type="button"
                  className="quantity-controller-button"
                  onClick={onClickDecrement}
                  data-testid="decrement-quantity"
                  aria-label="close"
                >
                  <BsDashSquare color="#52606d" size={20} />
                </button>
                <p data-testid="item-quantity" className="cart-quantity">
                  {quantity}
                </p>
                <button
                  type="button"
                  className="quantity-controller-button"
                  onClick={onClickIncrement}
                  data-testid="increment-quantity"
                  aria-label="close"
                >
                  <BsPlusSquare color="#52606d" size={20} />
                </button>
              </div>

              <div className="price-container">
                <p className="cart-total-price">Rs {totalPrice}/-</p>
                <button
                  className="remove-button"
                  type="button"
                  onClick={onRemoveCartItem}
                >
                  Remove X
                </button>
                <button
                  className="delete-button"
                  type="button"
                  onClick={onRemoveCartItem}
                  aria-label="close"
                >
                  <AiFillCloseCircle color="#616e7c" size={20} />
                </button>
              </div>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
