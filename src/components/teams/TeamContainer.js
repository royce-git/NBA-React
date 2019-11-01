import React from 'react';
import Team from './Team';


const TeamContainer = (props) => {
  let teams = props.data.map((team) => {
    return <Team title={team.title}
                   desc={team.description}
                   img={team.img_src}
                   key={team.id} />
  }); 
  return (
    <div>
      <ul>
        {teams}    
      </ul>
    </div>
  );
}

export default TeamContainer;