import { useState, useEffect } from "react";
import card1 from '../images/te.jpg'
import '../Styles/Home.css'

const Cards = ({city}) => {

   let[wd, setWD] =  useState(null);

    useEffect( ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '47c8af4499msh088a698302e761dp1a4670jsn3f2f23a658d5',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then((response) => {return(response.json())})
        .then((data) => { 
            console.log(data);
               setWD(data)
            })
        .catch(err => console.error(err));
    } , [])

 
    return ( 
        <div>
           {wd && 
           <div className='card'>
             <img src={card1} alt="images" /> 
                <div className='carddetails'>
                    <span className='cardcitytemp'> <p>{wd.current.temp_c}&#176;</p></span> 
                    <span className='cardcitynamedate'>
                        <p ><span id='cityname'>{wd.location.name}</span></p>  
                        <p id='citydate'>{wd.current.last_updated}</p>
                    </span>   
                </div>
           </div>}  
           
        </div>
     );
}
 
export default Cards;