import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [user, setUser] = useState("Nikola");

  return (
    <div className="component-box">
      <h3>Composant Parent</h3>
      <Child username={user} setUser={setUser} />
    </div>
  );
}

export default Parent;
