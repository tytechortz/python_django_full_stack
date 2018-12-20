var roster = [];

const addNew = () => {
  var name = prompt('Add name:')
  roster.push(name)
}



const remove = () => {
  var removeName = prompt('Name to remove:');
  var index = roster.indexOf(removeName);
    roster.splice(index, 1);
}



const display = () => {
  console.log(roster);
}




let use = prompt('Would you like to use the roster app? y/n')
let request = 'empty';

if (use === 'y') {
  while ( request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === 'add') {
      addNew();
    } else if (request === 'display') {
      display();
    } else if (request === 'remove') {
      remove();
    }
  }
}
alert("Thanks for using this web app");