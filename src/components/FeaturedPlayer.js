import React from 'react';

const Featured = ({match}) => {
let name = match.params.name;
let team = match.params.team;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a player who represents the <strong>{team}</strong>!</p>
    </div>
  );
}

export default Featured;