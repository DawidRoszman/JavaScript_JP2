
'use strict';
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
let arr4 = []
arr3.forEach(item => {
  if(!arr4.includes(item)){ 
    arr4.push(item)
  console.log(item + " wystepuje" + " " + arr3.filter(
    item2 => item2 === item).length + " razy");
  }
});
