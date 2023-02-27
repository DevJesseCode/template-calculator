"use strict";

const templateDisplay = document.getElementById("templateDisplay");
const xValueDisplay = document.getElementById("xValueDisplay");
const warn = {
	operatorsInX: () => alert("You may not use operators in the x input box."),
	noSelection: () => alert('Make a selection by clicking on either the "template" or "x" input box!'),
};
let selection = document.getElementById("selection").innerHTML;
let expression;

function changeSelection(value) {
	selection = value;
	document.getElementById("selection").innerHTML = selection;
}

function updateDisplay(value) {
	if (selection === "template") {
		templateDisplay.innerHTML += value;
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		xValueDisplay.innerHTML += value
	} else {
		warn.noSelection();
	}
}

function point() {
	if (selection === "template") {
		templateDisplay.innerHTML += ".";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		xValueDisplay.innerHTML += ".";
	} else {
		warn.noSelection();
	}
}

function dividedBy() {
	if (selection === "template") {
		templateDisplay.innerHTML += " / ";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		warn.operatorsInX();
	} else {
		warn.noSelection();
	}
}

function multipliedBy() {
	if (selection === "template") {
		templateDisplay.innerHTML += " * ";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		warn.operatorsInX();
	} else {
		warn.noSelection();
	}
}

function totalOf() {
	if (selection === "template") {
		templateDisplay.innerHTML += " + ";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		warn.operatorsInX();
	} else {
		warn.noSelection();
	}
}

function subtractedBy() {
	if (selection === "template") {
		templateDisplay.innerHTML += " - ";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		warn.operatorsInX();
	} else {
		warn.noSelection();
	}
}

function deleteLast() {
	let newDisplay = "";
	if (selection === "template") {
		for (let i = 0; i < templateDisplay.innerHTML.length - 1; i++) {
			newDisplay += templateDisplay.innerHTML[i];
		};
		templateDisplay.innerHTML = newDisplay;
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		for (let i = 0; i < xValueDisplay.innerHTML.length - 1; i++) {
			newDisplay += xValueDisplay.innerHTML[i];
		};
		xValueDisplay.innerHTML = newDisplay;
	} else {
		alert('Make a selection by clicking on either the "template" or "x" input box!')
	}
}

function clearAll() {
	if (selection === "template") {
		templateDisplay.innerHTML = "";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		xValueDisplay.innerHTML = "";
	} else {
		warn.noSelection();
	}
}

function pi() {
	if (selection === "template") {
		templateDisplay.innerHTML += "&pi;";
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		xValueDisplay.innerHTML += "&pi;";
	} else {
		warn.noSelection();
	};
}

function raiseToPower() {
	if (selection === "template") {
		let toRaise = "";
		let raiseTo;
		if (templateDisplay.innerHTML.lastIndexOf(" ") === -1) {
			toRaise = templateDisplay.innerHTML;
		} else {
			for (let i = templateDisplay.innerHTML.lastIndexOf(" ") + 1; i < templateDisplay.innerHTML.length; i++) {
				toRaise += templateDisplay.innerHTML[i];
			}
		}
		raiseTo = prompt(`Input the power to raise ${toRaise} to.`);
		templateDisplay.innerHTML += `<sup>${raiseTo}</sup>`;
		expression = templateDisplay.innerHTML;
	} else if (selection === "x") {
		warn.operatorsInX();
	} else {
		warn.noSelection();
	}
}

function replaceX() {
	expression = templateDisplay.innerHTML;
	let xIndex = expression.indexOf("x");
	let xValue = Number(xValueDisplay.innerHTML);
	for (let i; xIndex > 0; ) {
		if (xIndex === 0) {
			expression = expression.replace("x", xValue);
		} else if (Number(expression[xIndex]) - 1 === false) {
			expression = expression.replace("x", ` * ${xValue}`);
		}
		xIndex = expression.indexOf("x");
	}
	return expression;
}