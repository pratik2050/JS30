const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


  //Array.some() -- It will check if atleast one item in the array is what we are looking for
  const isAdult = people.some(function(person) {

    const currYear = 2017 //we can also use (new Date()).getFullYear();

    if(currYear - person.year >= 19) {
        return true;
    }
  });

  /* 
    we can use arrow function here

    const isAdult = people.some( (person) => ((new Date()).getFullYear()) - person.year >= 19);

*/

  console.log({isAdult});   //{isAdult} will show the the object


// Array.every -- It will check if every item in array meet our requirement or not
  const isEvery = people.every( person => 2017 - person.year >= 19);

  console.log({isEvery});


// Array.find -- It will return the first finding of the passed item in the array
  const isFind = comments.find (comment => comment.id === 823423);

  console.log(isFind);


// Array.findIndex -- It will find the index of the passed item
  const index = comments.findIndex (comment => comment.id === 823423);

  console.log(index);


// Array.splice -- It will delete an item in array
  comments.splice(index, 1);

  console.table(comments);

  // A more standard way is to use create a new array without that item
    const newArr = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];

    console.table(newArr);