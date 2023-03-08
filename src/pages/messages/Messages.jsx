
import React from 'react'
import moment from 'moment'
import './Messages.scss'
import { Link } from 'react-router-dom'
import newRequest from './../../utils/newRequest.js'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Messages = () => {

  const queryClient = useQueryClient()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
         newRequest
         .get(
           `/conversations`
          )
          .then((res) => {
              return res.data;
          })
   });

   const mutation = useMutation({
        mutationFn: (id) => {
           return newRequest.put(`/conversations/${id}`);
        },
        onSuccess:()=>{
           queryClient.invalidateQueries(["conversations"])
        }
    });

   const handleRead = (id) => {
        mutation.mutate(id);
   }


  return (
    <div className='messages'>
        { isLoading ? (
            "loading.."
          ) : error ? (
             "error"
          ) : (
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>{currentUser.isSeller ? "Seller" : "Buyer" }</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    { data.map((conversation) => (
                           <tr className={((currentUser.isSeller && !conversation.readBySeller) || (!currentUser.isSeller && !conversation.readByBuyer)) && (
                              "active"
                            )}
                            key={conversation.id}>
                                <td>{currentUser.isSeller ? conversation.buyerId : conversation.sellerId }</td>
                                <td><Link to={`/message/${conversation.id}`} className='link'>{conversation?.lastMessage?.substring(0,100)}...</Link></td>
                                <td>{moment(conversation.updatedAt).fromNow()}</td>
                                <td>
                                    {((currentUser.isSeller && !conversation.readBySeller) ||
                                      (!currentUser.isSeller && !conversation.readByBuyer)) && (
                                        <button onClick={() => handleRead(conversation.id)}>Mark as Read</button>
                                      )
                                    }
                                </td>
                           </tr>
                      )
                    )}
                </table>
            </div>
           )}
    </div>
  )
}

export default Messages;