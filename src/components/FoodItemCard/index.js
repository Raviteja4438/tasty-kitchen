import {AiFillStar} from 'react-icons/ai'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import CartContext from '../../context/CartContext'

import './index.css'

const FoodItemCard = props => {
  const {foodData} = props
  const {id, name, cost, imageUrl, rating} = foodData

  return (
    <CartContext.Consumer>
      {value => {
        const {
          cartData,
          addCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        } = value

        const foodObject = cartData.filter(
          eachCartItem => eachCartItem.id === foodData.id,
        )

        const quantity = foodObject.length > 0 ? foodObject[0].quantity : 1

        const onClickAddToCart = () => {
          addCartItem({...foodData, quantity})
        }

        const onClickDecrement = () => {
          decrementCartItemQuantity(id)
        }
        const onClickIncrement = () => {
          incrementCartItemQuantity(id)
        }

        const itemAddedToCart =
          foodObject.length > 0 ? foodObject[0].id === foodData.id : false

        return (
          <li data-testid="foodItem" className="food-item">
            <img src={imageUrl} alt="food-item" className="food-img" />
            <div className="food-item-content-container">
              <h1 className="food-name">{name}</h1>
              <p className="cost">{`₹ ${cost}.00`}</p>
              <p className="rating">
                <AiFillStar className="ai-star" /> {rating}
              </p>

              {itemAddedToCart ? (
                <div className="cart-quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onClickDecrement}
                    data-testid="decrement-count"
                    aria-label="close"
                  >
                    <BsDashSquare color="#52606D" size={20} />
                  </button>
                  <p data-testid="active-count" className="cart-quantity">
                    {quantity}
                  </p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onClickIncrement}
                    data-testid="increment-count"
                    aria-label="close"
                  >
                    <BsPlusSquare color="#52606D" size={20} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="add-button"
                  onClick={onClickAddToCart}
                >
                  Add
                </button>
              )}
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default FoodItemCard
