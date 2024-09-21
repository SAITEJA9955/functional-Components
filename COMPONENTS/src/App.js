import logo from './logo.svg';
import './App.css';
import PlayerList from './COMPONENTS/PlayerList';

function App() {
  return (
    <div className="App">
   <div className='playersdiv'>
    <img src='./images/virat.webp'alt='' ></img>
    <h1>Name;virat kohli</h1>
    <h1>Age;40</h1>
    <h1>Team:RCB</h1>
   </div>

   <div className='playersdiv'>
    <img src='./images/syadav.webp'alt='' ></img>
    <h1>Name;syadav</h1>
    <h1>Age;35</h1>
    <h1>Team:MI</h1>
   </div>

   <div className='playersdiv'>
    <img src='./images/siraj.webp'alt='' ></img>
    <h1>Name;siraj</h1>
    <h1>Age;30</h1>
    <h1>Team:RCB</h1>
   </div>


   <div className='playersdiv'>
    <img src='./images/shubman.webp'alt='' ></img>
    <h1>Name;shubman gill</h1>
    <h1>Age;32</h1>
    <h1>Team:KKR</h1>
   </div>
   <hr></hr>
   <PlayerList Name="siraj" Age="30" Team="RCB" pic="./images/siraj.webp" ></PlayerList>
   <PlayerList   Name="viratkohli" Age="40" Team="RCB" pic="./images/virat.webp"  ></PlayerList>
   <PlayerList  Name="syadav" Age="35" Team="MI" pic="./images/syadav.webp" ></PlayerList>
   <PlayerList  Name="shubman gill" Age="30" Team="KKR" pic="./images/shubman.webp"  ></PlayerList>

   
  


   

   


    </div>
  
  );
}

export default App;
