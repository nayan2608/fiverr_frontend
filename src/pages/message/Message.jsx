
import React from 'react'
import './Message.scss'
import { Link, useParams } from 'react-router-dom'
import newRequest from './../../utils/newRequest.js'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Message = () => {

     const {id} = useParams()
     const queryClient = useQueryClient()
     const currentUser = JSON.parse(localStorage.getItem("currentUser"));

     const { isLoading, error, data } = useQuery({
          queryKey: ["messages"],
          queryFn: () =>
               newRequest
               .get(
                 `/messages/${id}`
                )
                .then((res) => {
                    return res.data;
                })
     });

     const mutation = useMutation({
          mutationFn: (message) => {
             return newRequest.post(`/messages`, message);
          },
          onSuccess:()=>{
             queryClient.invalidateQueries(["messages"])
          }
      });
  
     const handleSubmit = (e) => {
          e.preventDefault();
          mutation.mutate({
               conversationId: id,
               desc: e.target[0].value
          });
          e.target[0].value = "";
     }

  return (
    <div className='message'>
         <div className="container">
              <span className='breadcrumbs'><Link to='/messages' className='link'>MESSAGES</Link> {'>'} JOHN DOE {'>'}</span>
              { isLoading ? (
                 "loading.."
                ) : error ? (
                 "error"
                ) : (
               <div className="messages">
                    { data.map((message) => (
                         <div className={message.userId === currentUser._id ? "item owner" : "item"} key={message._id}>
                          <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg" alt="" />
                          <p>{message.desc}</p>
                         </div>
                    ))}
               </div>
              )}
              <hr />
              <form className="write" onSubmit={handleSubmit}>
                   <textarea name="" id="" cols="30" rows="10" placeholder='write a message'></textarea>
                   <button type='submit'>Send</button>
              </form>
         </div>
    </div>
  )
}

export default Message;