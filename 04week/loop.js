let i = 0;

do {
  i++;
  console.log(i);
} while (i < 1000);

let d = new Date()
d.setFullYear(1971)
let person = { 
  firstName: "Jane", 
  lastName: "Doe", 
  birthDate: d, 
  gender: "female"}

for (key in person) {
  if (key === 'birthDate'){
    let birthYear = person[key].getFullYear()
    if (birthYear % 2 == 1) {
      console.log(person[key])
    }
  }
  console.log(key)
}
    

let d1 = new Date()
d1.setFullYear(1970)
let d2 = new Date()
d2.setFullYear(1991)
let d3 = new Date()
d3.setFullYear(1975)
let d4 = new Date()
d4.setFullYear(2000)
let d5 = new Date()
d5.setFullYear(1988)

  let arrayOfPersons = [{
  firstName: "Jane", 
  lastName: "Doe", 
  birthDate: d1, 
  gender: "female"},

  {
  firstName: "Daniel", 
  lastName: "Smith", 
  birthDate: d2, 
  gender: "male"},

  {
  firstName: "Blake", 
  lastName: "Jarwin", 
  birthDate: d3, 
  gender: "male"},

  {
  firstName: "Kristy", 
  lastName: "Williams", 
  birthDate: d4, 
  gender: "female"},

  {
  firstName: "Amber", 
  lastName: "Locklear", 
  birthDate: d5, 
  gender: "female"
  }]

  let personInfoArray = arrayOfPersons.map(person => {
    return `${person.firstName} ${person.lastName} - ${person.gender}`
    
  })

  personInfoArray.forEach(person => console.log(person))
  let males = arrayOfPersons.filter(person => {
    return person.gender === "male"
  })

  males.forEach(person => console.log(person))

  let oldPeople = arrayOfPersons.filter(person => {
    let date = new Date(1990, 0, 1)
    return person.birthDate.getTime() < date.getTime()
  })

  console.log(oldPeople)