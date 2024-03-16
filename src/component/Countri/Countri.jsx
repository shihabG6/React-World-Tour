import { useState } from "react";
import "./countri.css";
const Countri = ({ Countri ,handelCountryCount,handelCountryFlage}) => {
  const { name,cca2, flags, maps,population,area} = Countri;


  // console.log(Countri);
  const[visite, setVisite]=useState(false);
  const handelVisite = ()=>{
    setVisite(!visite)
  }

  // const handelMap =()=>{
  //   window.open(maps.googleMaps)
  // }

  // console.log(handelCountryCount)
  // const dd = ()=>{
  //   handelCountryCount(Countri)
  // }

  return (
    <div className={`countri ${visite&& "bg"}`}>
      <img src={flags?.png} alt="" />
      <h2> {name?.common}</h2>
      <p>Populasion:{population}</p>
      <p>Area: {area} m<sup>2</sup></p>
      <p>Code:{cca2}</p>
      <button onClick={()=>handelCountryFlage(Countri)}>Add Flage</button>
      <button onClick={()=>handelCountryCount(Countri)}>Visited Country</button>
      <button onClick={handelVisite}>{visite? 'Vsite':'Going'}</button>
      <p>{visite?'this country visited':'this is not visted'}</p>
      {/* <button onClick={handelMap}> see on google map</button> */}
    </div>
  );
};

export default Countri;
