let max = 10000;
let num = 0;
const minus = 8;
const counter = setInterval(() => {
 if(max > 0)
 {
  num++;
  max -= minus;
  console.log(num);
 }
 else 
 {
   clearInterval(counter);
 }
}, 100);
