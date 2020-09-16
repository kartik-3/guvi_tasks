var request = new XMLHttpRequest();
var url_string1 = 'https://dog.ceo/api/breeds/list/all';	//Simple API opening
var url_string2 = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';	//Work-around for CORS
var url_string3 = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=767422ec9fdb76b3f5cbec369fe71574';	//API key with city name
var url_string4 = 'https://api.openweathermap.org/data/2.5/weather?id=1261481&appid=767422ec9fdb76b3f5cbec369fe71574';	//API key with city ID

request.open('GET',url_string2 /*url_string2/url_string3/url_string4*/, true); 
request.send();

request.onload = function() {
	var data = JSON.parse(this.response)
	console.log(data);
}
