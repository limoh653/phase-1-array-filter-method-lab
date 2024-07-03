// Code your solution here
// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  console.log(findMatching(drivers, 'Bobby')); 
  console.log(findMatching(drivers, 'Sammy')); 
  
  function fuzzyMatch(drivers, name) {
      return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
    }
    
    console.log(findMatching(drivers, 'Sa')); 
    console.log(findMatching(drivers, 'Bo')); 
  
    const drivers = [
      { name: 'Bobby', hometown: 'New York' },
      { name: 'Sammy', hometown: 'Los Angeles' },
      { name: 'Sally', hometown: 'Chicago' },
      { name: 'Annette', hometown: 'Houston' },
      { name: 'Sarah', hometown: 'Phoenix' },
      { name: 'Bobby', hometown: 'San Francisco' }
    ];
    
    function matchName(drivers, name) {
      return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
    }