function showDate() {
  let outR = document.getElementById('current-dateR');
  let outA = document.getElementById('current-dateA')
  let outE = document.getElementById('current-dateE')
  let outS = document.getElementById('current-dateS')
  let outF = document.getElementById('current-dateF')
  let outI = document.getElementById('current-dateI')
  let today = new Date();
  outR.innerHTML =  "Дата и время для русской локали: "+today.toLocaleString("ru-RU");
  outA.innerHTML =  "Дата и время для арабской локали: "+today.toLocaleString("ar-AR");
  outE.innerHTML =  "Дата и время для английской локали: "+today.toLocaleString("en-EN");
  outS.innerHTML =  "Дата и время для испанской локали: "+today.toLocaleString("es-ES");
  outF.innerHTML =  "Дата и время для французской локали: "+today.toLocaleString("fr-FR");
  outI.innerHTML =  "Дата и время для индонезийской локали: "+today.toLocaleString("id-ID");

	let year = document.getElementById('outputYear');
  let month = document.getElementById('outputMonth');
  let day = document.getElementById('outputDay');
  let weak = document.getElementById('outputWeak');
  dt = new Date()
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const weakkk = ['Воскресенье', "Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота"]
  year.innerHTML = "Текущий год: " + dt.getFullYear()
  month.innerHTML = "Текущий месяц: " + months[dt.getMonth()];
  day.innerHTML = "Текущий день: " + dt.getDate();
  weak.innerHTML = "Текущий день недели: " + weakkk[dt.getDay()];
}

