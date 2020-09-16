/*
Problem:
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
*/

function getFullName(firstName, lastName){
	if (firstName === undefined){
		return lastName;
	}
	else if (lastName === undefined){
		return firstName;
	}
	else{
		return (firstName + " " + lastName);
	}
}

console.log(getFullName("Kartik", "Sehgal"));