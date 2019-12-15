

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class DodgeBallPlayer {
  constructor(id, canThrowBall = true, canDodgeBall = true, isHealthy = true, hasPaid = false, yearsExperience = 1){
    this.id = id
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.isHealthy = isHealthy
    this.hasPaid = hasPaid
    this.yearsExperience = yearsExperience
  }

  toString() {
    return `has paid: ${this.hasPaid}\ncan throw ball: ${this.canThrowBall}`
  }
}

class Teammate extends DodgeBallPlayer {
  constructor(id, color){
    super(id)
    this.color = color
    this.mascot = color == 'red' ? 'cardinal' : 'tiger'
  }

  toString() {
    return `${super.toString()}\nmascot: ${this.mascot}`
  }
}
let moveToPlayerInUi = (id) => {
  const li = document.getElementById(id)
  li.removeChild(li.firstChild)
  const button = document.createElement("button")
  button.innerHTML = "Blue Team"
  button.addEventListener('click', function() {addToTeam(id, 'blue')} )
  li.appendChild(button)
  const button2 = document.createElement("button")
  button2.innerHTML = "Red Team"
  button2.addEventListener('click', function() {addToTeam(id, 'red')} )
  li.appendChild(button2)
  const dodgeballPlayers = document.getElementById("players")
  dodgeballPlayers.appendChild(li)
}
const addPlayer = (id) => {
  let player = new DodgeBallPlayer(id)
  listOfPlayers.push(player)
  // alert(player.toString())
  moveToPlayerInUi(id)
}

const addToTeam = (id, teamType) => {
  console.log(id, teamType)
  moveToTeamInUi(id, teamType)
  const player = listOfPlayers.find((player) => {
    return player.id == id
  });
  const teamArr = teamType == 'red' ? redTeam : blueTeam
  const teammate = new Teammate(id, teamType)
  // alert(teammate.toString())
  teamArr.push(teammate)
  const index = listOfPlayers.indexOf(player)
  listOfPlayers.splice(index, 1)
}

let moveToTeamInUi = (id, teamType) => {
  const teamUlElement = document.getElementById(teamType)
  const li = document.getElementById(id)
  teamUlElement.appendChild(li)
  li.removeChild(li.lastChild)
  li.removeChild(li.lastChild)
}

if (typeof describe === 'function') {
  const assert = require('assert');
  describe('#addPlayer()', () => {
    it('should add a person to the listOfPlayers', () => {
      moveToPlayerInUi = () => {}
      const playerCountBefore = listOfPlayers.length 
      addPlayer(2)
      const playerCountAfer = listOfPlayers.length
      assert.equal(playerCountBefore, playerCountAfer - 1, 'player count did not increase by 1 when adding a player');
    });
  });

  describe('#addToTeam()', () => {
    it('should remove a player from list of dodge ball players', () => {
      moveToTeamInUi = () => {}
      const playerCountBefore = listOfPlayers.length 
      addToTeam(2, 'red')
      const playerCountAfer = listOfPlayers.length
      assert.equal(playerCountBefore, playerCountAfer + 1, 'player count did not increase by 1 when adding a player');
    });

    it('should increment red team array and blue team array remains unchanged', () => {
      moveToPlayerInUi = () => {}
      moveToTeamInUi = () => {}
      addPlayer(3)
      const blueTeamCountBefore = blueTeam.length 
      const redTeamCountBefore = redTeam.length
      addToTeam(3, 'red')
      assert.equal(redTeam.length, redTeamCountBefore + 1, 'red team count did not increase by 1');
      assert.equal(blueTeam.length, blueTeamCountBefore, `blue team array count before was ${blueTeamCountBefore} not equal to ${blueTeam.length}`)
    });
  });
}