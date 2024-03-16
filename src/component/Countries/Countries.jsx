import { useEffect } from "react";
import { useState } from "react";
import Countri from "../Countri/Countri";
import './countries.css'

const Countries = () => {
  const [countries,setCountrics]=useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountrics(data))
  },[])
    
  return (
    <div className="countries">
      {
        countries.map((countri) =><Countri Countri={countri} key={countri.cca2}></Countri>)
      }
    </div>
  );
};

export default Countries;