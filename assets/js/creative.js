function insert(digit) {
	document.display.text_holder.value = document.display.text_holder.value + digit;
}

function erase() {
	document.display.text_holder.value = "";
}

function calc() {
	var getData = document.display.text_holder.value;

	if(getData) {
		document.display.text_holder.value = eval(getData);
	}
}

function back_step() {
	var exp = document.display.text_holder.value;
	document.display.text_holder.value = exp.substring(0, exp.length - 1);
}