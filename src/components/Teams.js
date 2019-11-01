// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Teams = ({match}) => (
//   <div className="main-content teams">
//     <div className="course-header group">
//       <h2>Teams</h2> 
//       <ul className="teams-nav">
//         <li><NavLink to ={`${match.url}/celtics`}>Celtics</NavLink></li>
//         <li><NavLink to ={`${match.url}/cavaliers`}>Cavaliers</NavLink></li>
//         <li><NavLink to ={`${match.url}/lakers`}>Lakers</NavLink></li>
//         <li><NavLink to ={`${match.url}/warriors`}>Warriors</NavLink></li>
//         <li><NavLink to ={`${match.url}/bucks`}>Bucks</NavLink></li>
//         <li><NavLink to ={`${match.url}/rockets`}>Rockets</NavLink></li>
//         <li><NavLink to ={`${match.url}/seventysixers`}>SeventySixers</NavLink></li>
//         <li><NavLink to ={`${match.url}/pistons`}>Pistons</NavLink></li>
//         <li><NavLink to ={`${match.url}/mavericks`}>Mavericks</NavLink></li>
//         <li><NavLink to ={`${match.url}/bulls`}>Bulls</NavLink></li>
//         <li><NavLink to ={`${match.url}/thunder`}>Thunder</NavLink></li>
//         <li><NavLink to ={`${match.url}/heat`}>Heat</NavLink></li>
//         <li><NavLink to ={`${match.url}/knicks`}>Knicks</NavLink></li>
//         <li><NavLink to ={`${match.url}/spurs`}>Spurs</NavLink></li>
//         <li><NavLink to ={`${match.url}/raptors`}>Raptors</NavLink></li>
//         <li><NavLink to ={`${match.url}/jazz`}>Jazz</NavLink></li>
//         <li><NavLink to ={`${match.url}/blazers`}>Blazers</NavLink></li>
//         <li><NavLink to ={`${match.url}/clippers`}>Clippers</NavLink></li>
//         <li><NavLink to ={`${match.url}/suns`}>Suns</NavLink></li>
//         <li><NavLink to ={`${match.url}/hawks`}>Hawks</NavLink></li>
//         <li><NavLink to ={`${match.url}/nuggets`}>Nuggets</NavLink></li>
//         <li><NavLink to ={`${match.url}/pacers`}>Pacers</NavLink></li>
//         <li><NavLink to ={`${match.url}/wizards`}>Wizards</NavLink></li>
//         <li><NavLink to ={`${match.url}/hornets`}>Hornets</NavLink></li>
//         <li><NavLink to ={`${match.url}/kings`}>Kings</NavLink></li>
//         <li><NavLink to ={`${match.url}/grizlies`}>Grizlies</NavLink></li>
//         <li><NavLink to ={`${match.url}/timberwolves`}>Timberwolves</NavLink></li>
//         <li><NavLink to ={`${match.url}/pelicans`}>Pelicans</NavLink></li>
//         <li><NavLink to ={`${match.url}/magic`}>Magic</NavLink></li>
//         <li><NavLink to ={`${match.url}/bobcats`}>Bobcats</NavLink></li>

//       </ul>
//     </div>
//   </div>
// );

import React, { Component } from 'react';
class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(`https://free-nba.p.rapidapi.com/teams`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'c7fd34a94dmshf780016a4ad8adep113a4djsn597b68ac5f2b'
      },
    })
    .then(res => res.json())
    .then(res => this.setState({teams: res, isLoaded: true}))

    // this.setState({players: 'hey'})
  
  }
            
  
  render() {
    const data = this.state.isLoaded ?
    this.state.teams.data.map((x) => {
      return <li className="team" key={x.id} >
      <img className="team-img" src={ `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${x['abbreviation'].toLowerCase()}.png`} alt="team" />
      <h3>{x['full_name']}</h3>
      <p>City: {x['city']}</p>
      <p>Conference: {x['conference']}</p>
      <p>Division: {x['division']}</p>
      <p>Nick name: {x['name']}</p>

      </li>
    }) : 'Loading'
    return (
      <ul>
          {data}
      </ul>
    );
  }
  
}



export default Teams;