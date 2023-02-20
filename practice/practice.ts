import { Bus } from './oop/Bus';
// //  // Chunk size two:
// //  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]


// //  // Chunk size two:
// //  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

// //  // Chunk size 3:
// //  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

// function chunkArray(arr, size) {
//   const bucket = [];
//   let bucketSize = Math.ceil(arr.length / size); //2 , 2.3 => 3

//   for (let i = 0; i < bucketSize; i++) {
//     bucket.push([]);
//   }

//   let count = 0;
//   let currentInnerIndex = 0;
//   //bucket [[1, 2], [], []]
//   for (let i = 0; i < arr.length; i++) {
//     //index
//     count++;
//     if (count === size) {
//       //2
//       bucket[currentInnerIndex].push(arr[i]);
//       currentInnerIndex++;
//       count = 0;
//     } else {
//       bucket[currentInnerIndex].push(arr[i]);
//     }
//   }

//   return bucket;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 4));

// //5
// //2

// function chunkArray2(arr, size) {
//   const chunked = [];
//   [[1, 2], [3]];
//   for (let element of arr) {
//     const last = chunked[chunked.length - 1]; //chunked[-1]

//     if (!last || last.length === size) {
//       //false || true
//       chunked.push([element]); //[[1]]
//     } else {
//       last.push(element); //[1,2]
//     }
//   }

//   return chunked;
// }

// console.log(chunkArray2([1, 2, 3, 4, 5], 2));

// function chunkArray3(arr, size) {
//   const chunked = [];//[[1,2],[3,4]]
//   let index = 0;

//   while (index < arr.length) {
//     chunked.push(arr.slice(index, index + size)); // 2 => 3 [1,2]
//     index += size;
//   }

//   return chunked;
// }


// //A log of users and what buttons they pressed on the UI.
// //There is a bug that when the same user presses a specific sequence, there will be an error for that user. 
// //'ABC' => user error , sequence
// //return array of user ids that had error
// const logs = [
//   { id: 1, buttonPressed: 'A' },
//   { id: 1, buttonPressed: 'B' },
//   { id: 2, buttonPressed: 'D' },
//   { id: 1, buttonPressed: 'C' },
//   { id: 1, buttonPressed: 'E' },
//   { id: 2, buttonPressed: 'A' },
// ];

// //ABCE
// function returnUserError(logs){
//   let userErrors = [];
//   let userPressed = {};
//   logs.forEach((log) => {
//     if(userPressed[log.id]){
//       userPressed[log.id] = userPressed[log.id] + log.buttonPressed;
//     }else{
//       userPressed[log.id] = log.buttonPressed;
//     }
//   })
  
//   for(const key in userPressed){
//     if(userPressed[key].includes('ABC')){
//       userErrors.push(key)
//     }
//   }

//   return userErrors;
// }

// console.log(returnUserError(logs));


const bus = new Bus("123456", 4, 33);