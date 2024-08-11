const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let foundMutants = [];
  
    for (const mutant of mutants) {
    if (mutant.power.includes(power)) {
      foundMutants.push(mutant.name);
    } 
  }
  
  if (foundMutants.length > 0) {
    return `Power found in: ${foundMutants.join(", ")}`
  } else {
    return "Power not found!"
  }
}

console.log(findMutantByPower(mutants, "regeneration"));
console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "invisibility"));