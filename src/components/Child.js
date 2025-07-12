import React from "react";

function Child({ username, setUser }) {
  const handleClick = () => {
    setUser(prevName => (prevName === "Nikola" ? "Albert" : "Nikola"));
  };

  return (
    <div className="component-box">
      <h3>Composant Enfant</h3>
      <p>Nom reçu : {username}</p>
      <button className="btn-glow" onClick={handleClick}>
        Changer le nom
      </button>
    </div>
  );
}

export default Child;
