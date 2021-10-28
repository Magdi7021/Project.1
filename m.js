//Adds text to todo list - if not empty//
document.getElementById("new").addEventListener("click", function(){
	const task = document.getElementById("text").value;
	if (task) {
		addNewTask(task);
		document.getElementById("text").value="";
	}
});

function removeItem(){
	const item = this.parentNode.parentNode; //targeting li
	const parent = item.parentNode; //targeting ul

	parent.removeChild(item);
}

function completeItem(){
	const item = this.parentNode.parentNode;
	const parent = item.parentNode;
	const parentId = parent.id;
	
	//to be able to change between completed and uncomplete items both ways
	const target = (parentId === "todo") ? document.getElementById("ready"):document.getElementById("todo");

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

//Adds new item to todo list
function addNewTask(item){
	const list = document.getElementById("todo");

	const newItem = document.createElement("li");
	newItem.innerText = item;
      newItem.setAttribute("contenteditable","true")
	const buttons = document.createElement("div");
	buttons.classList.add("buttons");

	//creates remove and complete buttons + add classes
	const remove = document.createElement("button");
	remove.classList.add("remove");
	remove.addEventListener("click", removeItem);

	const complete = document.createElement("button");
	complete.classList.add("complete");
  complete.addEventListener("click", completeItem);

	buttons.append(remove);
	buttons.append(complete);
	newItem.append(buttons);

	//insert new todo before the first element
	list.insertBefore(newItem, list.childNodes[0]);
}

//add event listener to pre-made list items

const deleteIt = document.getElementsByClassName("remove");
for (let i = 0; i < deleteIt.length; i++){
	deleteIt[i].addEventListener("click", removeItem);
}

const changeIt = document.getElementsByClassName("complete");
for (let i = 0; i < changeIt.length; i++){
	changeIt[i].addEventListener("click", completeItem);
}
