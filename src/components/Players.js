import React, { Component } from 'react';


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(`https://nba-players.herokuapp.com/players-stats`, {
      method: 'GET'
      // headers: {
      //   'Content-Type': 'application/json',
      //   'X-RapidAPI-Key': 'c7fd34a94dmshf780016a4ad8adep113a4djsn597b68ac5f2b'
      // },
    })
    .then(res => res.json())
    .then(res => this.setState({players: res, isLoaded: true}))
  }

            
  render() {
    const spacer = /\s/g;
    const data = this.state.isLoaded ?
    this.state.players.map((x) => {
    return <li className="player" key={x.id} data-player={x.name}>
      <span class="player-pic-name">
      <img className="player-img" src={ `https://nba-players.herokuapp.com/players/${x.name.replace(spacer, '_')} `} alt="player" />
      <h3>{x['name']}</h3>
      </span>
      <span>
      <p>Games Played: {x['games_played']}</p>
      <p>Minutes Per Game:{x['minutes_per_game']}</p>
      <p>Field Goals Attemped Per Game:{x['field_goals_attempted_per_game']}</p>
      <p>Field Goals Made Per Game:{x['field_goals_made_per_game']}</p>
      <p>Field Goal Percentage:{x['field_goal_percentage']}</p>
      <p>Free Throw Percentage:{x['free_throw_percentage']}</p>
      <p>3pointers Attempted Per Game:{x['three_point_attempted_per_game']}</p>
      <p>3pointers Made Per Game:{x['three_point_made_per_game']}</p>
      <p>3point Percentage:{x['three_point_percentage']}</p>
      </span>
      <span>
      <p>Points Per Game:{x['points_per_game']}</p>
      <p>Offensive Rebounds Per Game:{x['offensive_rebounds_per_game']}</p>
      <p>Defensive Rebounds Per Game:{x['defensive_rebounds_per_game']}</p>
      <p>Rebounds Per Game:{x['rebounds_per_game']}</p>
      <p>Assists Per Game:{x['assists_per_game']}</p>
      <p>Steals Per Game:{x['steals_per_game']}</p>
      <p>Blocks Per Game:{x['blocks_per_game']}</p>
      <p>Turnovers Per Game:{x['turnovers_per_game']}</p>
      <p>Player Efficiency Ratinng:{x['player_efficiency_rating']}</p>
      </span>
      </li>

    }) : 'Loading'
    return (
      <ul>
        <form>
          <input type="text" placeholder="Name"/>
          <button type="submit">GO!</button>
        </form>
        <br></br>

          {data}
      </ul>
    );
  }

  
}




export default Players;

