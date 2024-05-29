function showTime() {
	let today = new Date();
	let currentTime = today.toLocaleTimeString('ru-RU');
	document.getElementById('time').innerHTML = currentTime
	let currentTime2 = today.getSeconds()
	document.getElementById('seconds').innerHTML = currentTime2
	let time = document.getElementById('timeArrow')
	time.style.transform = `rotate(${new Date().getSeconds() *  6}deg) translate(0, -50px)`;
	
}
setInterval(showTime, 1000);
