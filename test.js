// var count = 10;
// var price = 1000;
// var result = 0;

// for (let i = 0; i < count; i++) {
//   result += price;
// }
// if(count >= 10)
// {
//   result *= 0.9;
// }
// console.log(result);

// const obj = 
// {
//   name: 'Lee',
//   sayHi: function()
//   {
//     console.log("?");
//   },
//   getHi()
//   {
//     console.log("!");
//   }
// }
// obj.sayHi();;

function binarySearch (array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) * 0.5);
      if (array[mid] === target) return mid;
      else if (array[mid] > target) end = mid - 1;
      else start = mid + 1;
    }
    return -1;
  }
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
  console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1