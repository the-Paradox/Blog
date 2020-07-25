var num = 0;
function step(t) {
	if (t.innerHTML == "") {
		if (num % 2 == 0) {
			t.innerHTML = "X";
		}
		else {
			t.innerHTML = "O";
		}
		num++;
		analiz(t);
	}else{
		alert("Клітка не порожня!");
	}
}

function analiz(t) {
	var tr = t.parentNode.parentNode;
	var el=new Array();
	for (var i = 0; i < 9; i++) {
		el[i] = tr.getElementsByTagName("td")[i].
		innerHTML;
	}
	var win = false;
	if (el[0] == el[1] && el[1] == el[2] && el[0] ==
		el[2] &&(el[0]=="X"||el[0]=="O"))
	{
		alert(el[0] + " Переміг");
		win = true;
	}
	if (el[3] == el[4] && el[4] == el[5] && el[3] ==
		el[5] && (el[3] == "X" || el[3] == "O"))
	{
		alert(el[3] + " Переміг");
		win = true;
	}
	if (el[6] == el[7] && el[7] == el[8] && el[6] ==
		el[8] && (el[6] == "X" || el[6] == "O"))
	{
		alert(el[6] + " Переміг");
		win = true;
	}
	if (el[0] == el[3] && el[3] == el[6] && el[0] ==
		el[6] && (el[0] == "X" || el[0] == "O"))
	{
		alert(el[0] + " Переміг");
		win = true;
	}

	if (el[1] == el[4] && el[4] == el[7] && el[1] ==
		el[7] && (el[1] == "X" || el[1] == "O"))
	{
		alert(el[1] + " Переміг");
		win = true;
	}
	if (el[2] == el[5] && el[5] == el[8] && el[2] ==
		el[8] && (el[2] == "X" || el[2] == "O"))
	{
		alert(el[2] + " Переміг");
		win = true;
	}
	if (el[0] == el[4] && el[4] == el[8] && el[0] ==
		el[8] && (el[0] == "X" || el[0] == "O"))
	{
		alert(el[0] + " Переміг");
		win = true;
	}
	if (el[2] == el[4] && el[4] == el[6] && el[2] ==
		el[6] && (el[2] == "X" || el[2] == "O"))
	{
		alert(el[2] + " Переміг");
		win = true;
	}
	
	
	if (win == true) {
		location.reload();
	}else{
		if (el[0]&&el[1]&&el[2]&&el[3]&&el[4]&&el[5]&&el[6]&&el[7]&&el[8]){
			alert("Нічия");
			win=true;
		}
	}
}