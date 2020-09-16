/*
Problem:
Create a function to calculate the distance between two points defined by their x, y coordinates
*/

function getDistance(x1, y1, x2, y2) {
	let x = x2 - x1, y = y2 - y1;
	return(Math.sqrt(y**2 + x**2));
}

console.log(getDistance(100,100,400,300));