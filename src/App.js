import './App.css';
import Particles from './component/practical';
import profile from './Akshay_Kurhekar.jpeg';
import { FaGithub,FaLinkedin } from "react-icons/fa";

function App() {

    console.log(profile);
  return (
      <div>
          <Particles />
        <div className="card">
            <img className="image" src={profile} alt="akshayMK" />
            <h1>Akshay Kurhekar &#129505;</h1>
            <FaGithub/>
            <p> Full Stack Developer &#128540; </p>
            Stay turn..
            Comming soon...    
            <span >&#128525;</span>
        </div>
    </div>      
      );
}

export default App;
