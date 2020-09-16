var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url_string = 'https://dog.ceo/api/breeds/list/all';

try{
	request.open('GET',url_string, true); 
}
catch (ex) {
	console.log("Could not open the url " + url_string);
}

try{
	request.send();
}
catch (ex) {
	console.log("Error in sending request.");
}


request.onload = function() {
	try{
		var data = JSON.parse(this.response);
	}
	catch (ex) {
		console.log("Unable to parse data.");
	}
	finally {
		console.log(data);
	}
}