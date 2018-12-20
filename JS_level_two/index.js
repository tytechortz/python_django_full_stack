var roster = [];

const addNew = () => {
  name = prompt('Add name:')
  roster.push(name)
}

addNew();
console.log(roster)

const remove = () => {
  removeName = prompt('Name to remove:');
  var index = roster.indexOf(removeName);
  if (index > -1) {
    roster.splice(index, 1);
  }
}

remove();
console.log(roster)