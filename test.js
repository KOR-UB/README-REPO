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

// function binarySearch (array, target) {
//     let start = 0;
//     let end = array.length - 1;
//     while (start <= end) {
//       const mid = Math.floor((start + end) * 0.5);
//       if (array[mid] === target) return mid;
//       else if (array[mid] > target) end = mid - 1;
//       else start = mid + 1;
//     }
//     return -1;
//   }
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
//   console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1

// (function printNow() {
//   const today = new Date();

//   const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
//   // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
//   const day = dayNames[today.getDay()];

//   const year = today.getFullYear();
//   const month = today.getMonth() + 1;
//   const date = today.getDate();
//   let hour = today.getHours();
//   let minute = today.getMinutes();
//   let second = today.getSeconds();
//   const ampm = hour >= 12 ? 'PM' : 'AM';

//   // 12시간제로 변경
//   hour %= 12;
//   hour = hour || 12; // 0 => 12

//   // 10미만인 분과 초를 2자리로 변경
//   minute = minute < 10 ? '0' + minute : minute;
//   second = second < 10 ? '0' + second : second;

//   const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

//   console.log(now);
//   setTimeout(printNow, 1000);
// }());

const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.filter((v, i, arr) => arr.indexOf(v) === i);
console.log(result);