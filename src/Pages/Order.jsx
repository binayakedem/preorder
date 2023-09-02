import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Image from '../image/pexels-pixabay-33162.jpg'


const Order = () => {
  
    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const [message, setMessage]=useState('');
    const [food, setFood]=useState('')
    const [hour, setHour]=useState('')
    const [date, setDate]=useState('')
    const [quantity, setQuantity]=useState('')
    const postData=async(e)=>{
         e.preventDefault();
         setName(name);
         setPhone(phone);
         setFood(food);
         setHour(hour);
         setDate(date);
         setQuantity(quantity)
         setMessage(message);
         const res=await fetch('https://pre-ordering-system-default-rtdb.firebaseio.com/message-by-user.json',
    
        
         {
         
          method: 'Post',
          headers:{
            "Content-Type":"aplication/json"
            
      
          },
          body :JSON.stringify({
            name,
            phone,
            food, 
            hour,
            date,
            quantity,
            message,
          })})}
          
         

  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <div className="col-6 mt-5 pt-5">
          <div className="row">
            <div className="col-8 ">
              <img src={Image} alt="" className='img-fluid' />
            </div>
            <div className="col-4">
              <h1>Food Name List</h1>
              <ol>
                <li>spicy-chana-masala</li>
                <li>paneer-jalfrezy</li>
                <li>moong-dal-ki-goli</li>
                <li>mirchi-ka-salan</li>
                <li>mirchi-ka-koota</li>
                <li>madras-curry</li>
                <li>laal-maans</li>
                <li>kohlapuri-chicken</li>
                <li>kasmiri-chicken</li>
                <li>chicken65</li>
                <li>bharwa-mirchi-ka-pakoda</li>
                <li>andra-chilli-chicken...</li>
                
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 className='text-center'>Are You </h1>
              <h1 className='text-center text-danger'>Hungry?</h1>
            </div>
          </div>
        </div>
        <div className="col-6">

        <div className='container bg-light mt-5 pt-5'>
     
        <div className="row">
            <h1 className='text-danger text-center'>Order Now</h1>
        </div>
        <div className="row">
            <div className="col-12">
            <form>
  <div className="mb-3">
    <label  className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your full name" required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Phone</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setPhone(e.target.value)}} required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Food Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setFood(e.target.value)}} placeholder="Enter your food name"required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Hours (write as:12:30 am)</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setHour(e.target.value)}} placeholder="Enter your prefer hour"required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Date</label>
    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setDate(e.target.value)}} placeholder="Fill Date"required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">How Many plates</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setQuantity(e.target.value)}} placeholder="Enter Number of plate"required/>
  </div>
  
  <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
  <label>Leave any message</label>
</div>
  <button type="submit" className="btn btn-primary mt-4" onClick={postData}>Confirm Order</button>
</form>
            </div>
        </div>

    </div>
        </div>
      </div>
    </div>
  )
}

export default Order