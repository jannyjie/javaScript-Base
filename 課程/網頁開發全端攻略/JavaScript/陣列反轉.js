const friends = ["Harry", "Ron", "Snap"];

console.log(friends.reverse());

/////////////////$Recycle.Bin
const friend = [1, 2, 3, 4, 5];
const reverseFriends = [];
for (let i = friend.length - 1; i >= 0; i--) {
    console.log(friend[i]);
    reverseFriends.push(friend[i]);

}

console.log(reverseFriends);

////////////////////$Recycle.Bin
const friends = ["Harry", "Ron", "Snap"];
const reversed_friends = [];
for (let i = 0; i < friends.length; i++) {
    reversed_friends.unshift(friends[i]);
}
console.log(reversed_friends);

//////////////////$Recycle.Bin
let arr = [1, 2, 3, 4, 5],
    i, new_arr = [];
for (i = arr.length - 1; i >= 0; --i) {
    new_arr.push(arr[i]);
}
console.log(new_arr);