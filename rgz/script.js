document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    } 
});

function getTJS(){
    const url = "https://www.cbr-xml-daily.ru/daily_json.js";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        let usernumber = document.getElementById('input').value;
        let output  = document.getElementById('output');
        let first = document.getElementById('first').value;
        let second = document.getElementById('second').value;
        usernumber =  parseFloat(usernumber);
        if (usernumber < 0 || isNaN(usernumber)){
            output.innerText = 'Некоректные данные'
        }
        else if(first == "RUB" && second == "RUB"){
            output.innerText = usernumber + " ₽"
        }
        
        else if(first == "TJS" && second == "TJS"){
            output.innerText = usernumber + " c"
        }
        else if(first == "RUB" && second == "TJS"){
            output.innerText = (usernumber / (json.Valute.TJS.Value)).toFixed(2) + " с";
        }
        else if(first == "TJS" && second == "RUB"){
            output.innerText = ((json.Valute.TJS.Value) * usernumber).toFixed(2) + " ₽";
        }
    
    })
}