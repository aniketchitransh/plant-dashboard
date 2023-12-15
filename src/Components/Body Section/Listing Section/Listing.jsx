import React from 'react'
import "./listing.css"

// Imported Icons ========>
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

// Imported Images ======>
import img from '../../../Assets/image14.png'
import img1 from '../../../Assets/profile.jpg'
import img2 from '../../../Assets/image2.png'

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1 className="h1">My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img className='img' src={img} alt="Image Name" />
          <h3 className="h3">Annual Vince</h3>
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img className='img' src={img} alt="Image Name" />
          <h3 className="h3">Annual Vince</h3>
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img className='img' src={img} alt="Image Name" />
          <h3 className="h3">Annual Vince</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img className='img' src={img} alt="Image Name" />
          <h3 className="h3">Annual Vince</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3 className="h3">Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img className='img' src={img1} alt="User Image" />
              <img className='img' src={img2} alt="User Image" />
              <img className='img' src={img1} alt="User Image" />
              <img className='img' src={img2} alt="User Image" />
            </div>
            <div className="cardText">
              <span className="span">
                14,556 Plants Sold <br />
                <small className="small">
                  21 Sellers
                  <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3 className="h3">Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img className='img' src={img1} alt="User Image" />
              <img className='img' src={img2} alt="User Image" />
              <img className='img' src={img1} alt="User Image" />
              <img className='img' src={img2} alt="User Image" />
            </div>
            <div className="cardText">
              <span className="span">
                28,556 Plants Sold <br />
                <small className="small">
                  21 Sellers
                  <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing