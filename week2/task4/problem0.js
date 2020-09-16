/*	PROBLEM 0 : PART A	*/

var cat = {
	name: 'Fluffy',
	activities: ['play', 'eat cat food'],
	catFriends: [
		{
		name: 'bar',
		activities: ['be grumpy', 'eat bread omblet'],
		weight: 8,
		furcolor: 'white'
		},
		{
		name: 'foo',
		activities: ['sleep', 'pre-sleep naps'],
		weight: 3
		}
	]
}
/*ca.catFriends[0].activities[0]*/
console.log(cat);

//1. Add height and weight to Fluffy

cat.height = 3;
cat.weight = 10;

//2. Fluffy name is spelled wrongly. Update it to Fluffyy

cat.name = 'Fluffyy';
//3. List all the activities of Fluffyy’s catFriends.

for (let i in cat.catFriends){
	for (let j in cat.catFriends[i].activities){
		console.log(cat.catFriends[i].activities[j])
	}
}
//4. Print the catFriends names.
for (let i in cat.catFriends){
	console.log(cat.catFriends[i].name)
}
//5. Print the total weight of catFriends
let wt = 0;
for (let i in cat.catFriends){
	wt += cat.catFriends[i].weight;
}

console.log(wt);
//6. Print the total activities of all cats (op:6)
let count = cat.activities.length;

for (let i in cat.catFriends){
	count += cat.catFriends[i].activities.length;
}
console.log(count);

//7. Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("sleep when not eating");
cat.catFriends[0].activities.push("scratch people");
cat.catFriends[1].activities.push("be cute");
cat.catFriends[1].activities.push("meow all the time");

//8. Update the fur color of bar
cat.catFriends[0].furcolor = 'black';

console.log(cat)



/*	PROBLEM 0 : PART B	*/

var myCar = {
	make: 'Bugatti',
	model: 'Bugatti La Voiture Noire',
	year: 2019,
	accidents: [
		{
			date: '3/15/2019',
			damage_points: '5000',
			atFaultForAccident: true
		},
		{
			date: '7/4/2022',
			damage_points: '2200',
			atFaultForAccident: true
		},
		{
			date: '6/22/2021',
			damage_points: '7900',
			atFaultForAccident: true
		}
	]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.

for (let i in myCar.accidents){
	myCar.accidents[i].atFaultForAccident = false;
}
//2. Print the dated of my accidents

for (let i in myCar.accidents){
	console.log(myCar.accidents[i].date);
}
console.log(myCar);