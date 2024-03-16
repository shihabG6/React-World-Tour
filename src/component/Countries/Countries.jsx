import { useEffect } from "react";
import { useState } from "react";
import Countri from "../Countri/Countri";
import "./countries.css";

const Countries = () => {
  const [countries, setCountrics] = useState([]);
  const [visitedCountry, setCountryCount] = useState([]);
  const [visitedFlage , setVisitedFlage]= useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrics(data));
  }, []);

  const handelCountryCount = (country) => {
    const newVisit = [...visitedCountry, country];
    setCountryCount(newVisit);
  };

  const handelCountryFlage = (flage)=>{
    console.log(flage)
    const newFlage = [...visitedFlage,flage.flags.svg];
    setVisitedFlage(newFlage);
  }

  return (
    <div>
      <h2>Vsite:{visitedCountry.length}</h2>
      {visitedCountry.map((country,i) =>  (
        <li key={i}>{country.name.common} </li>
      ))}
      {/* Add visit country flage */}
      <div className="visit-container">
        {
        visitedFlage.map((flage) =>  <img src={flage} alt="" /> )
        }
       
      </div>
      <div className="countries">
        {countries.map((countri,i) => (
          <Countri
            Countri={countri}
            handelCountryCount={handelCountryCount}
            handelCountryFlage={handelCountryFlage}
            key={i}
          ></Countri>
        ))}
      </div>
    </div>
  );
};

export default Countries;
