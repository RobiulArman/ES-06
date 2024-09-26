const numbers = [15,6,7,8,9];
const players = [75,65,67,72,55,59]
// check condition and return array that fullfil the condition
// const selected = players.filter(p =>p>70);
const selected = players.filter(p =>p%2 === 1); //odd
console.log(selected)

const friends = ['Tom','Jhon','Mic','oliiiii'];

const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);