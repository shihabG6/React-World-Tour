import { useState } from "react";
import "./countri.css";
const Countri = ({ Countri }) => {
  const { name, flags, maps,population,area} = Countri;


  console.log(Countri);
  const[visite, setVisite]=useState(false);
  const handelVisite = ()=>{
    setVisite(!visite)
  }

  const handelMap =()=>{
    window.open(maps.googleMaps)
  }



  return (
    <div className="countri">
      <img src={flags?.png} alt="" />
      <h2>{name?.common}</h2>
      <p>Populasion:{population}</p>
      <p>Area: {area} m<sup>2</sup></p>
      <button onClick={handelVisite}>{visite? 'Vsite':'Going'}</button>
      <p>{visite?'this country visited':'this is not visted'}</p>
      <button onClick={handelMap}> see on google map</button>
    </div>
  );
};

export default Countri;
