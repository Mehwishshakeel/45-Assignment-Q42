// Make a array of magician’s names in a function
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
  }
// Function to make magicians Great through .map() it will modify array
  function make_great(magicians:string[]){
     return magicians.map(name=> `The Great ${name}`);
  }

  // Define array of magicians name
  let magician_names = ["Usman","Hamza","Sunny","Salman"];
  // Call make_great function to modify magicians names
  let great_magicians = make_great(magician_names);
  // call show_magicians that showed modify list of magicians
show_magicians(great_magicians);
