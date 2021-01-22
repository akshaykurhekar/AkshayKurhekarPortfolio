import './App.css';
import Particles from './component/practical';
import profile from './Akshay_Kurhekar.jpeg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

    console.log(profile);
  return (
      <div>
          <div className="card">
            <img className="image" src={profile} alt="akshayMK" />
            <div className="heading">Akshay Manohar Kurhekar &#129505;</div>
             <a  href="https://github.com/akshaykurhekar" rel="noreferrer" target="_blank" ><FaGithub className="icon"/></a> 
             <a  href="https://www.linkedin.com/in/akshay-kurhekar-64438a168/" rel="noreferrer" target="_blank" ><FaLinkedin className="icon"/></a>
                        
            <p> Full Stack Developer &#128540; </p>
            Stay turn..
            Comming soon...    
            <span >&#128525;</span>
        </div>    
          <Particles />
            
    </div>      
      );
}

export default App;
