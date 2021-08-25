const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(group, name){
  const driver = group.filter(function (person){return person === name || person === name.toLowerCase() ;});
  return driver;
  
}
findMatching(drivers, 'Bobby');



function fuzzyMatch(group, letters){
  let startWith = group.filter(driver => driver.slice(0,letters.length) === letters);
  return startWith
}
fuzzyMatch(drivers, 'Sa');



const drivers2 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];


function matchName(group, name){
  const driver = group.filter(function (person){return person.name === name ;});
    return driver;
  }
  matchName(drivers2, 'Bobby');
