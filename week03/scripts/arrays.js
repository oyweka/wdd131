let scores = [100, 72, 83, 94, 88, 87];
let aScore = scores[0];
console.log(aScore);
console.log(scores.length);

let bScore = scores.slice(0, 4);
console.log(bScore);

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana'];

console.log(names[2]);
console.log(names.length);
names.push('Sally');
console.log(names);

names[0] = 'Alex';
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift('Nancy');
console.log(names);

let selectedNames = names.slice(1, 3);
console.log(selectedNames);

names.splice(1, 1);
console.log(names);

let nameList = names.join(', ');
console.log(nameList);

names.forEach(function(name) {
    console.log(name);
});