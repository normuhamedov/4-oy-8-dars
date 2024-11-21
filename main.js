// 1-masala
// let obj = {a: 2, b:3, c:4}
// let n = 3
// let result = {}

// for (const a in obj) {
//     result[a] = obj[a] *n
// }
// console.log(result);

// 2-masala

// function fn(str) {
//     let count = 0;
//     const words = str.split(" "); 
//     for (let word of words) {
//         if (word.toLowerCase().includes('a')) {
//             count++;
//         }
//     }
//     return count;
// }
// const text = "argument sifatida berilgan string da...";
// console.log(fn(text)); 

// 3-masala

// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ];

// books.forEach((book, index) => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`);
// });

// 4-masala

// const arr = ["text", "world", "laptop"];

// const result = {};
// arr.forEach(str => {
//     result[str] = str.length;
// });

// console.log(result);

// 5-masala

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const result = {};
// animals.forEach(animal => {
//     result[animal] = (result[animal] || 0) + 1; 
// });
// console.log(result);


// 6-masala

// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];
// people.sort((a, b) => a.age - b.age);
// const gap = people[people.length - 1].age - people[0].age;
// console.log(gap); 

// 7-masala

// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// function getTruthyFalsy(arr) {
//     return {
//         truthy: arr.filter(item => Boolean(item)),
//         falsy: arr.filter(item => !Boolean(item))
//     };
// }
// const result = getTruthyFalsy(input);
// console.log(result);


// 8-masala

// function minMaxWord(sentence) {
//     const words = sentence.split(" ");
//     let minWord = words[0];
//     let maxWord = words[0];

//     words.forEach(word => {
//         if (word.length < minWord.length) minWord = word;
//         else if (word.length > maxWord.length) maxWord = word;
//     });
//     return { minWord, maxWord };
// }
// console.log(minMaxWord("Men dasturlash kursida o'qiyman"));


// 12-masala

// function fn(str) {
//     str = str.trim();
//     let words = str.split(' ');
//     return words[words.length - 1].length;
// }
// let text = "sizda qandaydir string bor va shundagi oxirgi so'zning length ni toping";
// console.log(fn(text));


// 13-masala

// const obj = {a: 2, b: 5, c: 7};

// const result = Object.entries(obj)
//     .map(([key, value]) => `${key}: ` + value).join(', ');

// console.log(result);

// 14-masala
// let nums1 = [1, 2]
// let nums2 = [3, 4]
// var findMedianSortedArrays = (nums1, nums2) => {
//     let sort = [...nums1, ...nums2].sort((a, b) => a - b);
//     let mid = sort.length / 2;
//     return sort.length % 2 ? sort[Math.floor(mid)] : (sort[mid - 1] + sort[mid]) / 2;
// };
// console.log(findMedianSortedArrays(nums1, nums2));

// 15-masala
let array = [1, 2, 3, 4, 2, 3, 5, 6, 3];
function fn(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(fn(array));
