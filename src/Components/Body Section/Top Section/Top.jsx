import React from 'react'
import "./top.css"

// imported Icons ========>
import {BiSearchAlt} from 'react-icons/bi'
import {BsQuestionCircle} from 'react-icons/bs'
import {TbMessageDots} from 'react-icons/tb'
import { MdOutlineNotificationsActive} from 'react-icons/md'
import { BsArrowRightShort} from 'react-icons/bs'

// Imported image ======>
import img from '../../../Assets/profile.jpg'
import img2 from '../../../Assets/image14.png'
import video from '../../../Assets/video1.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1 className="h1">Welcome to Planti</h1>
          <p className='p'>Hello Aniket, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input className='input' type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessageDots className='icon'/>
          <MdOutlineNotificationsActive className='icon' />
          <div className="adminImage">
            <img className='img' src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1 className="h1">Create and sell extraordinary
          products.</h1>
          <p className="p">The world's fast growing industry
          today are natural made products!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video className='video' src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            
            <div className="textDiv">
              <h1 className="h1">My Stat</h1>
              
              <div className="flex">
                <span className="span">
                  Today <br /> <small className='small'>4 Orders</small>
                </span>
                <span className="span">
                  This Month <br /> <small className='small'>125 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className='icon'/>
              </span>
            </div>

            <div className="imgDiv">
              <img className='img' src={img2} alt="Image Name" />
            </div>

            {/* We shall use this card later */}
            <div className="sideBarCard">
              <BsQuestionCircle className='icon' />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3 className='h3'>Help Center</h3>
                <p className='p'>Having truble with Planti, please contact us for more...</p>
                <button className="btn">Go to help center</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Top