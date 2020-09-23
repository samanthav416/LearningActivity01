
	// Defining a global variable, notice the use 'let'
	
	document.addEventListener('DOMContentLoaded', function() {
		document.querySelector("button").onclick = inc;
	})
	let counter = 0;
	function inc() {
		// update the variable by one.
		counter = counter + 1;
		//notice querySelector using id of the component
		//notice the use templates/Strings litterals use back quotes that are nect to the number 1 on the keyboard
		
		document.querySelector("#score").innerHTML = `Score: ${counter}`;
		
		//Notice the use of if statement.
		
		if (counter >= 10) {
			counter = 0 
			document.querySelector("#score").innerHTML = "You Win!"
		}
	}