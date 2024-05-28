function showTime() {
	let today = new Date();
	let currentTime = today.toLocaleTimeString('ru-RU');
	document.getElementById('time').innerHTML = currentTime
	document.getElementById('seconds').innerHTML = currentTime
}
setInterval(showTime, 1000);