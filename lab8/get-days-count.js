function showDaysCount() {
	let today = new Date();
	let inputDate = document.querySelector('input[type=date]');
	let birthday = new Date(inputDate.value);
	let daysCount = (today - birthday)/1000/60/60/24;
	daysCount = Math.floor(daysCount)
	myDays.innerHTML = 'Количество дней с даты рождения:' + daysCount
}
function Clear(){
	let output = document.getElementById('myDays')
	output.innerHTML = "Количество дней с дня рождения :"
	document.querySelector('input[type="date"]').value = "";
}