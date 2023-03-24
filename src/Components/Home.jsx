import { useEffect, useState } from 'react';
import '../Styles/Home.css'
import { AiOutlineSearch } from "react-icons/ai";

import card1 from '../images/te.jpg'
import c2 from '../images/c2.jpg'
import c1 from '../images/c1.jpg'
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import s1 from '../images/s1.jpg'
import Cards from './Cards';
import e1 from '../images/e1.jpg'

const Home = () => {

    let[loaded, setLoaded]= useState(false);
    let[mainCity, setMainCity]= useState(null);
    let[cities , setCities] = useState(["Udupi", "Pune", "Mumbai"])

    
    useEffect(  ()=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47c8af4499msh088a698302e761dp1a4670jsn3f2f23a658d5',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Bangalore`, options)
    .then((response) => {return(response.json())})
    .then((data) => { 
            console.log(data);
            setMainCity(data);
            setLoaded(true);
        })
    .catch(err => console.error(err));            
    }, []  )

    


    return (
        <>
        {  loaded &&

            // <>
            // <h1>{mainCity.location.name}</h1>
            // {
            //     cities.map((city)=>{
            //         return(
            //             <Cards city={city} />
            //         )
            //     })    
            // }
            // </>
             <>
                 <section className='section1'>
                     <section className='section11'>
                         <div className='navbar'>
                             <a href="#">Home</a>
                             <a href="#">Cities</a>
                             <a href="#">News</a>
                         </div>
                         <div className='wdetails'>
                             <div className='wdl'>
                                 <h3>Weather Deatils</h3>
                                 <span> <h1>Cloudy </h1>    <p> {mainCity.current.cloud} </p></span>
                                 <span> <h1>Humidity</h1>   <p>{mainCity.current.humidity}</p></span>
                                 <span> <h1>Wind </h1>      <p>{mainCity.current.wind_kph} km/h</p></span>                                
                             </div>
                         </div>

                         <div className='citywdetails'>
                             <div className='temp'>
                                     <p>{mainCity.current.temp_c}&#176;</p>
                             </div>
                             <div className='otherdetails'>
                                 <div className='cityname'>
                                     <span><h1>{mainCity.location.name}</h1></span>
                                     <span><p> {mainCity.current.last_updated}  </p></span>
                                 </div>
                                 <div className='wdicon'>
                                     {/* <p> &#9728;  </p> */}
                                     <p> &#x2600;  </p>
                                 </div>
                             </div>
                         </div>
                     </section>
                 </section>


                 
                 <section className='section2'>
                     <div className='citycarddivison'>
                         <h1>Cities</h1>
                         <div className='citycards'>
                         {
                            cities.map((city)=>{
                                return(
                                    <Cards city={city} />
                                )
                            })    
                        }
                         </div>
                     </div>
                 </section>

                
                 <section className='section5'>
                     <div className='searchcityweather'>
                         <input type="text" placeholder='Enter city name to search the details' /> <button> <AiOutlineSearch/>  </button>
                     </div>
                     <div className='googleearthdiv'>
                              <img src={e1} alt="erath_image" /> 
                     </div>
                 </section>

                 <section className='section3'>
                     <div className='newscarddivison'>
                         <h1>News</h1>
                         <div className='newscard'>
                                 <div className='card'>
                                     <img src={c1} alt="images" /> 
                                     <div className='newsdetails'>
                                     <h3>Cloudstroms in manipur</h3>                                      
                                     </div> 
                                     <div className='newsdetailshover'>
                                     <button>Read More</button>                                     
                                     </div>  
                                     
                                 </div>
                                 <div className='card'>
                                     <img src={t1} alt="images" /> 
                                     <div className='newsdetails'>
                                         <h3>Thunder Strikes Delhi</h3>
                                     </div>  
                                     <div className='newsdetailshover'>
                                     <button>Read More</button>                                     
                                     </div>                                     
                                 </div>
                                 <div className='card'>
                                     <img src={s1} alt="images" /> 
                                     <div className='newsdetails'>
                                         <h3>It's Summer season in Mumbai</h3>
                                     </div>
                                     <div className='newsdetailshover'>
                                     <button>Read More</button>                                     
                                     </div>   
                                     
                                 </div>
                                 
                         </div>
                     </div>
                 </section>


                 <section className='section4'>
                     <div className='footerorgname'>
                             <p>WEATHERAPP</p>
                     </div>
                     <div className='footerlinks'>
                     <span className='links1'>
                             <p>Home</p>
                             <p>Cities</p>
                             <p>News</p>
                     </span>
                         <span className='links2'>
                             <p>Contact Us</p>
                             <p>FAQs</p>
                         </span>
                     </div>
                 </section>
             </>
         }

         {  !loaded &&
                 <> 
                     <h1>Loading.......</h1>  
                 </>
         }
     </>
       
      );
}
 
export default Home;