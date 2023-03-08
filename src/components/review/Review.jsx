import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import userImg from './../../images/user.png'
import starImg from './../../images/star.png'
import likeImg from './../../images/like.png'
import dislikeImg from './../../images/dislike.png'
import "./Review.scss";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );


  return (
    <div className="review">
        {isLoading ? (
            "loading"
        ) : error ? (
            "error"
        ) : (
            <div className="user">
                <img className="pp" src={data.img || userImg} alt="" />
                <div className="info">
                    <span>{data.username}</span>
                    <div className="country">
                       <span>{data.country}</span>
                    </div>
                </div>
            </div>
        )}
        <div className="stars">
            {Array(review.star)
                .fill()
                .map((item, i) => (
                    <img src={starImg} alt="" key={i} />
                ))}
            <span>{review.star}</span>
        </div>
        <p>{review.desc}</p>
        <div className="helpful">
            <span>Helpful?</span>
            <img src={likeImg} alt="" />
            <span>Yes</span>
            <img src={dislikeImg} alt="" />
            <span>No</span>
        </div>
    </div>
  );
};

export default Review;