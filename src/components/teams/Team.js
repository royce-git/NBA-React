import React from 'react';

const Team = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="team" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Team;