import './App.css';
import Particles from './component/practical';
import profile from './Akshay_Kurhekar.jpeg';
function App() {

    console.log(profile);
  return (
      <div>
          <Particles />
        <div className="card">
            <img className="image" src={profile} alt="akshayMK" />
            <h1>Akshay Kurhekar</h1>
            <p> Full Stack Developer </p>
            Stay turn..
            Comming soon...    
        </div>
    </div>      
      );
}

export default App;
