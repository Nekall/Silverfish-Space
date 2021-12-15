import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';
import copy from '../../assets/images/copy.svg';

const VanillaTweaks = () => {

  function copyCmd(){
    if(navigator.clipboard){
      navigator.clipboard.writeText("/trigger ch_toggle")
      .then(_=> {
          let confirm = document.getElementsByClassName("copy-hud-cmd")[0];
          confirm.classList.add("isCopy")
          setInterval(function(){ confirm.classList.remove("isCopy"); }, 1700);
      })
    }
  }

return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://vanillatweaks.net/">Vanilla Tweaks<img className="link" src={link} alt="lien" /></a></h2>
      ―
      <p className="bold">Coordinates HUD</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum!
      </p>
      <div className="copy-hud-cmd" onClick={() => copyCmd()}>/trigger ch_toggle<img className="link" src={copy} alt="copie commande" /></div>
      <p>Cliquer pour copier ;)</p>
      ―
      <p className="bold">Armors Statues</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.
      </p>
      ―
      <p className="bold">Cauldron Concrete</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.
      </p>
      ―
      <p className="bold">Elevators</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.
      </p>
    </div>
  </div>
  )
};
export default VanillaTweaks;
