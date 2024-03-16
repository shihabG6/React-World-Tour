import { useEffect } from "react";
import { useState } from "react";
import Countri from "../Countri/Countri";

const Countries = () => {
  const [countries,setCountrics]=useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountrics(data))
  },[])
    
  return (
    <div >
      <h3>{}</h3>
      {
        countries.map((countri, index ) =><Countri Countri={countri} key={index}></Countri>)
      }
    </div>
  );
};

export default Countries;