import Navbar from "../Navbar"
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
        <h1>Silverfish Infesting Space</h1>
      </div>
    </>
)};

export default Banner;
