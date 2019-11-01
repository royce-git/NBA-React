import React, { Component } from 'react';

class Home extends Component {    
  
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`https://free-nba.p.rapidapi.com/games`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'c7fd34a94dmshf780016a4ad8adep113a4djsn597b68ac5f2b'
        },
      })
      .then(response => response.json())
      .then(res => this.setState({games: res, isLoaded: true}))  }

  render() {

    const data = this.state.isLoaded ?
    this.state.games.data.map((x) => {
    return <li className="games" key={x.id} >
      <div className="game-container">
     <div className="home-card">
       <h1>{x['home_team']['full_name']}</h1>
       <img className="team-img" src={ `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${x['home_team']['abbreviation'].toLowerCase()}.png`} alt="team" />

       <ul class="score">
         <li>{x['home_team_score']}</li>
         
        </ul>
     </div>
     
    <div className="vs">
      VS
    </div>
    
    <div className="visitor-card">
      <h1>{x['visitor_team']['full_name']}</h1>
      <img className="team-img" src={ `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${x['visitor_team']['abbreviation'].toLowerCase()}.png`} alt="team" />
      <ul class="score">
        <li>{x['visitor_team_score']}</li>
      </ul>
    </div>
    </div>
      </li>
    }) : 'Loading'
    return (
      <div className="main-content home">
      
        <h2>NBA Teams and Players</h2>
        <p>Check out the results of the latest games below and find information on your favourite NBA Players and Teams</p>

<div>{data}</div>
       
      </div>
      
    
    );
  }
}

export default Home;
