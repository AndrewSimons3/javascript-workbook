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

class Player {
  constructor(id){
    this.id = id
  }
}

class Teammate extends Player {
  constructor(id, color){
    super(id)
    this.color = color
    this.mascot = color == 'red' ? 'cardinal' : 'tiger'
  }
}

const addPlayer = (id) => {
  let player = new Player(id)
  listOfPlayers.push(player)
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

const addToTeam = (id, teamType) => {
  console.log(id, teamType)
  const teamUlElement = document.getElementById(teamType)
  const li = document.getElementById(id)
  teamUlElement.appendChild(li)
  li.removeChild(li.lastChild)
  li.removeChild(li.lastChild)
  const player = listOfPlayers.find((player) => {
    return player.id == id
  });
  const teamArr = teamType == 'red' ? redTeam : blueTeam
  const teammate = new Teammate(id, teamType)
  teamArr.push(teammate)
  const index = listOfPlayers.indexOf(player)
  listOfPlayers.splice(index, 1)
  
}

