//your code here
function allowDrop(ev) {
  ev.preventDefault();
}

let start;
let end;
function drag(ev) {
	start = ev.target;
}

function drop(ev) {
  ev.preventDefault();
	end = ev.target;
	swapEle(start, end);
}

function swapEle(start, end) {
	// const temp = start;
	start.replaceWith(end, start);
	// end.replaceWith(temp);
}