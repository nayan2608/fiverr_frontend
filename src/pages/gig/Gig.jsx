
import React from 'react'
import './Gig.scss'
import { Link, useParams } from 'react-router-dom'
import { Slider } from 'infinite-react-carousel/lib'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import Reviews from '../../components/reviews/Reviews';

import starImg from './../../images/star.png'
import UserImg from './../../images/user.png'
import RecycleImg from './../../images/recycle.png'
import ClockImg from './../../images/clock.png'
import GreenImg from './../../images/greencheck.png'

const Gig = () => {

  const { id } = useParams();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
     queryKey: ["gig"],
     queryFn: () =>
          newRequest.get(`/gigs/${id}`).then((res) => {
             return res.data;
          }),
  });
      
  const userId = data?.userId;

  const {
     isLoading: isLoadingUser,
     error: errorUser,
     data: dataUser,
   } = useQuery({
     queryKey: ["user"],
     queryFn: () =>
       newRequest.get(`/users/${userId}`).then((res) => {
         return res.data;
       }),
       enabled: !!userId,
   });
 

  return (
    <div className='gig'>
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
         <div className="container">
              <div className="left">
                   <span className='breadCrumbs'>FIVERR {'>'} GRAPHICS & DESIGN {'>'}</span>
                   <h1>{data.title}</h1>

                   { isLoadingUser ? (
                       "loading"
                     ) : errorUser ? (
                      "Something went wrong!"
                     ) : (
                         <div className="user">
                              <img className='pp' src={dataUser.img || UserImg} alt="" />
                              <span>{dataUser.username}</span>
                              
                              {!isNaN(data.totalStars / data.starNumber) && (
                                   <div className="stars">
                                        {Array(Math.round(data.totalStars / data.starNumber))
                                             .fill()
                                             .map((item, i) => (
                                                <img src={starImg} alt="" key={i} />
                                             ))}
                                        <span>{Math.round(data.totalStars / data.starNumber)}</span>
                                   </div>
                              )}
                         </div>
                    )}

                   <Slider className='slider' slidesToShow={1} arrowScroll={1}>
                     {data.images.map((img) => (
                        <img key={img} src={img} alt="" />
                      ))}
                   </Slider>
                   <h2>About This Gig</h2>
                   <p>{data.desc}</p>
                   
                   { isLoadingUser ? (
                       "loading"
                     ) : errorUser ? (
                       "Something went wrong!"
                     ) : (
                         <div className="seller">
                         <h2>About The Seller</h2>
                         <div className="user">
                              <img src={dataUser.img || UserImg} alt="" />
                              <div className="info">
                                   <span>{dataUser.username}</span>
                                   {!isNaN(data.totalStars / data.starNumber) && (
                                        <div className="stars">
                                        {Array(Math.round(data.totalStars / data.starNumber))
                                             .fill()
                                             .map((item, i) => (
                                             <img src={starImg} alt="" key={i} />
                                             ))}
                                        <span>
                                             {Math.round(data.totalStars / data.starNumber)}
                                        </span>
                                        </div>
                                   )}
                                   <button>Contact Me</button>
                                   </div>
                         </div>

                         <div className="box">
                              <div className="items">
                                   <div className="item">
                                        <span className='title'>From</span>
                                        <span className='desc'>{dataUser.country}</span>
                                   </div>
                                   <div className="item">
                                        <span className='title'>Member since</span>
                                        <span className='desc'>Aug 2022</span>
                                   </div>
                                   <div className="item">
                                        <span className='title'>Avg. response time</span>
                                        <span className='desc'>4 hours</span>
                                   </div>
                                   <div className="item">
                                        <span className='title'>Last delivery</span>
                                        <span className='desc'>1 day</span>
                                   </div>
                                   <div className="item">
                                        <span className='title'>Language</span>
                                        <span className='desc'>English</span>
                                   </div>
                              </div>
                              <hr />
                              <p>{dataUser.desc}</p>
                              </div>
                         </div>
                    )}
                    <Reviews gigId={id} />
              </div>
              <div className="right">
                   <div className="price">
                        <h3>{data.shortTitle}</h3>
                        <h2>$ {data.price}</h2>
                   </div>
                   <p>{data.shortDesc}</p>
                   <div className="details">
                        <div className="item">
                             <img src={ClockImg} alt="" />
                             <span>{data.deliveryTime} Days Delivery</span>
                        </div>
                        <div className="item">
                             <img src={RecycleImg} alt="" />
                             <span>{data.revisionNumber} Revisions</span>
                        </div>
                   </div>
                   <div className="features">
                       {data.features.map((feature) => (
                            <div className="item">
                                <img src={GreenImg} alt="" />
                                <span>{feature}</span>
                            </div>
                       ))}
                   </div>
                   <Link to={ currentUser ? `/pay/${id}` : `/login`} className="link">
                      <button>Continue</button>
                   </Link>
              </div>
         </div>
      )}
    </div>
  )
}

export default Gig;