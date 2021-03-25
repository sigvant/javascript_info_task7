//rewrite the code below with arrow functions

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

//use arrows

let ask = (question, yes, no) => {
	if(confirm(question)) yes()
	else no();
}

ask(
	"Do you agree?",
	() => {alert("You agreed.");},
	() => {alert("You canceled the execution.");}
);