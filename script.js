var result = document.getElementById("result").onclick = function() {

	var cont1 = Number(document.getElementById("cont1").value);
	var cont2 = Number(document.getElementById("cont2").value);

	if (cont1>cont2)
	alert(cont1 + " больше чем " + cont2)
else
	alert(cont2 + " больше чем " + cont1)



}






/*let value = prompt("Введите любое число");
let value1 = prompt("Введите второе любое число");

if (value ==2)
	alert( 'Вы правы!' );
else
	alert( ' ВЫ НЕ ПРАВЫ!!! 😡 ' )



value == 2 ? alert('Хорош! Верно.') : alert('НЕВЕРНО!!! 😡'); 


if (value == 0)
	alert ("Вы точно живёте в 21 веке?");
else if (value > 0 && value < 5)
	alert ("Надеюсь, вы проводите время с пользой и удовольствием");
else alert ("О нет! У вас зависимость")

if (value > value1)
	alert (value + " больше чем " + value1);
else
	alert (value1 + " больше чем " + value)*/
