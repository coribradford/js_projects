const team = {
    _players: [
      {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
      {firstName: 'Julio', lastName: 'Ruiz', age: 12}, 
      {firstName: 'Jose', lastName: 'Lopez', age: 11}
     ],
    _games: [
      {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Thunders', teamPoints: 25, opponentPoints: 22},
      {opponent: 'Pirates', teamPoints: 35, opponentPoints: 20}
    ],
    get players () {
      return this._players
    },
    get games () {
      return this._games
    },
    addPlayer (firstName, lastName, age) {
      const player = {firstName: firstName,
      lastName: lastName,
      age: age
      }
      this._players.push(player)
    },
    addGame (opponentName, teamPoints, opponentPoints) {
      const game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this._games.push(game)
    }
  }
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team.players)
  team.addGame('Golend', 23, 34)
  console.log(team.games)