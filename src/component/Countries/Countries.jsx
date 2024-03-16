import { useEffect } from "react";
import { useState } from "react";
import Countri from "../Countri/Countri";
import "./countries.css";

const Countries = () => {
  const [countries, setCountrics] = useState([]);
  const [visitedCountry, setCountryCount] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrics(data));
  }, []);

  const handelCountryCount = (country) => {
    const newVisit = [...visitedCountry, country];
    setCountryCount(newVisit);
  };

  return (
    <div>
      <h2>Vsite:{visitedCountry.length}</h2>
      {visitedCountry.map((country) => (
        <li>{country.name.common}</li>
      ))}
      <div className="countries">
        {countries.map((countri) => (
          <Countri
            Countri={countri}
            handelCountryCount={handelCountryCount}
            key={countri.cca2}
          ></Countri>
        ))}
      </div>
    </div>
  );
};

export default Countries;
