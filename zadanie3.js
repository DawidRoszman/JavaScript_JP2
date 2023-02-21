let arr = [1,2,3,4,5,6, -2, -4];

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

const max = arr => {
  let max = arr[0];
  arr.forEach(element => {
   if(element > max) max = element;
  })
  console.log(max);
  }
const min = arr => {
  let min = arr[0];
  arr.forEach(element => {
   if(element < min) min = element;
  })
  console.log(min);
  }
max(arr);
min(arr);

console.log(arr.reverse());
