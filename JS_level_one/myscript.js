const first_name = prompt('First name');
const last_name = prompt('Last name');
const age = prompt('Age');
const height = prompt('Height');
const pet_name = prompt('Pet name');

if (first_name[0] === last_name[0] && age > 20 && age < 30 && height >=170 && pet_name.slice(-1) === 'y') {
    console.log("Comrade")
} else {
    console.log('Nothing to see here')
}




 
