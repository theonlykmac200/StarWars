import {useState, useEffect} from 'react';
import './App.css';
import Starships from './Components/Starships';


function App() {
  const [starshipData, setStarshipData] = useState(null);

  useEffect(() => {
    const makeApiCall = async () => {
      const starWarsUrl = `https://swapi.dev/api/starships/`;
      const res = await fetch(starWarsUrl);
      const data = await res.json();
  
      setStarshipData(data)
    };
    makeApiCall();
  }, []);

  const starships = starshipData?.results.map((ele, index) => {
    return (
      <Starships 
      key={index}
      {...ele}
    />

    )
  })
  console.log(starshipData) 
  
  return (
    <div style={{ 
      backgroundImage: `url("https://www.cnet.com/a/img/resize/3389de9819279904c5a9d3b0fc08d29c717e0e8f/hub/2022/08/18/dae391cf-315c-4543-b8fb-adef44946d37/screen-shot-2022-08-18-at-2-02-33-pm.png?auto=webp&fit=crop&height=675&width=1200")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
        <h1 className="glow">STAR WARS STARSHIPS</h1>
        
   
        <section className="container" >
          {starships}
        </section>
        
     
       
     
      
    </div>

    
  );
 
}

export default App;