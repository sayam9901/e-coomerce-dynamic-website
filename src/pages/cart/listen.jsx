import React , {useState} from "react";
import "./listen.css"
import { Navbar } from "../../components/navbar";
export const Listen = () => {
    const [user , setUser] = useState(
        {
            name : "",
            email : "",
            phone_no : "",
            message : ""
        }
    )
    const [submitted, setSubmitted] = useState(false);
    const HandleValue = (e) =>{
        const { name, value } = e.target;
        setUser((prevUserInput) => ({
          ...prevUserInput,
          [name]: value,
        }));
    }
    const PostData = async(e)=>{
       e.preventDefault();
       const {name , email , phone_no , message} = user
       const response = await fetch("https://react-contact-form-9ef7f-default-rtdb.firebaseio.com/contact.json",
       {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            name ,
            email ,
            phone_no ,
            message 
        })
       }
       )
       setUser( {
        name : "",
        email : "",
        phone_no : "",
        message : ""
    })
    setSubmitted(true);
    console.log(response)
    }
  return (
    <div>
      <Navbar/>
         <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      ) : (
      <form onSubmit={PostData}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={user.name}
            onChange={HandleValue}
            required
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={user.email}
            onChange={HandleValue}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone_no"
            placeholder="enter number"
            value={user.phone_no}
            onChange={HandleValue}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={user.message}
            name="message"
            placeholder="enter the sent message"
            onChange={HandleValue}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      )}
      </div>
  );
};
