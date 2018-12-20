var roster = [];

const addNew = () => {
  name = prompt('Add name:')
  roster.push(name)
}

addNew();
console.log(roster)