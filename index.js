const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((ar) => {
      const ar_array = ar.split(' ');
      const ar_new = ar_array.map((s) => {
      s = `${s[0].toUpperCase()}${s.slice(1)}`; 
       return s; 
    })
      return ar_new.join(" ");
    })
  return tutorials 
  }
    
console.log(titleCased()) 
