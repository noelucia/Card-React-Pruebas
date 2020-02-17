import React from "react";
import "./Card.css";
import Rss from "./rss.svg";


const Card = props => { // la idea del componente es que simplifique el codigo
  return (
    <section className="card">
      <header className="card-header" style={{backgroundImage: `url(${props.headerImg})`}}> 
      <h1>{props.title}</h1>
    </header>
        <article>
          <p>Dublin, Irlanda!</p>
          <a className="ress-link" href="#">
            <img className="rss" src={Rss}/>
          </a>
        </article>
    </section>
  );
};
export default Card;
