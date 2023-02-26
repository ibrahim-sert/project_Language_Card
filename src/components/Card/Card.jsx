import React from "react";
import { languages } from "../../helpers/data";
import Lang from "../lang/Lang";
import './Card.css';

const Card = () => {
  return (
    <div className="cards-ctn">
      <div className="serit">The Champions</div>
        <h1 className="lang-title">World Cup</h1>
        <div className="cards-box">
          {languages.map((lang, index) => (
            <Lang key={index} {...lang} />
          ))}
        </div>
        
    </div>
  );
};

export default Card;
