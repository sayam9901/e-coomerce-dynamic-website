import React from "react";
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