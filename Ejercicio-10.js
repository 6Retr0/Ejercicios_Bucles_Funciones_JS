const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    if (capitals[country] == undefined) {
      return "Country not found!"
    } else return `Its capital is ${capitals[country]}`;
  }
  
console.log(getCapital("Netherlands"));
console.log(getCapital("Poland"));