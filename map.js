// const numbers = [4,5,6,7,8];

// const doubled = [];

// for (const num of numbers)
// {
//     const double = num*2;
//     doubled.push(double);
// }

// console.log(doubled);


// map function er valuegula re ekta array er moddhe rakhe then overall array ta return kore

const numbers = [4,5,6,7,8,9];

function doubleIt(num)
{
    // console.log("number Now", num)
    return num*2;
}
// 2ns
const result = numbers.map(doubleIt);
// console.log(result);

const double2 = n => n*2;
// 3rd
const output = numbers.map(double2);

console.log(output);
// 4th
const doubled = numbers.map(num => num*2)
console.log(doubled);

// 5th

const friends = ['tom','jhon','mic','oli'];
const lengths = friends.map(frnd => frnd.length)
// console.log(lengths);

const ft = friends.map(f => f[0])
    console.log(ft);


