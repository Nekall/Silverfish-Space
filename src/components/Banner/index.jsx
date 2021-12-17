import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";

const Banner = () => {

    window.addEventListener("scroll", function(event){
        let banner = document.getElementById("banner")
        let navbar = document.getElementById("navbar")
        if(banner != null){
          if(window.scrollY > banner.clientHeight){
            navbar.style.display = "block";
          }else{
            navbar.style.display = "none";
          }
        }
    });


  return (
    <>
      <Navbar />
      <div className="banner" id="banner">
        <h1><NavLink to="/">Silverfish Infesting Space</NavLink></h1>
      </div>
    </>
)};

export default Banner;
