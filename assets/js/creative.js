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

