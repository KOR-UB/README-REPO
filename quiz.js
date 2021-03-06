// Q1) numbers 배열의 요소를 내림차순으로 정렬해주세요.
const numbers = [8, 10, 2, 5, 198, 33, 2934, 11, 230, 64, 923];
numbers.sort((a, b) => a - b);
// ??
console.log('Q1');
console.log(numbers); // [ 2934, 923, 230, 198, 64, 33, 11, 10, 8, 5, 2];
// Q2) words 배열의 각 요소(문자열)를 역순으로 가지는 새로운 배열(newWords)을 만들어주세요.
const words = ['hello', 'world', 'nice', 'to', 'meet', 'you'];
const newWords =  words.map(word => [...word].reverse().join(""));
console.log('Q2');
console.log(newWords); // [ 'olleh', 'dlrow', 'ecin', 'ot', 'teem', 'uoy' ]
// Q3) numbers2 배열의 요소 중 5의 배수만을 포함하는 새로운 배열(multiples)을 만들어주세요.
const numbers2 = [43, 18, 10, 99, 35, 80, 5, 111, 120];
const multiples = numbers2.filter(number2 => number2 % 5 === 0);
console.log('Q3');
console.log(multiples); // [ 10, 35, 80, 5, 120 ]
// Q4) numbers3 배열의 요소 중 요소의 값이 인덱스와 일치하는 요소를 출력해주세요.
const numbers3 = [0, 3, 88, 3, 2, 4, 6, 8, 8];

console.log('Q4');
console.log(numbers3.filter((number3, i) => i === number3));
// ??
// 0
// 3
// 6
// 8
// Q5) kvArray 배열을 사용하여 아래 예제와 같은 요소를 가진 새로운 배열(reformattedArray)을 만들어주세요.
const kvArray = [{
    key: 1,
    value: 10
  },
  {
    key: 2,
    value: 20
  },
  {
    key: 3,
    value: 30
  }
];
const reformattedArray =  [...kvArray].forEach(kvary => {
  // re
});
console.log('Q5');
console.log(reformattedArray);
/*
[
  { '1': 10 },
  { '2': 20 },
  { '3': 30 }
]
*/
const target = 'Is this all there is?';

// 임의의 3자리 문자열을 검색
const regExp = /./g;

console.log(target.match(regExp));// -> ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]);
