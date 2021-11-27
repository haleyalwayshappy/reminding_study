// console.log (current + previous);

// previous 에는 더해진 숫자가 들어가야하고
// current 에는 previous에 있던 숫자가 들어가야한다.
let current = 1;
let previous = 0;

for (let i = 0; i <= 10; i++) {
  let temp = previous;
  previous = current;
  current = current + temp;
  console.log(current);
}
