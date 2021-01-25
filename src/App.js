import './App.css';
import Particles from './component/practical';
import profile1 from './AkshayMK1.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

  return (
      <div>
          <div className="card">
            <img className="image" src={profile1} alt="akshayMK" />
            
            <div className="heading">Akshay Manohar Kurhekar 👋</div>
             <a id="git" href="https://github.com/akshaykurhekar" rel="noreferrer" target="_blank" ><FaGithub className="icon"/></a> 
             <a id="linked" href="https://www.linkedin.com/in/akshay-kurhekar-64438a168/" rel="noreferrer" target="_blank" ><FaLinkedin className="icon"/></a>
                        
            <p> Full Stack Developer ❤️ </p>
            Stay turned..
            Comming soon...    
            <span >😍</span>
        </div>    
          <Particles />
            
    </div>      
      );
}

export default App;
