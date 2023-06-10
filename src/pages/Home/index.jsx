// Assets
import { useEffect } from "react";
import nekamc from "../../assets/videos/neka_mc.webm"

const Home = () => {

  useEffect(() => {
    document.querySelector('video').playbackRate = 2.0;
  }, [])

  return (
    <main>
      <div className="maintenance">
        <video width="500" height="400" autoPlay muted playsInline loop>
          <source src={nekamc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <p>Je manque de redstone,</p>
        <p> le site arrive bientôt...</p>
      </div>
    </main>
  )
};

export default Home;
