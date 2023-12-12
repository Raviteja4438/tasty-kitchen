import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import FoodCard from '../FoodCard'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class RestaurantDetails extends Component {
  state = {restaurantData: {}, foodItem: [], isLoading: false}

  componentDidMount() {
    this.getRestaurantsData()
  }

  getRestaurantsData = async () => {
    this.setState({isLoading: true})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        costForTwo: data.cost_for_two,
        cuisine: data.cuisine,
        id: data.id,
        restaurantImageUrl: data.image_url,
        itemsCount: data.items_count,
        location: data.location,
        name: data.name,
        rating: data.rating,
        reviewsCount: data.reviews_count,
        opensAt: data.opens_at,
      }
      this.setState({restaurantData: updatedData})

      const foodItemsUpdatedData = data.food_items.map(eachItem => ({
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        name: eachItem.name,
        cost: eachItem.cost,
        rating: eachItem.rating,
      }))
      this.setState({foodItem: foodItemsUpdatedData, isLoading: false})
    }
  }

  renderRestaurantsDetailsView = () => {
    const {restaurantData, foodItem} = this.state
    const {
      costForTwo,
      cuisine,
      restaurantImageUrl,
      location,
      name,
      rating,
    } = restaurantData

    return (
      <div className="restaurant-details-container">
        <li className="restaurant-item">
          <div className="restaurant-image-container">
            <div>
              <img
                src={restaurantImageUrl}
                className="restaurant-details-image"
                alt="restaurant"
              />
            </div>
            <div className="restaurant-details-content">
              <h1 className="name">{name}</h1>
              <p className="food-type">{cuisine}</p>
              <p className="address">{location}</p>
              <div className="rating-and-cost-for-two-container">
                <div className="rating-container">
                  <div className="star-rating">
                    <AiFillStar color="#ffffff" />
                    <p className="restaurant-rating">{rating}</p>
                  </div>
                  <p className="ratings-count">200+ ratings</p>
                </div>
                <div className="cost-container">
                  <p className="cost">{costForTwo}</p>
                  <p className="cost-for-two">Cost for two</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <ul className="food-item-view-container">
          {foodItem.map(eachItem => (
            <FoodCard key={eachItem.id} foodDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="restaurant-details-loader">
      <Loader type="Oval" color="#f7931e" height="50" width="50" />
    </div>
  )

  render() {
    const {restaurantData, foodItem, isLoading} = this.state
    console.log(restaurantData)
    console.log(foodItem)
    return (
      <>
        <Header />
        {isLoading
          ? this.renderLoadingView()
          : this.renderRestaurantsDetailsView()}
        <Footer />
      </>
    )
  }
}

export default RestaurantDetails
