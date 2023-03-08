
import React from 'react'
import './Orders.scss'
import { useNavigate } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"
import newRequest from './../../utils/newRequest.js'
import messageImg from './../../images/message.png'

const Orders = () => {

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
         newRequest
         .get(
           `/orders`
          )
          .then((res) => {
              return res.data;
          })
   });

   const handleContact = async(order) => {
         const sellerId = order.sellerId
         const buyerId = order.buyerId
         const id = sellerId + buyerId

         try {
             const res = await newRequest.get(`/conversations/${id}`)
             navigate(`/message/${res.data.id}`)
         } catch (err) {
              if(err.response.status === 404){
                  const res = await newRequest.post(`/conversations`, {
                     to: currentUser.seller ? buyerId : sellerId
                  })
                  navigate(`/message/${res.data.id}`);
              }
         }
   }

  return (
    <div className='orders'>
        { isLoading ? (
           "loading.."   
          ) : error ? (
            "error"
          ) : ( 
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Contact</th>
                    </tr>
                    { data.map((order) => (
                         <tr key={order._id}>
                            <td>
                                <img className='img' src={order.img} alt="" />
                            </td>
                            <td>{order.title}</td>
                            <td>{order.price}</td>
                            <td>
                                <img className='delete' src={messageImg} alt="" onClick={() => handleContact(order)} />
                            </td>
                         </tr>
                    ))}
                </table>
            </div>
          )}
    </div>
  )
};

export default Orders;