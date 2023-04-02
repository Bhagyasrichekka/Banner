// Write your code here.
import './index.css'

const Banner = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  const arr = [className, 'card']
  return (
    <li className={arr.join(' ')}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <button className="btn">Show more</button>
    </li>
  )
}

export default Banner
