function showTime() {
	let today = new Date();
	let currentTime = today.toLocaleTimeString('ru-RU');
	document.getElementById('time').innerHTML = currentTime
	let currentTime2 = today.getSeconds()
	document.getElementById('seconds').innerHTML = currentTime2
	
}
setInterval(showTime, 1000);
