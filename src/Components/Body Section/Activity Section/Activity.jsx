import React from 'react'
import "./activity.css"

// /Imported Icons ==========>
import {BsArrowRightShort} from 'react-icons/bs'

// /Imported Icons ==========>
import img from '../../../Assets/profile.jpg'
import img2 from '../../../Assets/image2.png'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1 className="h1">Recent Activity</h1>
        <button className="btn flex">
          See All
          < BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        
        <div className="singleCustomer flex">
          <img className='img' src={img} alt="Customer Image" />
          <div className="customerDtl">
            <span className="name">John Jeo</span>
            <small className="small">Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img className='img' src={img2} alt="Customer Image" />
          <div className="customerDtl">
            <span className="name">John Jeo</span>
            <small className="small">Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img className='img' src={img} alt="Customer Image" />
          <div className="customerDtl">
            <span className="name">John Jeo</span>
            <small className="small">Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img className='img' src={img2} alt="Customer Image" />
          <div className="customerDtl">
            <span className="name">John Jeo</span>
            <small className="small">Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img className='img' src={img} alt="Customer Image" />
          <div className="customerDtl">
            <span className="name">John Jeo</span>
            <small className="small">Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

      </div>
    </div>
    )
}

export default Activity