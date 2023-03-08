
import React from 'react'
import './GigCard.scss'

import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { Link } from 'react-router-dom'
import StarImg from './../../images/star.png'
import HeartImg from './../../images/heart.png'
import UserImg from './../../images/user.png'

const GigCard = ({item}) => {

    console.log(item._id);

    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
             newRequest
             .get(
               `/users/${item.userId}`
              )
              .then((res) => {
                  return res.data;
              })
    });


  return (
    <Link to={`/gig/${item._id}`} className='link'>
        <div className="gigCard">
            <img src={item.cover} alt="" />
            <div className="info">
                { isLoading 
                   ? ("loading...")
                   : error 
                   ? ("Something went wrong!")
                   : 
                    (<div className="user">
                        <img src={data.img || UserImg} alt="" />
                        <span>{data.username}</span>
                    </div>)
                 } 
                 <p>{item.desc.substring(0,60)}..</p>
                 <div className="star">
                       <img src={StarImg} alt="" />
                       <span>
                       {!isNaN(item.totalStars/item.starNumber) &&
                             Math.round(item.totalStars/item.starNumber)}
                       </span>
                 </div>
            </div>
            <hr />
            <div className="details">
                <img src={HeartImg} alt="" />
                <div className="price">
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default GigCard;