window.onload=start;

function start () {

	//changeTextAndBack();
	changeCell();
	//changeBackgroundColor();
    resetEverything();
}

var count= 1;


function changeCell () {
	 var box = document.getElementsByTagName("td");
	  //loop is same as sayign add an event listener to each index
	 for (var i = 0; i < box.length; i++) {
	   // console.log("This is box[i] at index " + i);
	  // console.log(box[i]);
	  box[i].addEventListener("click", changeTextAndBack);
	 }
  
}

function changeTextAndBack (event) {
	
	if (event.target.innerHTML.length === 0) {
			if (count % 2 === 0){
		        event.target.innerHTML = "X";
		        event.target.style.backgroundColor = "rgba(206, 43, 54, .9)";
		        document.querySelector("h2").innerHTML = "Player One";
		  } else {
				event.target.innerHTML = "O";
				event.target.style.backgroundColor = "rgba(122, 222, 134, .9)";
				document.querySelector("h2").innerHTML = "Player Two";
				
			}
	    console.log("the count is now " + count);
	    console.log(event.target.innerHTML);
		count++;
		
	}

     // NOT CORRECT event.target.setAttribute("class", "selected");
	//(NOT CORRECT document.querySelector("td").setAttribute("class", "newback");
	
}

function resetEverything (){

   var resetButton = document.getElementById("reset");
   resetButton.addEventListener("click", clearBoard);
}

function clearBoard () {

		 var box = document.getElementsByTagName("td");
		//loop is same as sayign add an event listener to each index
		 for (var i = 0; i < box.length; i++) {
		  // console.log("This was the text before")
		 // console.log(box[i].innerHTML)
		 box[i].innerHTML = " ";
		 box[i].style.backgroundColor = "white";
		 //location.reload refreshes the page when you engage the clearBoard function
		 location.reload();
		  // console.log("This is the text after")
		 // console.log(box[i].innerHTML)
         }

}

var box = document.getElementsByTagName("td");
console.log(box);
for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("mouseover", changeColor);
	box[i].addEventListener("mouseout", changeBack);
}

function changeColor (event) {
	event.target.style.backgroundColor = "rgba(78, 177, 223, .7)";

}

function changeBack (event) {
	event.target.style.backgroundColor = "transparent";
}