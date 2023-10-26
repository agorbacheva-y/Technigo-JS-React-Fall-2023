import { useState } from "react";
import "./Card.css";

const Card = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);

  
/*
document.getElementById("clicked--body").addEventListener("mouseover", () => {
    hoverBody.style.height = "100%";
});

document.getElementById("clicked--body").addEventListener("mouseout", () => {
    hoverBody.style.height = "50%";
});
*/

  return (
    <>
      {/* If the card is clicked, render this: */}
      {isClicked ? (
        <div className="card clicked" style={{"backgroundColor": data.primary_color, "color": data.text_color}}>
          <header className="card__header">{data.title}</header>
          <section className="card__body" style={{"backgroundColor": data.secondary_color}}>{data.emoji}</section>
        </div>

      ) : (
        // If the card isn't clicked, render this:
        <div className="card" style={{"backgroundColor": data.primary_color, "color": data.text_color}}>
          <header className="card__header"><div className="title">{data.title}</div> <div className="emoji">{data.emoji}</div></header>
          <section className="card__body" style={{"backgroundColor": data.secondary_color}}>
            <p className="card__desc">{data.description}</p>
            <button onClick={()=> setIsClicked(true)} style={{"backgroundColor": data.button_color, "color": data.button_text_color}}>{data.button_text}</button>
          </section>
        </div>
      )}
    </>
  );
};

export default Card;
