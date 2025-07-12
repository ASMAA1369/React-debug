import React from "react";

function UserInfo({ user }) {
  return (
    <div className="component-box">
      <h3>Profil Utilisateur</h3>
      <p>Nom : {user?.name || "Non fourni"}</p>
      <p>Âge : {user?.age || "Inconnu"}</p>
    </div>
  );
}

export default UserInfo;
