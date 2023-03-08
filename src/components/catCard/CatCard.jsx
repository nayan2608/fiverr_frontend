
import React from 'react'
import { Link } from 'react-router-dom';
import './CatCard.scss'

const catCard = ({item}) => {
  return (
    <Link to="/gigs?cat=">
       <div className='catCard'>
           <img src={item.img} alt="" />
           <span className='desc'>{item.desc}</span>
           <span className='title'>{item.title}</span>
        </div>
    </Link>
  )
}

export default catCard;