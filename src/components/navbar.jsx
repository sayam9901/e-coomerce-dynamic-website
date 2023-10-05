import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { signOut } from "firebase/auth";
import { database } from '../pages/login/FirebaseConfig';
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const history = useNavigate()
  const handleClick = () =>{
    signOut(database).then(val=>{
        console.log(val,"val")
        history('/login')
    })
}
  // // Function to reset the logout timer
  // const resetLogoutTimer = () => {
  //   // Clear the previous timer if it exists
  //   if (logoutTimer) {
  //     clearTimeout(logoutTimer);
  //   }

  //   // Set a new timer to log the user out after 5 minutes (300,000 milliseconds)
  //   const newTimer = setTimeout(() => {
  //     handleLogout();
  //   }, 300000); // 5 minutes in milliseconds

  //   // Update the timer state
  //   setLogoutTimer(newTimer);
  // };

  // // Add an event listener to reset the timer on user activity
  // useEffect(() => {
  //   const resetTimerOnUserActivity = () => {
  //     resetLogoutTimer();
  //   };

  //   // Listen for user activity events such as clicks, keypresses, etc.
  //   window.addEventListener("click", resetTimerOnUserActivity);
  //   window.addEventListener("keypress", resetTimerOnUserActivity);

  //   // Initialize the timer when the component mounts
  //   resetLogoutTimer();

  //   // Cleanup the event listeners when the component unmounts
  //   return () => {
  //     window.removeEventListener("click", resetTimerOnUserActivity);
  //     window.removeEventListener("keypress", resetTimerOnUserActivity);
  //   };
  // }, []);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/home">Home</Link>
        <Link to="/about"> About </Link>
        <Link to = "/contact">Contact Us</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <button onClick={handleClick}>SignOut</button>
      </div>
    </div>
  );
};