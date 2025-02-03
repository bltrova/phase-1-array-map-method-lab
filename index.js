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


// console.log(tutorials)
function titleCased() {
  return tutorials.map(list => list.split(" ").map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ') );
  
}

// const firstLetter = tutorials.map(list => {
//   let words = list.split(" ");
//   words.forEach((words, index, array) => {
//     array[index] = words.charAt(0).toUpperCase() + words.slice(1);
    
//   });
//   return words.join(' ');
   
// })




// create a function titleCased
// modify the array:
// - break each array
// - access each array and modify each individual word
// - replace the letter
// - oin it back together in the array




