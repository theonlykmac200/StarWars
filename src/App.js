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
  const target = window.document.getElementsByTagName('h1')[0]
  console.log(target)
  const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
  const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
  const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
  const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);
  //i got it to work with the below, so it will only run if the h1 is loaded
  if(target)neonGlory(target)

  return (
    //i would probably put all of this in your css file and use a class for a better separation of concerns
    <div style={{ 
      backgroundImage: `url("https://www.cnet.com/a/img/resize/3389de9819279904c5a9d3b0fc08d29c717e0e8f/hub/2022/08/18/dae391cf-315c-4543-b8fb-adef44946d37/screen-shot-2022-08-18-at-2-02-33-pm.png?auto=webp&fit=crop&height=675&width=1200")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
        <h1 className="glow">STAR WARS STARSHIPS</h1>
        
   {/* nice job putting your container here, a lot of people missed this */}
        <section className="container" >
          {starships}
        </section>
        
     
       
     
      
    </div>

    
  );
 
}

export default App;